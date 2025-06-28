import './RegisterPage.css'
import { useState } from 'react'
import Swal from 'sweetalert2';

const RegisterPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedConfirmPassword = confirmPassword.trim();

        if (!trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
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

        if (trimmedPassword !== trimmedConfirmPassword) {
            Swal.fire({
                title: "Verifica tus contraseñas",
                text: "Las contraseñas no coinciden",
                icon: "warning",
                theme: "dark",
            });
            return;
        }

        setEmail("");
        setPassword("")
        setConfirmPassword("")

        Swal.fire({
            title: "Registro exitoso",
            text: "Tu cuenta fue creada correctamente",
            icon: "success",
            confirmButtonText: "Aceptar",
            theme: "dark",
        });
    }

    return (
        <div className="container register-page">
            <div className='register-title'>
                <h2>Register</h2>
            </div>
            <form
                className='register-form'
                onSubmit={handleSubmit}
            >
                <label>Email</label>
                <input
                    type="email"
                    placeholder='Ingresa tu correo'
                    className='register-input'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label>Contraseña</label>
                <input
                    type="password"
                    placeholder='Ingresa tu contraseña'
                    className='register-input'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label>Confirmar contraseña</label>
                <input
                    type="password"
                    placeholder='Vuelve a ingresar tu contraseña'
                    className='register-input'
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                    type='submit'
                    className='register-button'
                >Registrar
                </button>
            </form>
        </div>
    )
}

export default RegisterPage