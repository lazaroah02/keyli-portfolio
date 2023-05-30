import React from 'react';
import './index.css'

export default function MySkills(){
    return(
        <div className = 'text-white skills-container row justify-content-center'>
            <div className = 'lenguages skills'>
                <h4>Lenguages</h4>
                <strong className = 'python-container'>Principal: <div className = 'Python'></div></strong>
                <strong className = 'java-script-container'>Secondary:<div className = 'Java'></div><div className = 'javascript'></div></strong>
            </div>
            <div className = 'front-skills skills'>
                <h4>Frontend</h4>
                <div className = 'html-css'></div>
                <div className = 'react'></div>
            </div>
            <div className = 'back-skills skills'>
                <h4>*Backend*</h4>
                <div className = 'django'></div>
                <div className = 'django-rest-framework'></div>
                <div className = 'sql-database'></div>
            </div>
            <div className = 'other-skills skills'>
                <h4>Others</h4>
                <div className = 'git-github'></div>
                <div className = 'docker'></div>
                <h5 className = 'english'>English B1</h5>
            </div>
        </div>
    )
}