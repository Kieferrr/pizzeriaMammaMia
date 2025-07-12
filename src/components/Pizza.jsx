import { useEffect, useState } from 'react'
import './Pizza.css'
import axios from 'axios';
import { formatPrice } from '../utils/formatPrice';
import { capitalizeWords } from '../utils/capitalizeWords';

const Pizza = () => {

    const [pizza, setPizza] = useState(null);

    const urlPizza1 = "http://localhost:5000/api/pizzas/p001"

    const getData = async () => {
        try {
            const response = await axios.get(urlPizza1)
            setPizza(response.data)
            console.log(response.data);
        } catch (error) {
            console.log("Error en la petición:", error)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    const emojiDict = {
        mozzarella: "🧀",
        tomates: "🍅",
        jamón: "🍖",
        orégano: "🌿",
    };

    if (!pizza) {
        return <p>Cargando Pizza...</p>
    }

    return (

        <div className='desc-page'>
            <div className='container desc-card'>
                <div className="img-container">
                    <img src={pizza.img} alt={pizza.name} />
                </div>
                <div className='card-content'>
                    <div className='card-head'>
                        <h2 className='pizza-name'>{capitalizeWords(pizza.name)}</h2>
                        <span className='price'>{formatPrice(pizza.price)}</span>
                    </div>
                    <h3 className='card-subtitle'>Descripción</h3>
                    <p className='pizza-content'>{pizza.desc}</p>
                    <h3 className='card-subtitle'>Ingredientes</h3>
                    <div className='card-ing'>
                        {pizza.ingredients.map((ing, index) => (
                            <span className='ingredients' key={index}>{emojiDict[ing] ?? "🍕"} {capitalizeWords(ing)}</span>
                        ))}
                    </div>
                    <button className='cart-button'>🛒 Añadir al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default Pizza