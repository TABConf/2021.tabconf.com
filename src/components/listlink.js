import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const ListLink = ({to, children}) => (
  <li class="nav-item">
    <Link to={to} class="nav-link">{children}</Link>
  </li>
)

ListLink.propTypes = {
  to: PropTypes.string,
  children: PropTypes.string
}

ListLink.defaultProps = {
  to: '/',
}

export default ListLink
