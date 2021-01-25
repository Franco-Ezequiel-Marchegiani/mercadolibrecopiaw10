import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../estilos/cartWidget.css';
import { CartContext } from './cartContext';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function CartWidget(){
    const { cantidad } = useContext(CartContext)
    return(
        <>
            { cantidad > 0 &&
            <> 
            <FontAwesomeIcon icon={faShoppingCart}/>
            <p>{cantidad}</p>
            </>}  
        </>
    )
}

export default CartWidget