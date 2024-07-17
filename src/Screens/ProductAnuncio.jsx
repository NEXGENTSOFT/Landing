import React from 'react'
import Phone from '../Components/Phone'
import Btn from '../Components/ButtonPlay'

function ProductAnuncio() {
    return (
        <div className="container-ProductAnuncio">
            <div className="container-producto">
                <div className="info-producto">
                    <p className="title-anuncio">TopoSmart: La Nueva Era de la Topografía</p>
                    <p className="descrip-anuncio">Descubre nuestra innovadora aplicación móvil que revoluciona
                        las tareas topográficas. Gestiona proyectos y reportes en tiempo real, todo desde un solo
                        lugar. <br/>¡Únete a la revolución topográfica con TopoSmart!
                    </p>
                    <Btn/>
                </div>

                <div className="img-producto">
                    <Phone />
                </div>
            </div>
        </div>
    )
}

export default ProductAnuncio
