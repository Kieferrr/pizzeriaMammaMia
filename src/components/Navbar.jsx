import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice"
import './Navbar.css'

const Navbar = () => {
    const total = 25000;
    const token = false;

    return (
        <nav className="container-fluid navbar-style">
            <div className="navbar-left">
                <div className="navbar-title">
                    <p>Pizzería Mamma Mía!</p>
                </div>
                <div className="navbar-buttons">
                    <Link to="/" className="custom-btn">
                        🍕 Home
                    </Link>
                    {token ?
                        (
                            <>
                                <Link to="/profile" className="custom-btn">🔓 Profile</Link>
                                <Link className="custom-btn">🔒 Logout</Link>
                            </>
                        ) :
                        (
                            <>
                                <Link to="/login" className="custom-btn">🔐 Login</Link>
                                <Link to="/register" className="custom-btn">🔐 Register</Link>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="navbar-price">
                <Link to="/cart" className="custom-btn">🛒 Total: {formatPrice(total)}</Link>
            </div>
        </nav>
    )
}

export default Navbar