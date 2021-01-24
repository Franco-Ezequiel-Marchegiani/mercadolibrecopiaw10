import React from 'react';
import NavBar from "./componentes/navbar";
import Carusel from './componentes/carusel';
import BarraHome from "./componentes/barraHome";
import ListContainer from './containers/itemListContainer';
import ItemDetailContainer from './containers/itemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CartWidget from './componentes/cartWidget';
import CartProvider from './componentes/cartContext';
import Cart from './componentes/cart';
const App = function(){
    return(
        <>
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                    <Switch>
                        <Route exact path="/">
                            <Carusel/>
                            <BarraHome/>
                            <ListContainer />
                        </Route>
                        <Route exact path="/category/:id">
                            <ListContainer/>
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