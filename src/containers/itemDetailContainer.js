import React, { useState, useEffect,} from 'react';
import '../estilos/itemDetail.css';
import ItemDetail from '../componentes/itemDetail';
import { useParams } from "react-router-dom";
import { firestore } from '../firebase';
function ItemDetailContainer(){
    //const [item, setItem] = useState()
    const [ fireItem, setFireItem ] = useState()
    const {id} = useParams()
 
    useEffect(() => {
        const db = firestore
        const collection = db.collection('productos') 
        const item = collection.doc(id)
   
        item.get()
         .then( (i) => {
           setFireItem({ id: i.id, ...i.data()})
         })
   
     },  [id]);
     /* useEffect(() => {
        const promesa = new Promise((resolver, reject) =>{
            setTimeout(function(){
                const filtroProductos = apiProductos.find(producto => producto.id == id)
                console.log(filtroProductos)
                resolver(filtroProductos);
            }, 0);
        }
        )
        promesa.then(resultado => setItem (resultado) )
        promesa.catch(err => console.log(err))
    }, [id]);  */

    /* useEffect(() => {
        const db = firebase
        const collection = db.collection('productos') 
        const item = collection.doc(id)
   
        item.get()
         .then( (i) => {
           setFireItem({ id: i.id, ...i.data()})
         })
   
     },  [id]); */

    return(
        <div className="itemDetailContainer">
            {fireItem ? <ItemDetail 
            id={fireItem.id}
            title={fireItem.title}
            precio={fireItem.precio}
            imagen={fireItem.imagen}
            description={fireItem.description}
            stock={fireItem.stock}
            initial={fireItem.initial}
            item={fireItem}
            /> : <h2>Loading...</h2> }
        </div>
    )
}

export default ItemDetailContainer;

