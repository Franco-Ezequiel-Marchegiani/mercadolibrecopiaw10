import React, { useState, useEffect } from 'react';
import NavBar from "./componentes/navbar";
import Carusel from './componentes/carusel';
import BarraHome from "./componentes/barraHome";
import ListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartWidget from './componentes/cartWidget';
import CartProvider from './componentes/cartContext';
import Cart from './componentes/cart';
import {firestore} from './firebase';
const App = function(){

    const [fireProductos, setFireProductos] = useState([])

    useEffect(() =>{
        
        const db = firestore
        const collection = db.collection("productos");
        const query = collection.get()

        query.then((resultado)=>{
            setFireProductos(resultado.docs.map(producto => ({id: producto.id, ...producto.data()})))
        }).catch((error)=>{
            console.log(error)
        })
    },[fireProductos])

    return(
        <>
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <Carusel/>
                            <BarraHome/>
                            <ListContainer products={fireProductos}/>
                        </Route>
                        <Route exact path="/category/:id">
                            <ListContainer products={fireProductos}/>
                        </Route>
                        <Route exact path="/item/:id">
                            <ItemDetailContainer/>
                        </Route>
                        <Route exact path="/cartWidget">
                            <CartWidget/>
                        </Route>
                        <Route exact path="/cart">
                            <Cart/>
                        </Route>
                    </Switch>
            </BrowserRouter>
        </CartProvider>
        </>
    )
}

export default App