import React from 'react';
import NavBar from '../components/NavBar'
import ContactItems from '../components/ContactItems'
import AboutMe from '../components/AboutMe'
import '../App.css'

export default function AboutUs(){
    return(
        <div className = 'About_me'>
            <NavBar/>
            <ContactItems/>
            <AboutMe/>
        </div>
    )
}