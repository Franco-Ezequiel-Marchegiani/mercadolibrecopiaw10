import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../estilos/itemListContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen1 from '../imagenes/lampara-200w.jpg'
import Imagen2 from '../imagenes/memoria-ram-8gb.jpg'
import Imagen3 from '../imagenes/samsung.jpg'
import ItemList from '../componentes/itemList';
import firebase from '../firebase';
import 'firebase/firestore';

function ListContainer(){
    
    //const [items, setItems] = useState([]);
    const [productosFirebase, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const ref = firebase.firestore().collection("productos");
      function getProductos(){
         setLoading(true);
         ref.onSnapshot((querySnapshot) =>{
             const items = [];
             querySnapshot.forEach((doc)=>{
              items.push(doc.data());
             });
             setProductos(items);
             setLoading(false);
         });
     }
     useEffect(() => {
         getProductos();
     }, []); 
     /* function getProductos(){
         setLoading(true);
         ref.get().then((item) =>{
             const items = item.docs.map((doc) => doc.data());
             setProductos(items);
             setLoading(false);
         });
     }
    
     useEffect(() => {
         getProductos();
     }, []); */
     console.log(productosFirebase)
    return(
        <section className="sectionItemCount">
            {<ItemList ref={productosFirebase}/>   }
            {ref.length > 0 ? <ItemList ref={productosFirebase}/> : <h2>Cargando...</h2>}
        </section>
    )
}
export default ListContainer