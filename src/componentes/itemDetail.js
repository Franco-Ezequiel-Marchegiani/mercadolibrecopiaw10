import React, {useState} from 'react';
import '../estilos/itemDetail.css';
import {Card, Button, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './itemCount';
import { Link } from 'react-router-dom';
function ItemDetail({nombre, precio, imagen, id,description, stock, initial, item}){
    const [contador, setContador] = useState(initial)
    
    function add(){
        if(contador < stock){
            setContador(contador+1)
        }
    }
    function quitar(){
        if(contador > initial){
            setContador(contador-1)
        }
    }
    return(
        <div className="itemDetail">
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Precio: ${precio}</ListGroup.Item>
                        <ListGroup.Item>Stock disponible: {stock}</ListGroup.Item>
                    </ListGroup>                  
                    <div className="botonesCompra">
                        <ItemCount stock={stock} add={add} quitar={quitar} contador={contador} id={id} item={item}/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ItemDetail;