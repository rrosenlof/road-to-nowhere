import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 900,
        padding: `1.45rem 1.0875rem`,
        alignItems: `center`
      }}
    >
      <h1 style={{ 
        margin: 0, 
        display: `inline`,
        float: `left`}}>
        <Link to="/">
          Road to Nowhere
        </Link>
      </h1>
      <h3 style={{ 
        margin: 0,
        display: `inline`,
        float: "right"}}>
        <Link to="/about/">
          About
        </Link>
      </h3>
    </div>
    <br/>
    <hr />
  </header>
)

export default Header
