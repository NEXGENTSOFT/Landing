import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import '../Styles/Footer.css'

function Footer() {
  return (
    <div className='container-footer'>
      <div className="container-info-footer">
        <div className="data-info-footer">
          <div className="data-redes">
            <AiFillInstagram className='icon-redes' />

          </div>
          <div className="data-redes">
            <FaFacebookF className='icon-redes' />

          </div>
        </div>
        <div className="data-info-footer">
          <p className="txt-footer">©2024 NEXGENSOFT</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
