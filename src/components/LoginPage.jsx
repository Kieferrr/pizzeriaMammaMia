import './LoginPage.css'
import { useState } from 'react'
import Swal from 'sweetalert2';

const LoginPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        if (!trimmedEmail || !trimmedPassword) {
            Swal.fire({
                title: "Completa todos los campos",
                text: "Ningún campo puede estar vacío o contener solo espacios",
                icon: "warning",
                theme: "dark",
            });
            return;
        }

        if (trimmedPassword.length < 6) {
            Swal.fire({
                title: "La contraseña no es válida",
                text: "La contraseña debe tener al menos 6 carácteres (sin contar espacios al inicio o final)",
                icon: "warning",
                theme: "dark",
            });
            return;
        }

        setEmail("");
        setPassword("")

        Swal.fire({
            title: "Login exitoso",
            text: "¡Has ingresado a tu cuenta!",
            icon: "success",
            confirmButtonText: "Aceptar",
            theme: "dark",
        });
    }

    return (
        <div className="container login-page">
            <div className='login-title'>
                <h2>Login</h2>
            </div>
            <form
                className='login-form'
                onSubmit={handleSubmit}
            >
                <label>Email</label>
                <input
                    type="email"
                    placeholder='Ingresa tu correo'
                    className='login-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Contraseña</label>
                <input
                    type="password"
                    placeholder='Ingresa tu contraseña'
                    className='login-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='login-button'
                >Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage