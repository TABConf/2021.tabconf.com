import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ListLink from "./listlink"

const Header = ({ siteTitle }) => (
  <header id="header-main">
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" role="navigation">
      <a href="/" class="navbar-brand">
        TABConf 2020
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <ListLink to="/">Home</ListLink>
          <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Camps</a>
            <div class="dropdown-menu">
              <a href="/lightning-camp" class="dropdown-item">Lightning Camp</a>
            </div>
          </li>
          <ListLink to="/speakers">Speakers</ListLink>
          <ListLink to="/venue">Venue</ListLink>
        </ul>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
