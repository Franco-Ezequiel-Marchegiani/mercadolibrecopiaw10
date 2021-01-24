import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './item';
import { useParams } from 'react-router-dom';
import '../estilos/itemList.css';

function ItemList({productos}){
    const [ items, setItems ] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if(id){
            const category = productos.filter(producto => producto.categoryId == id)
            setItems(category)
        }
        else(
            setItems(productos)
        )
    }, [id, productos]);
    
    return(
        <section className="sectionItemCount">
            <div className="sectionHeaderItemCount">          
                    <h1 className="tituloUltimaCompra">Basado en tu última compra<a href="#" className="linkUltimaCompra">Ver Historial</a>
                    </h1>                      
            </div>
                <div className="divContainerCompras">
                {productos && productos.map( product => <Item 
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image} />)
                }
                </div>    
        </section>
    )
}

export default ItemList