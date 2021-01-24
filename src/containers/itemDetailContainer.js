import React, { useState, useEffect,} from 'react';
import '../estilos/itemDetail.css';
import ItemDetail from '../componentes/itemDetail';
import { useParams } from "react-router-dom";
import ImagenCelu from '../imagenes/samsung-galaxy-a10.jpg';
import ImagenMemoria from '../imagenes/memoria-ram-8gb.jpg';
import ImagenLampara from '../imagenes/lampara-200w.jpg';

const apiProductos = [{
    id: 1,
    nombre: "Celular Samsung A10",
    precio: 4900,
    imagen: ImagenCelu,
    description: "Bonito celular, no le dura mucho la batería, pero se ve bonito",
    stock: 22,
    initial: 1,
    categoryId: "celulares",
},{
    id: 2,
    nombre: "Memoria RAM 8gb",
    precio: 2900,
    imagen: ImagenMemoria,
    description: "Buen componente para tu computadora, además tiene luces leds",
    stock: 5,
    initial: 1,
    categoryId: "Electrodomesticos",
},{
    id: 3,
    nombre: "Lamparas 200w",
    precio: 900,
    imagen: ImagenLampara,
    description: "Con estas lámparas iluminás toda la cuadra, son epetaculares",
    stock: 10,
    initial: 1,
    categoryId: "Electrodomesticos",
}]

function ItemDetailContainer(){
    const [item, setItem] = useState()
    const {id} = useParams()

    useEffect(() => {
        const promesa = new Promise((resolver, reject) =>{
            setTimeout(function(){
                const filtroProductos = apiProductos.find(product => product.id == id)
                console.log(filtroProductos)
                resolver(filtroProductos);
            }, 2000);
        }
        )
        promesa.then(resultado => setItem (resultado) )
        promesa.catch(err => console.log("Algo anda mal por aquí"))
    }, [id]);
    return(
        <div className="itemDetailContainer">
            {item ? <ItemDetail 
            id={item.id}
            nombre={item.nombre}
            precio={item.precio}
            imagen={item.imagen}
            description={item.description}
            stock={item.stock}
            initial={item.initial}
            /> : <h2>Loading...</h2> }
        </div>
    )
}

export default ItemDetailContainer;