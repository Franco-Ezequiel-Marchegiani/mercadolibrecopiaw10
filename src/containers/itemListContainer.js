import React, {useState, useEffect} from 'react';
import "../estilos/itemListContainer.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Imagen1 from '../imagenes/lampara-200w.jpg'
import Imagen2 from '../imagenes/memoria-ram-8gb.jpg'
import Imagen3 from '../imagenes/samsung.jpg'
import ItemList from '../componentes/itemList';

function ListContainer(){
    
    const [items, setItems] = useState([])
    const productos = [
        {id:1, title: 'Celular Samsung A10', price: 4900, image: Imagen3 ,stock: 4, categoryId: "celulares" },
        {id:2, title: 'Memoria RAM 8gb', price: 2900, image: Imagen2 ,stock: 10, categoryId: "Electrodomesticos" },
        {id:3, title: 'Lamparas 200w', price: 900, image: Imagen1 ,stock: 19, categoryId: "Electrodomesticos" }
    ]
    useEffect(() =>{
        const pedido = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(productos)
            },2000)
        })
        pedido
        .then((result) =>{
            setItems(result)   
        })
        .catch((reject) =>{
            console.log("Hubo un inconveniente")
        })
    }, []);

    return(
        <section className="sectionItemCount">
            {items ? <ItemList productos={items}/> : <h2>Cargando...</h2>   }
        </section>
    )
}
export default ListContainer