import { useState } from "react"
import './Header.css'
import CardPizza from "./CardPizza"
import Header from "./Header"
import { pizzas } from "../data/pizzas.js"

const Home = () => {

    const [pizza, setPizza] = useState(pizzas)      

    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="pizza-container row row-cols-1 row-cols-md-3">
                    {pizza.map(p => (
                        <CardPizza
                            key = {p.id}
                            name= {p.name}
                            price = {p.price}
                            ingredients = {p.ingredients}
                            img = {p.img}
                        /> 
                ))}
                </div>
            </div>
        </div>
    )
}

export default Home