import { useState, useEffect } from "react"
import CardPizza from "./CardPizza"
import Header from "./Header"
import { fetchData } from "../services/api"

const Home = () => {

    const [pizzas, setPizzas] = useState([])      
    
    const url = "http://localhost:5000/api/pizzas";

    useEffect(() => {
        fetchData(url).then(setPizzas).catch(console.error)
    }, [])
    
    return (
        <div>
            <Header />
            <div className="container-fluid">
                <div className="pizza-container row row-cols-1 row-cols-md-3">
                    {pizzas.map(p => (
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