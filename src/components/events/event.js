import React from 'react'
import Map from './map'


const Event = ({title,desc})=>{
    return <div>
        <h2>
            {title}
        </h2>
        <p>
            {desc}
        </p>
        <Map coords={{lat:38.9128731,lng:-77.0126191}} />
    </div>
}

export default Event