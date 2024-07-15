import React from 'react'
import Graficas from '../Components/Graphic'

function HomeChoose() {
    return (
        <div className="container-choose">
            <div className="container-inf-choose">
                <div className="data-info-choose">
                    <p className="title-choose">¿Por qué Elegirnos?</p>
                    <p className="descrip-choose">
                        Elegir Nexgensoft significa optar por un socio confiable en tu transformación digital.
                        Nos comprometemos a ofrecer un enfoque personalizado en cada proyecto, asegurando que nuestras
                        soluciones se adapten perfectamente a tus necesidades. Nuestro equipo de expertos utiliza
                        tecnologías confiables y de vanguardia, lo que garantiza la calidad y la eficiencia en cada entrega.
                        <br/>
                        Valoramos la comunicación abierta y buscamos construir relaciones sólidas con nuestros 
                        clientes. Nuestro objetivo es trabajar juntos para encontrar las mejores soluciones que 
                        contribuyan al crecimiento de tu negocio. Estamos aquí para acompañarte en cada etapa del 
                        camino.
                    </p>
                </div>
                <div className="data-info-choose">
                    <Graficas />
                </div>
            </div>
        </div>
    )
}

export default HomeChoose

