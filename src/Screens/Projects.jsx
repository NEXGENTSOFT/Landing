import React from 'react'
import Card from '../Components/CardProjects'

const info = [
    {
        img: "/Projects/selvet.jpg",
        titulo: "SELVET",
        descripcion: 'Es una aplicación web que permite el monitoreo del ambiente de un laboratorio químico, así como la detección y alerta de posibles anomalías'
    },
    {
        img: "/Projects/timecard.png",
        titulo: "TimeCard",
        descripcion: 'Es una aplicación web de flashcards con calendario integrado, para llegar a más estudiantes y profesionales en constante formación.'
    },
    {
        img: "/Projects/cafe.png",
        titulo: "Café Santos",
        descripcion: 'Es un ecommerce especializado en la venta de café, gestionado por una microempresa dedicada a ofrecer café de buena calidad.'
    },
    {
        img: "/Projects/gestor.png",
        titulo: "Gestion personal",
        descripcion: 'Es aplicación web  donde podrás registrar tus ingresos y egresos, categorizar tus gastos y visualizar informes detallados que te ayudarán a entender mejor tu situación financiera.'
    },
]



function Projects() {
    return (
        <div className="container-Projects">
            <div className="container-info-projects">
                <div className="title-projects">
                    <p className="txt-title-project">Proyectos</p>
                    <p className="descrip-project">
                    Desarrollamos aplicaciones móviles y web innovadoras que mejoran la gestión y la interacción en diversas áreas. Nuestros proyectos están diseñados para facilitar la vida de los usuarios y optimizar procesos en diferentes sectores.                       </p>
                </div>


                <div className="data-projects">
                    {info.map((project, index) => (
                        <Card key={index}
                            img={project.img}
                            title={project.titulo}
                            descripcion={project.descripcion} />
                    ))}
                </div>
                <div className="data-projects-phone">
                    <div className="card-project-phone">
                        <div className="card-image-project-phone">
                            <img className='img-project' src='/Projects/zestyblaze.png' alt="" />
                        </div>
                        <p className="card-title-project">ZestyBlaze</p>
                        <p className="card-body-project">
                        Es una aplicación móvil innovadora que te permite compartir y descubrir fotos de manera sencilla y divertida.
                        </p>
                    </div>

                    <div className="card-project-phone">
                        <div className="card-image-project-phone">
                            <img className='img-project' src='/Projects/cloutheald.png' alt="" />
                        </div>
                        <p className="card-title-project">CloudHealth </p>
                        <p className="card-body-project">
                        Es una aplicación móvil creada para la gestión de hospitales, permitiendo a administradores, trabajadores y sectores colaborar de manera eficiente.                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects
