import React from 'react'
import { Link } from "react-router-dom";


function Introduction() {
  return (
    <div className="container-introduction">
        <div className="container-info-home">
            <div className="info-home">
                <p className="title-home">Innovación y Eficiencia en Cada Solución Digital</p>
                <p className="txt-decrip-home">Personaliza tu camino hacia el éxito con nuestras soluciones digitales. Transforma desafíos en oportunidades.</p>
                <Link to='/Nosotros' className="home">Nosotros</Link>
            </div>
        </div>
    </div>
  )
}

export default Introduction
