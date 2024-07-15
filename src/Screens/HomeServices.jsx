import React from 'react';
import { IoIosPhonePortrait } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { MdOutlineWebAsset } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";




function Services() {
  return (
    <div className="container-services">
      <div className="container-info-services">
        <div className="info-text-services">
          <p className="title-services">Servicios</p>
          <p className="descrip-services">Nos dedicamos a ofrecer una amplia gama de servicios tecnológicos diseñados para impulsar el crecimiento y la eficiencia de tu negocio.</p>
        </div>
        <div className="services">
          <div className="data-services">
            <FaCode className='icon-service'  size={70} />
            <p className="subtitle-service">Desarrollo de Software a Medida</p>
            <p className="subdescrip-service">Creamos aplicaciones personalizadas que se adaptan a las necesidades específicas de tu negocio, asegurando una solución única y efectiva.</p>
          </div>

          <div className="data-services">
            <IoIosPhonePortrait className='icon-service' size={70} />
            <p className="subtitle-service">Desarrollo de aplicaciones móviles</p>
            <p className="subdescrip-service">Diseñamos y desarrollamos aplicaciones móviles para Android, proporcionando una experiencia de usuario y funcionalidades avanzadas.</p>
          </div>
          <div className="data-services">
            <MdOutlineWebAsset className='icon-service' size={70} />
            <p className="subtitle-service">Desarrollo web</p>
            <p className="subdescrip-service">Creamos sitios web modernos y responsivos que reflejan la identidad de tu marca y ofrecen una experiencia de usuario óptima.</p>
          </div>

          <div className="data-services">
            <FaUserFriends className='icon-service' size={70} />
            <p className="subtitle-service">Consultoría Tecnológica</p>
            <p className="subdescrip-service">Ofrecemos asesoramiento experto para ayudarte a seleccionar, implementar y optimizar las mejores tecnologías para tu empresa.</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Services;
