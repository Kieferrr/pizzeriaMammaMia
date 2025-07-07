import { pizzaCart } from "../data/pizzas"
import { useState } from "react"
import { formatPrice } from "../utils/formatPrice"
import './Cart.css'

const Cart = () => {

    const [cart, setCart] = useState(pizzaCart)

    const increaseCount = (id) => {
        const updatedCart = cart.map((pizza) =>
            pizza.id === id
                ? { ...pizza, count: pizza.count + 1 }
                : pizza
        )
        setCart(updatedCart)
    }

    const decreaseCount = (id) => {
        const updatedCart = cart.map((pizza) =>
            pizza.id === id
                ? { ...pizza, count: pizza.count - 1 }
                : pizza
        )
        const newCart = updatedCart.filter((pizza) => pizza.count > 0)
        setCart(newCart)
    }

    return (
        <div className="container cart-page">
            <div className="container-fluid d-flex flex-column cart">
                <p className="cart-title">Detalles del pedido:</p>
                {cart.map((pizza) => (
                    <div key={pizza.id} className="cart-products d-flex">
                        <img src={pizza.img} className="cart-img" />
                        <p>{pizza.name}</p>
                        <p>{formatPrice(pizza.price)}</p>
                        <button className="minus-button" onClick={() => decreaseCount(pizza.id)}>-</button>
                        <p className="quantity">{pizza.count}</p>
                        <button className="plus-button" onClick={() => increaseCount(pizza.id)}>+</button>
                    </div>
                ))}
                <p className="total">Total:</p>
                <button className="pay-button">Pagar</button>
            </div>
        </div>
    )
}

export default Cart