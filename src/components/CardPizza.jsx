import { formatPrice } from "../utils/formatPrice"
import './CardPizza.css'


const CardPizza = ({img, name, ingredients, price}) => {
    return (
        <div className="col d-flex justify-content-center">
            <div className="card-pizza">
                <img src={img} alt="" />
                <h3 className="card-title">Pizza {name}</h3>
                <div className="card-ingredients">
                    <p className="ingredients-title">Ingredientes:</p>
                    <p>🍕 {ingredients.join(", ")}</p>
                </div>
                <div className="card-price">
                    <p className="price-title">Precio: ${formatPrice(price)}</p>
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