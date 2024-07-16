import React from 'react'
import Header from '../Components/Header'
import Introduction from '../Screens/AboutIntroduction'
import AboutInfo from '../Screens/AboutInfo'
import Footer from '../Components/Footer'
import '../Styles/About.css'

function About() {
    return (
        <>
            <Header />
            <Introduction />
            <AboutInfo/>
            <Footer/>
        </>
    )
}

export default About
