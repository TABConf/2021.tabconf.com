import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Camp from "../components/camp"
import Logo from "../svg/TABConf-2020-Logo_Color-Dark.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Not Found - Error 404" />
    <h1>Error 404</h1>
    
    <p>Page not found. Sorry!</p>
  </Layout>
)

export default IndexPage
