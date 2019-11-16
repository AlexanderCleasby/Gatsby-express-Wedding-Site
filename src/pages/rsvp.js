import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import RSVP from "../components/rsvp/index";
import Layout from "../components/layout"
import SEO from "../components/seo"



const RSVPage = () => {
  const eventsData = useStaticQuery(graphql`
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
  return(
    <Layout>
      <SEO title="RSVP" />
      <h1>RSVP Here</h1>
      <RSVP events={eventsData} />
      <Link to="/">Go back to the homepage</Link>
    </Layout>
)}

export default RSVPage