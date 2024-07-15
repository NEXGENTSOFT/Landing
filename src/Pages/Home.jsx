import React from 'react'
import Header from '../Components/Header'
import Introduction from '../Screens/Introduction'
import HomeAbout from '../Screens/HomeAbout'
import Services from '../Screens/HomeServices'
import HomeChoose from '../Screens/HomeChoose'
import HomeTestimonial from '../Screens/HomeTestimonial'

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
            <HomeTestimonial />
        </>
    )
}

export default Home
