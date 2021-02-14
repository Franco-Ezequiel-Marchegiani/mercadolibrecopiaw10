import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import "../estilos/itemListContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from '../componentes/itemList';
import {firestore} from '../firebase';

function ListContainer({products}){
    
    //const [items, setItems] = useState([])
    const [productosLista, setProductosLista] = useState([])
    const { id } = useParams()


    useEffect(() =>{
        if(id){
            const category = products.filter(productos => productos.categoryId === id)
            setProductosLista(category)
        }
        else{
            setProductosLista(products)
        }
    }, [id, products])

    /* useEffect(() =>{
        if(id){
            const db = firestore
            const collection = db.collection("productos");
            const query = collection.where('categoryId', "==",id).get()
            query.then((resultado)=>{
                setProductosLista(resultado.docs.map(p => ({id: p.id, ...p.data()})))
            }).catch(()=>{
                console.log("Fallo")
            })

        }else{
            setProductosLista(products)
        }

        
    },[id, products]) */

    return(
        <section className="sectionItemCount">
            {products.length > 0 ? <ItemList products={productosLista}/> : <h2>Cargando...</h2>   }
        </section>
    )
}
export default ListContainer