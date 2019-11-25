import React from 'react'
import Map from './map'
import {FaLocationArrow} from 'react-icons/fa'
import './events.scss'

const Event = ({title,desc,address,children,coords,placeId,venue,showMap})=>{
    return <div className="event">
        <div className="header">
            <h2>
                {title}
            </h2>
            <h4>
                {venue}<br></br>
                {address}
            </h4>
        </div>
        <p>
            {desc}
        </p>
        {children}
        {showMap ? <Map coords={coords} /> : ""}
        { placeId ? <a className="navigate btn btn-primary" href={`https://www.google.com/maps/search/?api=1&query=${venue}&query_place_id=${placeId}`}>Navigate <FaLocationArrow/></a> : ""}
    </div>
}




export default Event