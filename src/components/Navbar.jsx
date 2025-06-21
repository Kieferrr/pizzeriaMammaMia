

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
                    <button>🍕 Home</button>
                    {token ?
                        (
                            <>
                                <button>🔓 Profile</button>
                                <button>🔒 Logout</button>
                            </>
                        ) :
                        (
                            <>
                                <button>🔐 Login</button>
                                <button>🔐 Register</button>
                            </>
                        )
                    }
                </div>
            </div>
            <div className="navbar-price">
                <button>🛒 Total: ${total}</button>
            </div>
        </nav>
    )
}

export default Navbar