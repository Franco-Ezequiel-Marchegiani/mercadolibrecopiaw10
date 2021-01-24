import React, { useEffect, useState } from "react";

export const CartContext = React.createContext();

function CartProvider( {children} ){
    const [cart, setCart] = useState([])
    const [cantidad, setCantidad] = useState(0)
    const [total, setTotal] = useState()

    useEffect(() =>{
        var i = 0
        const totales = cart.map(p => p.precio * p.cantida)
        totales.map(p => i = i + p)
        setTotal(i)
        const cartCantidad = cart.length
        setCantidad(cartCantidad)
    }, [cart])

    function estaEnCart(id){
        const item = cart.find(p => p.id === id)
        if(item === undefined){
            return false
        }
        else{
            return true
        }
    }

    function aniadirCarrito(producto, contador, id){
        if(estaEnCart(id)){
            const viejoProducto = cart.find(p => p.id === id)
            const nuevaCantidad = viejoProducto.cantida + contador
            const nuevoProducto = {id: viejoProducto.id, nombre: viejoProducto.nombre, precio: viejoProducto.precio, imagen: viejoProducto.imagen, description: viejoProducto.description, stock: viejoProducto.stock, cantida: nuevaCantidad}
            const cartSinProductoViejo = cart.filter(producto => producto.id =! id)
            const cartProductoNuevo = [...cartSinProductoViejo,nuevoProducto]
            setCart(cartProductoNuevo)
        } else {
            /* Al lanzarlo menciona de que no puede encontrar el id, pero no puede encontrar ningún parámetro (nombre, producto,etc.) */
            const nuevoItem = { id: producto.id, nombre: producto.nombre, precio: producto.precio, imagen: producto.imagen, description: producto.description, stock: producto.stock, cantida: contador}
            setCart([...cart, nuevoItem])
        }
    }
    function eliminarDelCarrito(id){
        const nuevoCarrito = cart.filter(producto => producto.id !== id)
        setCart(nuevoCarrito)
    }
    function limpiarCarrito(){
        setCart([])
        setCantidad(0)
    }

    return(
        <CartContext.Provider value ={{cart, cantidad, total, aniadirCarrito, eliminarDelCarrito, limpiarCarrito}}>
        { children }
        </CartContext.Provider>
    )
}
export default CartProvider