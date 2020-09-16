/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "../static/layout.css"

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

      <div
        style={{
          margin: `0 auto`,
          maxWidth: 900,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <hr />
        <main>{children}</main>
        <br />
        <hr />
        <div className="footer-links">
          <Link style={{ textDecoration: `none`, flex: `0 0 33%` }} to="/" tabIndex={-1}>
            <h4>Home</h4>
          </Link>
          <Link style={{ textDecoration: `none`, flex: `0 0 33%` }} to="/about/" tabIndex={-1}>
            <h4>About</h4>
          </Link>
          <a style={{ textDecoration: `none`, flex: `0 0 33%` }} href="https://github.com/rrosenlof/road-to-nowhere" tabIndex={-1}>
            <h4>Code</h4>
          </a>
        </div>
        <hr />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
