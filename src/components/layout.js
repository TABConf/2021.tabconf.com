/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import ListLink from "./listlink"
import { useStaticQuery, Link, graphql } from "gatsby"
import "../styles/style.sass"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer id="footer-main">
          <nav>
            <div class="container">
              <div class="row">
                <div class="col-md-3">
                  <h2>TABConf</h2>
                  <ul>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/">Speakers</ListLink>
                    <ListLink to="/">Register</ListLink>
                    <ListLink to="/">Contact Us</ListLink>
                  </ul>
                </div>
                <div class="col-md-3">
                  <h2>Camps</h2>
                  <ul>
                    <ListLink to="/lightning-camp">Lightning Camp</ListLink>
                    <ListLink to="/lightning-camp">Spice Camp</ListLink>
                    <ListLink to="/lightning-camp">Dapp Camp</ListLink>
                    <ListLink to="/lightning-camp">Privacy Camp</ListLink>
                    <ListLink to="/lightning-camp">Art Camp</ListLink>
                  </ul>
                </div>
                <div class="col-md-3">
                  <h2>Venue</h2>
                  <ul>
                    <ListLink to="/">Venue</ListLink>
                    <ListLink to="/">Hotel</ListLink>
                    <ListLink to="/">Parking</ListLink>
                  </ul>
                </div>
              </div>
            </div>

          </nav>
          <div>
            <p>&copy; {new Date().getFullYear()}, TabConf, LLC.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
