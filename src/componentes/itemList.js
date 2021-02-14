import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './item';
import { useParams } from 'react-router-dom';
import '../estilos/itemList.css';
//import firebase from '../firebase';

function ItemList({products}){
    //const [ items, setItems ] = useState([])

    /* const { id } = useParams()

    useEffect(() => {
        if(id){
            const db = firebase
            const collection = db.collection('productos')
            const query = collection.where('categoryId',"==",id).get()
            query
            .then((result) => {
                setItems(result.docs.map(p => ({id: p.id, ...p.data()})))
              })
              .catch((error) => {
                console.log(error)
              })
            
        }
        else(
            setItems(productos)
        )
    }, [id, productos]); */
    
    return(
        <section className="sectionItemCount">
            <div className="sectionHeaderItemCount">          
                    <h1 className="tituloUltimaCompra">Basado en tu última compra<a href="#" className="linkUltimaCompra">Ver Historial</a>
                    </h1>                      
            </div>
                <div className="divContainerCompras">
                {products && products.map( product => <Item 
                key={product.id}
                id={product.id}
                title={product.title}
                precio={product.precio}
                imagen={product.imagen} />)
                }
                </div>    
        </section>
    )
}

export default ItemList