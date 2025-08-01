import { useEffect, useState } from 'react'
import './Pizza.css'
import { formatPrice } from '../utils/formatPrice';
import { capitalizeWords } from '../utils/capitalizeWords';
import { fetchData } from '../services/api';

const Pizza = () => {

    const [pizza, setPizza] = useState(null);

    const urlPizza1 = "http://localhost:5000/api/pizzas/p001"

    useEffect(() => {
        fetchData(urlPizza1).then(setPizza).catch(console.error);
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