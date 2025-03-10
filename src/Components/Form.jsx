import React from 'react';

function Form() {
    const handleSubmit = (event) => {
        event.preventDefault(); 
        alert("Mensaje enviado");
    };

    return (
        <div className="section_form">
            <form id="consultation-form" className="feed-form" action="#" >
                <input required placeholder="Nombre" type="text" />
                <input required placeholder="Apellido" type="text" />
                <input name="phone" required placeholder="Teléfono" />
                <input required placeholder="Correo electrónico" type="text" />
                <textarea name="email" required placeholder="Mensaje" type="email" />
                <button onClick={handleSubmit} className="button_submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;
