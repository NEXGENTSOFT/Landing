import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="container-header-data">
                <div className="div-logo">
                    <img src="public/logo.png" alt="" className="img-logo" />
                </div>

                <div className='div-nav'>
                    <Link to="/" className="nav-link"> Inicio </Link>
                    <Link to="/Nosotros"className="nav-link"> Nosotros </Link>
                    <Link to="/" className="nav-link"> Productos </Link>
                    <Link to="/Conta" className="nav-link"> Contactanos</Link>
                </div>

                <div className="data-redes-sociales">

                    <div className="data-redes">
                        <AiFillInstagram className='icon-redes' />

                    </div>
                    <div className="data-redes">
                        <FaFacebookF className='icon-redes' />

                    </div>
                </div>

                <div className="div-data-locations">
                    <div className="data-info">
                        <p className="txt-header">Terminos & Condiciones </p>
                    </div>

                    <div className="data-info">
                        <p className="txt-header"> | </p>
                    </div>

                    <div className="data-info">
                        <p className="txt-header"> Contactanos</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
