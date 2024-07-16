import React from 'react'

function Form() {
    return (

        <div class="section_form">
            <form id="consultation-form" class="feed-form" action="#" >
                <input required="" placeholder="Nombre" type="text" />
                <input required="" placeholder="Apellido" type="text" />
                <input name="phone" required="" placeholder="Teléfono" />
                <input required="" placeholder="Correo electrónico" type="text" />
                <textarea name="email" required="" placeholder="Mensaje" type="email" />
                <button class="button_submit">Enviar</button>
            </form>
        </div>

    )
}

export default Form
