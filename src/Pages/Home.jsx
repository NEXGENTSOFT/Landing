import React from 'react'
import Header from '../Components/Header'
import Introduction from '../Screens/HomeIntroduction'
import HomeAbout from '../Screens/HomeAbout'
import Services from '../Screens/HomeServices'
import HomeChoose from '../Screens/HomeChoose'
import Footer from '../Components/Footer'
import Linear from '../Components/Linear'

import '../Styles/home.css'
import '../Styles/header.css'



function Home() {
    return (
        <>
            <Header />
            <Introduction />
            
            <HomeAbout />
            <Services />
            <HomeChoose />
            <Linear/>
            <Footer/>
        </>
    )
}

export default Home
