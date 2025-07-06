import { pizzaCart } from "../data/pizzas"
import { useState } from "react"
import './Cart.css'

const Cart = () => {
    
    return (
        <div className="container cart-page">
            <div className="container-fluid d-flex flex-column cart">
                <p className="cart-title">Detalles del pedido:</p>
                <div className="cart-products d-flex">
                <p>Napolitana</p><p>$5.950</p>
                <button className="minus-button">-</button> <p className="quantity">1</p> <button className="plus-button">+</button>
                </div>
                <p className="total">Total:</p>
                <button className="pay-button">Pagar</button>
            </div>
        </div>
    )
}

export default Cart