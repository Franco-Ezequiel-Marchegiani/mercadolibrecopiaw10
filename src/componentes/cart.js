import React, { useContext } from 'react';
import {Button} from 'react-bootstrap';
import "../estilos/cart.css";
import { CartContext } from './cartContext';
import { Link } from 'react-router-dom';
import CartItem from './cartItem';

function Cart(){
    const {cart, limpiarCarrito, total} = useContext(CartContext)
    console.log(cart)
    return(
        
        <section className="itemListBackground">
            <div className="itemListContainer">
            <ul className="elements">
                <li className="tabs"><a href="">Carrito</a></li>
                <li className="tabs"><a href="">Guardados</a></li>
            </ul>
            <hr className="line"/>
            {cart.length > 0 ?(
            <>
                <div>
                    <p>Te falto comprar algo?</p>
                    <Link to={"/"}>
                        ¡Revisa nuestro catálogo para ver productos y ofertas increíbles!
                    </Link>
                </div>
            </>) 
            : 
            ( 
            <>    
            <div>
                <h3 className="tituloItemList">Tu carrito está vacío</h3>
                <h4 className="subTituloItemList">¿No sabes qué comprar? <Link to={"/"}>¡Miles de productos te esperan!</Link></h4>
            </div>
            
            </>
            )}
            <div className="item-cart">
                <article className="item">
                    {cart.length >0 && cart.map( producto => <CartItem key={producto.id}
                    id={producto.id}  title={producto.title} imagen={producto.imagen} precio={producto.precio}
                    cantida={producto.cantida} description={producto.description}/>)}
                </article>
            </div>
            
            {cart.length >0 &&
            <>
            
            <h2 className="totalAPagar">${total}</h2>
            <div className="botons__container">
                <Button onClick={limpiarCarrito}>
                    Vaciar carrito
                </Button>
                <Button onClick={() => {console.log(cart)}}>
                    Realizar compra
                </Button>
            </div>
            </>}
            
            </div>           
        </section>
    )
}

export default Cart