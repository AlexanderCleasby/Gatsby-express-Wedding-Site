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
                address
                coords { lat lng }
            }
        }
    }`).allEventsJson.nodes
    console.log(eventsData)
    return <div >
        {eventsData.map((event)=><Event showMap={true} {...event} />)}
        </div>
}

export default Events
