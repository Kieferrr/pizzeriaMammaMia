import { useState, useEffect } from "react"
import CardPizza from "./CardPizza"
import Header from "./Header"
import axios from "axios"

const Home = () => {

    const [pizza, setPizza] = useState([])      
    
    const url = "http://localhost:5000/api/pizzas";

    const getData = async()  => {
        try {
            const { data } = await axios.get(url);
            setPizza(data)
        } catch (error) {
            console.error("Error en la petición:", error)
        }
    }

    useEffect(() => {
        getData()
    }, [])
    
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