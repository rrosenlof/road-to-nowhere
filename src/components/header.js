import { Link } from "gatsby"
import React from "react"
import Byrne from "../static/byrne.gif"

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
      <div style={{ 
        margin: 0, 
        display: `inline-block`,
        float: `left`}}>
        <h1>
          <img style={{ width: `50px`}} src={Byrne} alt="talking heads gif" />
          <Link style={{ textDecoration: `none` }} to="/">
            Road to Nowhere
          </Link>
        </h1>
      </div>
      <div style={{ 
        margin: 0,
        display: `inline-block`,
        float: "right"}}>
        <h3>
          <Link style={{ textDecoration: `none` }} to="/about/">
            About
          </Link>
        </h3>
      </div>
    </div>
  </header>
)

export default Header
