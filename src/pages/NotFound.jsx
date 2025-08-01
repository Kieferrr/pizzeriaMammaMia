import './NotFound.css'
import notFoundImg from '../assets/img/pizza-404.jpg'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='notFound-page'>
            <div className='notFound-content'>
                <img src={notFoundImg} alt="Pizza muerta animada" className='notFound-img' />
                <h1>404</h1>
                <h2>Ups... página no encontrada!</h2>
                <Link to="/" className='home-btn' >Volver al inicio</Link>
            </div>
        </div>
    )
}

export default NotFound