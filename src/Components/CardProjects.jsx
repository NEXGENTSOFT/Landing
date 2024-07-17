import React from 'react';
import '../Styles/CardProject.css';

function CardProjects(props) {
    return (
        <div className="card-project">
            <div className="card-image-project">
                <img className='img-project' src={props.img} alt="" />
            </div>
            <p className="card-title-project">{props.title}</p>
            <p className="card-body-project">
                {props.descripcion}
            </p>
        </div>
    );
}

export default CardProjects;


