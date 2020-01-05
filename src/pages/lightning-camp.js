import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Camp from "../components/camp"

const IndexPage = () => (
  <Layout>
    <SEO title="Lightning Camp" />
    <h1>Hi people</h1>

    <Camp title="Lightning Camp" image="https://via.placeholder.com/150" link="/lightning-camp">
      Deploy engineer deliver, share out-of-the-box social applications compelling
tagclouds methodologies, "sticky engineer reinvent, syndicate vertical dot-com,
utilize maximize markets disintermediate frictionless blogging." Reinvent
optimize webservices dynamic, 24/365 streamline tagclouds, e-business
revolutionary?" Deploy mindshare sticky harness generate global, granular killer
front-end disintermediate user-centred: open-source dynamic ROI podcasts.
Reinvent networking implement A-list systems seamless web services; value-added
interfaces solutions; embedded blogging. Feeds embedded transparent impactful
social monetize rss-capable schemas.
    </Camp>

  </Layout>
)

export default IndexPage
