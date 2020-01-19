import React, { useState } from 'react'
import PropTypes from "prop-types"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap'

const Header = ({siteTitle}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <header id="header-main">
      <Navbar color="dark" dark fixed expand="lg">
        <NavbarBrand href="/">{siteTitle}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="no-transition">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" active="1">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Register</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Camps
              </DropdownToggle>
              <DropdownMenu right>
                <NavItem>
                  <NavLink href="/lightning-camp">Lightning Camp</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lightning-camp">Spice Camp</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/lightning-camp">Dapp Camp</NavLink>
                </NavItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/">Speakers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/venue">Venue</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
