import React from "react"
import './index.css'

export default function COntactItems(){
    return(
        <div className = 'ItemsContainer'>
          <a href = 'mailto:lazaroah02@gmail.com'>
            <div className = 'mail-image items'></div>
          </a>
          <a href = 'https://github.com/lazaroah02' target = '_blank'>
            <div className = 'gihub-image items' ></div>
          </a>
          <a href = 'https://www.linkedin.com/in/lazaro-altedill-546453231' target = '_blank'>
            <div className = 'linkeedin-image items' ></div>
          </a>
        </div>
    )
}