import './Profile.css'
import profilePhoto from '../assets/img/profilePhoto.png'

const Profile = () => {
    return (
        <div className='profile-page'>
                <div className='profile-content'>
                    <div className='profile-head'>
                        <h1>Perfil</h1>
                        <img src={profilePhoto} alt="Avatar de usuario amarillo" />
                    </div>
                    <p className='account-email'>Correo: nicolas.rivero@hotmail.com</p>
                    <button className='logout-btn'>Cerrar Sesión</button>
                </div>
        </div>
    )
}

export default Profile