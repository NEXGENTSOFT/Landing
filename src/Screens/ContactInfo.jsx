import React from 'react'
import Form from '../Components/Form'
import { IoPhonePortraitSharp } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";



function ContactInfo() {
    return (
        <div className="container-contact">
            <div className="container-info-empresa">
                <div className="data-info-empresa">
                    <div className="data-empresa">
                        <IoPhonePortraitSharp className='icon-contact' />
                        <p className="txt-empresa">Teléfono</p>
                        <p className='txt-descrip-contact'>+52 961 658 5605</p>
                    </div>

                    <div className="side-bar left"></div>

                    <div className="data-empresa">
                        <IoLocationOutline className='icon-contact' />
                        <p className="txt-empresa">Origen</p>
                        <p className='txt-descrip-contact'>Tuxtla Gutiérrez, Chiapas</p>
                    </div>
                    <div className="side-bar right"></div>

                    <div className="data-empresa">
                        <AiOutlineMail  className='icon-contact' />
                        <p className="txt-empresa">Correo electrónico</p>
                        <p className='txt-descrip-contact'>nexgensoft.ids@gmail.com</p>

                    </div>
                </div>
                <div className="form-empresa">
                    <p className="descrip-form-contact">SI TIENE ALGUNA PREGUNTA <br/> NO DUDE EN ENVIARNOS UN MENSAJE.</p>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
