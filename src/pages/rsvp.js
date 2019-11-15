import React from "react"
import { Link } from "gatsby"
import RSVP from "../components/rsvp/index";
import Layout from "../components/layout"
import SEO from "../components/seo"

const RSVPage = () => (
  <Layout>
    <SEO title="RSVP" />
    <h1>RSVP Here</h1>
    <RSVP />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default RSVPage