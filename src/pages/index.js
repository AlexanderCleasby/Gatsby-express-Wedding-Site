import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Events from "../components/events"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Events />
    <div className="rsvp-btn">
        <Link to="/rsvp" className="btn-lg btn btn-secondary">RSVP</Link>
    </div>
  </Layout>
)

export default IndexPage
