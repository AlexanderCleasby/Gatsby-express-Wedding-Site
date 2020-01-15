import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Events from "../components/events"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Link to="/rsvp" className="rsvp-btn btn-lg btn btn-secondary">RSVP</Link>
      <a href={process.env.GATSBY_REGISTRY_URL} className="rsvp-btn btn-lg btn btn-secondary">Registry</a>
    <Events />
    <div className="rsvp-btn">
        <Link to="/rsvp" className="btn-lg btn btn-secondary">RSVP</Link>
    </div>
  </Layout>
)

export default IndexPage
