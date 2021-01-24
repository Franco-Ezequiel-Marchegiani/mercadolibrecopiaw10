import React from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style.css"
import "../estilos/itemListContainer.css"
import { Link } from 'react-router-dom';
function Item({title, price, image, id}){

    return(
        <div className="items">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} className="imagenProducto" alt="imagen Producto" />
                    <Card.Body>
                        <Card.Text className="precioProducto">{price}</Card.Text>
                        <Card.Text className="nombreProducto">
                        {title}
                        </Card.Text>
                        <Link to={"/item/" + id}>Ver más</Link>
                    </Card.Body>
            </Card> 
        </div>
    )
}

export default Item