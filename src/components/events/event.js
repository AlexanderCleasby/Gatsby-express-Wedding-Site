import React from 'react'
import Map from './map'
import './events.scss'

const Event = ({title,desc,address,children,coords,placeId,venue,showMap})=>{
    return <div className="event">
        <div className="header">
            <h2>
                {title}
            </h2>
            <h4>
                {address}
                <a href={`https://www.google.com/maps/search/?api=1&query=${venue}&query_place_id=${placeId}`}>Nav</a>
            </h4>
        </div>
        <p>
            {desc}
        </p>
        {children}
        {(()=>showMap ? <Map coords={coords} /> : "")()}
    </div>
}




export default Event