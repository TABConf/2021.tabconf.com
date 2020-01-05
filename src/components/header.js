import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ListLink from "./listlink"

const Header = ({ siteTitle }) => (
  <header id="header-main">
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav role="navigation">
      <ul class="nav">
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
