import React from 'react';
import Cubo from '../Components/Spinner';

function HomeAbout() {
  return (
    <div className='container-HomeAbout'>
      <div className="container-info-about-home">
        <div className="info-about-home">
          <img src="/public/programmer.jpg" className='image-about' alt="Nosotros" />
          <p className="title-aboutHome">Nosotros</p>
        </div>
        <div className="info-about-home-text">
          <div className="container-about-text">
            <p className="descrip-abouthome">
              En Nexgensoft, nos dedicamos a ofrecer soluciones de software prácticas y adaptadas a tus necesidades. Creemos firmemente en la colaboración con nuestros clientes para desarrollar soluciones útiles e innovadoras, siempre alineadas con los objetivos específicos de cada proyecto.
              Nos enorgullece construir productos que no solo satisfacen las necesidades actuales, sino que también anticipan futuros desafíos y oportunidades, asegurando así que nuestras soluciones sean escalables y sostenibles a largo plazo. Valoramos profundamente la confianza y la transparencia en todas nuestras interacciones, y nos esforzamos por construir relaciones duraderas basadas en la comunicación abierta, el respeto mutuo y el compromiso con tu éxito.
            </p>
            <button className="home">Leer más</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
