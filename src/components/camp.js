import React from "react"
import { Link } from "gatsby"
import BtnLink from "./btnlink"
import CampIcon from "../components/campicon"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap'
import image from "../images/people-placeholder.jpg"


export default props => (
  <div class={"camp " + props.slug}>
    <Row>
      <Col md="6">
        <CampIcon link={props.link} slug={props.slug} icon={props.icon}>{props.title}</CampIcon>
        {props.children}
        <BtnLink link={props.link} icon="faArrowRight">Learn More <FontAwesomeIcon icon={faArrowRight} /></BtnLink>
      </Col>
      <Col md="6" className="camp-image">
        <div style={{backgroundImage: "url(" + image + ")"}}>
        </div>
      </Col>
    </Row>
  </div>
)
