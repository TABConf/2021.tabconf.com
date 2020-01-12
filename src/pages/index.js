import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Camp from "../components/camp"
import Logo from "../svg/TABConf-2020-Logo_Color-Dark.svg"
import { Button, Container, Row, Col } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faUserPlus, faMapMarker, faCalendar } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faUserPlus, faMapMarker, faCalendar)


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <Container className="hero">
      <Row>
        <Col md="6">
          <h1 class="sr-only">TABConf 2020</h1>
          <img src={Logo} alt="TABConf 2020" />
          <p class="subtitle">The Blockchain Conference of&nbsp;Camps</p>
          <p class="metadata-group">
            <span class="metadata">
              <FontAwesomeIcon icon="calendar" /> September&nbsp;2020
            </span>
            <span class="metadata">
              <FontAwesomeIcon icon="map-marker" /> Atlanta,&nbsp;GA
            </span>
          </p>
          <Button color="primary" size="lg">Register Now <FontAwesomeIcon icon="user-plus" /></Button>
        </Col>
      </Row>
    </Container>
    
    <Container className="intro">
      <Row>
        <Col md="6">
          <h2>Explore decentralized technology in hands-on workshops, discussions, and
          hackathons.</h2>

          <p>Hey, want to come listen to a bunch of fake thought leaders regurgitate
          impractical ideas about blockchain? No? Then this is the unconference for
          you. TABConf 2020 is divided into multiple camps where everyone can learn
          blockchain technologies hands-on with other crypto enthusiasts. Earn your
          badge from every camp for a chance at winning the final prize.</p>
        </Col>
        <Col md="6">
          <img src="https://via.placeholder.com/300" alt="Image" />
        </Col>
      </Row>
      <Row className="camp-list">
        <Col md="1"></Col>
        <Col md="2">
          <img src="https://via.placeholder.com/150" alt="Image" />
          LightningCamp
        </Col>
        <Col md="2">
          <img src="https://via.placeholder.com/150" alt="Image" />
          SpiceCamp
        </Col>
        <Col md="2">
          <img src="https://via.placeholder.com/150" alt="Image" />
          DappCamp
        </Col>
        <Col md="2">
          <img src="https://via.placeholder.com/150" alt="Image" />
          PrivacyCamp
        </Col>
        <Col md="2">
          <img src="https://via.placeholder.com/150" alt="Image" />
          ArtCamp
        </Col>
        <Col md="1"></Col>
      </Row>
      <Row>
        <Col>
          <Button color="primary" size="lg">Register Now <FontAwesomeIcon icon="user-plus" /></Button>
        </Col>
      </Row>
    </Container>
    
    <Camp title="Lightning Camp" image="https://via.placeholder.com/150" link="/lightning-camp">
      <p>Deploy engineer deliver, share out-of-the-box social applications compelling
tagclouds methodologies, "sticky engineer reinvent, syndicate vertical dot-com,
utilize maximize markets disintermediate frictionless blogging." Reinvent
optimize webservices dynamic, 24/365 streamline tagclouds, e-business
revolutionary?" Deploy mindshare sticky harness generate global, granular killer
front-end disintermediate user-centred: open-source dynamic ROI podcasts.
Reinvent networking implement A-list systems seamless web services; value-added
interfaces solutions; embedded blogging. Feeds embedded transparent impactful
social monetize rss-capable schemas.</p>
    </Camp>

    <Camp title="Spice Camp" image="https://via.placeholder.com/150" link="/spice-camp">
      <p>Deploy engineer deliver, share out-of-the-box social applications compelling
tagclouds methodologies, "sticky engineer reinvent, syndicate vertical dot-com,
utilize maximize markets disintermediate frictionless blogging." Reinvent
optimize webservices dynamic, 24/365 streamline tagclouds, e-business
revolutionary?" Deploy mindshare sticky harness generate global, granular killer
front-end disintermediate user-centred: open-source dynamic ROI podcasts.
Reinvent networking implement A-list systems seamless web services; value-added
interfaces solutions; embedded blogging. Feeds embedded transparent impactful
social monetize rss-capable schemas.</p>
    </Camp>

    <Camp title="Dapp Camp" image="https://via.placeholder.com/150" link="/dapp-camp">
      <p>Deploy engineer deliver, share out-of-the-box social applications compelling
tagclouds methodologies, "sticky engineer reinvent, syndicate vertical dot-com,
utilize maximize markets disintermediate frictionless blogging." Reinvent
optimize webservices dynamic, 24/365 streamline tagclouds, e-business
revolutionary?" Deploy mindshare sticky harness generate global, granular killer
front-end disintermediate user-centred: open-source dynamic ROI podcasts.
Reinvent networking implement A-list systems seamless web services; value-added
interfaces solutions; embedded blogging. Feeds embedded transparent impactful
social monetize rss-capable schemas.</p>
    </Camp>

    <Camp title="Privacy Camp" image="https://via.placeholder.com/150" link="/privacy-camp">
      <p>Deploy engineer deliver, share out-of-the-box social applications compelling
tagclouds methodologies, "sticky engineer reinvent, syndicate vertical dot-com,
utilize maximize markets disintermediate frictionless blogging." Reinvent
optimize webservices dynamic, 24/365 streamline tagclouds, e-business
revolutionary?" Deploy mindshare sticky harness generate global, granular killer
front-end disintermediate user-centred: open-source dynamic ROI podcasts.
Reinvent networking implement A-list systems seamless web services; value-added
interfaces solutions; embedded blogging. Feeds embedded transparent impactful
social monetize rss-capable schemas.</p>
    </Camp>

    <Camp title="Art Camp" image="https://via.placeholder.com/150" link="/art-camp">
      <p>Deploy engineer deliver, share out-of-the-box social applications compelling
tagclouds methodologies, "sticky engineer reinvent, syndicate vertical dot-com,
utilize maximize markets disintermediate frictionless blogging." Reinvent
optimize webservices dynamic, 24/365 streamline tagclouds, e-business
revolutionary?" Deploy mindshare sticky harness generate global, granular killer
front-end disintermediate user-centred: open-source dynamic ROI podcasts.
Reinvent networking implement A-list systems seamless web services; value-added
interfaces solutions; embedded blogging. Feeds embedded transparent impactful
social monetize rss-capable schemas.</p>
    </Camp>
  </Layout>
)

export default IndexPage
