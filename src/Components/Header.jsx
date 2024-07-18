import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="container-header-data">
                <div className="div-logo">
                    <img src="public/Logo/logo.png" alt="" className="img-logo" />
                </div>

                <div className='div-nav'>
                    <Link to="/" className="nav-link"> Inicio </Link>
                    <Link to="/Nosotros"className="nav-link"> Acerca de </Link>
                    <Link to="/Productos" className="nav-link"> Proyectos </Link>
                    <Link to="/Contactanos" className="nav-link"> Contactanos</Link>
                </div>

                <div className="data-redes-sociales">

                    <a href='https://www.instagram.com/nexgensoft.ids/' className="data-redes">
                        <AiFillInstagram className='icon-redes' />

                    </a>
                    <a href='https://www.facebook.com/people/Nexgensoft/61561971567057/?mibextid=qi2Omg&rdid=DJuQvVSWkXnmpjsE&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCj9qkDZpfoybSjQw%2F%3Fmibextid%3Dqi2Omg' className="data-redes">
                        <FaFacebookF   className='icon-redes' />

                    </a>
                </div>

                <div className="div-data-locations">
                    <div className="data-info">
                        <Link to='/Terminos&Condiciones' className="txt-header">Terminos & Condiciones </Link>
                    </div>

                    <div className="data-info">
                        <p className="txt-header"> | </p>
                    </div>

                    <div className="data-info">
                        <Link to='/Privacidad' className="txt-header"> Privacidad</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
