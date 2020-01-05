import React from "react"
import { Link } from "gatsby"
import BtnLink from "./btnlink"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'reactstrap'

export default props => (
  <div class="camp">
    <Row>
      <Col md="6">
        <h2>{props.title}</h2>
        <img src={props.image} alt="" />
        {props.children}
        <BtnLink link={props.link} icon="faArrowRight">Learn More <FontAwesomeIcon icon={faArrowRight} /></BtnLink>
      </Col>
    </Row>
  </div>
)
