import React from 'react'
import '../Styles/Contact.css'
import Header from '../Components/Header'
import Introduction from '../Screens/ContactIntroduction'
import ContactInfo from '../Screens/ContactInfo'
import Footer from '../Components/Footer'

function Contact() {
    return (
        <>
            <Header />
            <Introduction />
            <ContactInfo/>
            <Footer/>
        </>
    )
}

export default Contact
