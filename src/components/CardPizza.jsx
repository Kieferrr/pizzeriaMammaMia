import { formatPrice } from "../utils/formatPrice"
import './CardPizza.css'
import { capitalizeWords } from "../utils/capitalizeWords";

const CardPizza = ({ img, name, ingredients, price }) => {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card-pizza">
                <img src={img} alt="" />
                <h3 className="card-title">Pizza {capitalizeWords(name)}</h3>
                <div className="card-ingredients">
                    <p className="ingredients-title">Ingredientes:</p>
                    <ul className="ingredients-list">
                        {ingredients.map((ingredient, index) => (
                            <li key={index}>{capitalizeWords(ingredient)}</li>
                        ))}
                    </ul>
                </div>
                <div className="card-price">
                    <p className="price-title">Precio: {formatPrice(price)}</p>
                    <div className="card-buttons">
                        <button className="more-button">Ver Más 👀</button>
                        <button className="add-button">Añadir 🛒</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPizza