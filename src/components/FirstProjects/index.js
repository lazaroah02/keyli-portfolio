import React from 'react';
import './index.css'
import {INFO_PROJECTS} from './info-project'
import ProjectStructure from '../ProjectStructure';

export default function FirstProjects(){
    return(
        <div>
            {INFO_PROJECTS.map(project => <ProjectStructure {...project}/>)}
        </div>
    )
}