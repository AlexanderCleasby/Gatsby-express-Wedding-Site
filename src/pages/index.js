import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Events from "../components/events"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Events />
  </Layout>
)

export default IndexPage
