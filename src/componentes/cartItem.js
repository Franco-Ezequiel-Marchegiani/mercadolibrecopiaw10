import React, { useContext } from 'react';
import {Button} from 'react-bootstrap';
import "../estilos/cart.css";
import { CartContext } from './cartContext';
import { Link } from 'react-router-dom';

function CartItem({id, title, precio, image, cantida, description}){
    const { eliminarDelCarrito } = useContext(CartContext)
    
    return(
        <div>
            <article className="item">
                <img src={image} alt={image} className="imagenProducto"/>
                    <div className="product__container">
                    <h2 className="mensajeNombre">{title}</h2>
                    <h3 className="mensajeCaracteristicas">{description}<Link to={"/"} className="mensajeModificar">Modificar</Link></h3>
                    <p className="mensajeEnvio">Envío gratis</p>
                    </div>
                    <div className="cantidadProductos__container">
                        <p className="cantidadProductos">{cantida}</p>
                    <span className="cantidadProductosDisponibles">4 Disponibles</span>
                    </div>
                    <div className="containerPrecio">
                    <span className="tipoDeMoneda">$</span>
                    <span className="precio__pagar">{precio}</span>
                    </div>
            </article>
            <ul className="listProducto">
                <li><Button onClick={(id)=>eliminarDelCarrito(id)}>X</Button></li>
                <li><a href="#" className="optionsItem">Más productos del vendedor</a></li>
                <li><a href="#" className="optionsItem">Comprar ahora</a></li>
                <li><a href="#" className="optionsItem">Guardar para después</a></li>
            </ul>
        </div>
    )
}
export default CartItem