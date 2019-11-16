import React from 'react'
import Map from './map'


const Event = ({title,desc,children,coords,showMap})=>{
    return <div>
        <h2>
            {title}
        </h2>
        <p>
            {desc}
        </p>
        {(()=>showMap ? <Map coords={coords} /> : "")()}
        {children}
    </div>
}




export default Event