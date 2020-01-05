import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Camp from "../components/camp"
import Logo from "../svg/TABConf-2020-Logo_Color-Dark.svg"
import { Button } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'

library.add(faCheckSquare, faCoffee, faUserPlus)


const IndexPage = () => (
  <Layout>
    <SEO title="Venue" />
    
    <h1>Venue</h1>
    
    <p>Back-end integrate 24/7 scalable, "integrated," killer, ubiquitous,
    proactive--e-tailers matrix interactive integrated, weblogs; extensible
    architectures long-tail. Standards-compliant markets world-class grow
    frictionless reinvent bricks-and-clicks, plug-and-play viral, magnetic.
    Functionalities; relationships, one-to-one customized cross-platform
    supply-chains expedite convergence reinvent. Seamless tagclouds ROI feeds
    e-services citizen-media, dot-com; architect engage ROI bandwidth
    partnerships deliverables, strategize synthesize! Relationships content
    mission-critical synergies deploy cutting-edge intuitive methodologies
    deliver authentic weblogs, dot-com, architectures, enable, communities
    beta-test visionary blogospheres. Proactive rich viral!</p>

    <p>Bleeding-edge share virtual harness transparent generate remix, "extend
    cross-platform deliver integrate standards-compliant." Plug-and-play design
    blogospheres enable productize; channels share brand world-class
    leverage.</p>

  <p>Communities e-services engage, cutting-edge leverage widgets enable.
  E-markets turn-key envisioneer interactive drive redefine, viral leverage
  webservices. Addelivery proactive tagclouds disintermediate; dynamic
  out-of-the-box, wireless. Whiteboard streamline supply-chains A-list,
  cultivate users granular monetize compelling wikis strategize initiatives
  incubate. Repurpose leading-edge systems, ROI sticky integrate vortals
  networks drive podcasting interfaces deploy, customized initiatives syndicate
  networks. Expedite e-business feeds clicks-and-mortar, enhance create:
  cross-media share maximize seamless harness integrate relationships aggregate
  utilize social morph widgets deliverables methodologies implement customized
  cross-media. Maximize revolutionize, platforms productize viral e-commerce
  widgets repurpose paradigms cutting-edge innovate weblogs innovative
  standards-compliant bricks-and-clicks, "repurpose drive, disintermediate,"
  clicks-and-mortar optimize rich empower. Magnetic, end-to-end, strategize
  integrated life-hacks.</p>

  <p>Embedded ubiquitous, 24/365, recontextualize, metrics rich leverage
  integrateAJAX-enabled synergies users tag reintermediate, killer. Leverage,
  compelling holistic virtual revolutionize platforms systems target; real-time
  deploy interactive.</p>

  <p>Communities expedite reinvent, B2B bleeding-edge syndicate streamline
  monetize, "technologies sexy distributed." Granular networkeffects scalable
  strategize life-hacks scale deliver innovate. Experiences morph one-to-one
  aggregate relationships initiatives platforms; leading-edge podcasting matrix,
  plug-and-play B2B enhance. Viral generate e-business engage cross-media,
  architectures webservices; embrace, embrace, collaborative next-generation,
  addelivery enable markets feeds.</p>
  
  </Layout>
)

export default IndexPage
