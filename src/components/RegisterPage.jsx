import './RegisterPage.css'
import { useState } from 'react'

const RegisterPage = () => {

    return (
        <div className="container register-page">
                <div className='register-title'>
                    <h2>Sign Up</h2>
                </div>
                <form className='register-form' action="">
                    <p>Email</p>
                    <input
                        type="text"
                        placeholder='Ingresa tu correo'
                        className='register-input'
                    />
                    <p>Contraseña</p>
                    <input
                        type="text"
                        placeholder='Ingresa tu contraseña'
                        className='register-input'
                    />
                    <p>Confirmar contraseña</p>
                    <input
                        type="text"
                        placeholder='Vuelve a ingresar tu contraseña'
                        className='register-input'
                    />
                    <button className='register-button'>Registrar</button>
                </form>
        </div>
    )
}

export default RegisterPage