import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import Event from "./event"



const Events = ()=>{
    const eventsData = useStaticQuery(graphql`
    query eventsQuery
    {
        allEventsJson {
            nodes {
                title
                desc
                date
                time
                subevents { time desc }
                address
                placeId
                venue
                coords { lat lng }
            }
        }
    }`).allEventsJson.nodes
    console.log(eventsData)
    return <div >
        {eventsData.map((event, i)=><Event key={i} showMap={true} {...event} />)}
        </div>
}

export default Events
