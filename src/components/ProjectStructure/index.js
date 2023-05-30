import React from 'react';
import './index.css'

export default function ProjectStructure({title = '', description = '',link = null, images = []} ){
    return(
        <div className = 'text-white'>
            <h2 className = 'project-title'>{title}</h2>
            <div className = 'photos-project'>
                {images.map(image => <img src = {image}/>)}
            </div>
            {link === null?null:<div className = 'link'><a  href = {link} target = '_blank'>Visit here</a></div>}
            <div className = 'project-description container'>{description}</div>
            <div className = 'separator'></div>
        </div>
    )
}