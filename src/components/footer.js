import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap"

const Footer = ({ siteTitle }) => (
  <footer id="footer-main">
      <Container>
        <Row>
          <Col md="4">
            <h2>TABConf</h2>
            <Nav vertical>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Speakers</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Contact Us</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="4">
            <h2>Camps</h2>
            <Nav vertical>
              <NavItem>
                <NavLink href="/">Lightning Camp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Spice Camp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">DappCamp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Privacy Camp</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Art Camp</NavLink>
              </NavItem>
            </Nav>
          </Col>
          <Col md="4">
            <h2>Venue</h2>
            <Nav vertical>
              <NavItem>
                <NavLink href="/">Venue</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Hotel</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/">Parking</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>

    <div>
      <p>&copy; {new Date().getFullYear()}, TabConf, LLC.</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
