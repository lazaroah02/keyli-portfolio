import React from 'react';
import NavBar from '../components/NavBar'
import MySkills from '../components/MySkills'
import ContactItems from '../components/ContactItems'
import '../App.css'

export default function Skills(){
    return (
        <div className = 'Skills'>    
            <NavBar/>
            <ContactItems/>
            <MySkills/>
        </div>
    )
}