import React, {useEffect, useState} from 'react'
import {useLocation} from 'wouter'
import NavBar from '../components/NavBar'
import ContactItems from '../components/ContactItems'
import FirstProjects from '../components/FirstProjects'
import MidLevelProjects from '../components/MidLevelProjects'
import FullStackProjects from '../components/FullStackProjects'
import '../App.css'

const style = {
    style:{
        textAlign: 'center',
        marginTop: '1rem',
    }}

export default function Projects() {
    const [location,] = useLocation()
    return(
        <div className = "Projects">
            <NavBar/>
            <ContactItems/>
            <div className = 'container text-white' style={style.style}>
                Here, some of the projects that i made on my learning process, they helped me to improve my skills on programming.
                You can find the source code on my github.
            </div>
            {location == '/first-projects'?<FirstProjects/>:null}
            {location == '/mid-level-projects'?<MidLevelProjects/>:null}
            {location == '/full-stack-projects'?<FullStackProjects/>:null}
        </div>
    )
}