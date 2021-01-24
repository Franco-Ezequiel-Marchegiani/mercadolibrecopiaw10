import React, {useState, useContext} from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../estilos/itemCount.css";
import { Link } from 'react-router-dom';
import { CartContext } from './cartContext';

function ItemCount({item, id, add, quitar, contador, stock}){
    const [abrirCarrito, setAbrirCarrito] = useState(false)
    const {aniadirCarrito} = useContext(CartContext)

    function aniadirYAbrir(item, contador, id){
        aniadirCarrito(item, contador, id)
        setAbrirCarrito(true)
    }
    return(
        <div>
            <Card.Body className="compraItem">
                <Button variant="primary" onClick={quitar} disabled={contador <= 1}>-</Button>
                <Card.Text>{contador}</Card.Text>
                <Button variant="primary" onClick={add} disabled={contador >= stock}>+</Button>
            </Card.Body>
            {!abrirCarrito ? (
            <div className="agregarCompra__carro">
            <Button onClick={ () => aniadirYAbrir(item, contador, id)}>
            Agregar al carrito
            </Button>
            </div>) 
            :
            (<div className="botonCompra">
                <Link to="/cart">
                    <Button>Terminar mi compra</Button>
                </Link>
            </div>)}   
        </div>
    )
}

export default ItemCount