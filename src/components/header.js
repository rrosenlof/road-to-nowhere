import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }} 
  >
    <div className="header"
      style={{
        margin: `0 auto`,
        maxWidth: 900,
        paddingTop: `1rem`,
      }}
    >
      <div className="header-left">
        <Link style={{ textDecoration: `none`}} to="/" tabIndex={-1}>
          <h2 style={{ fontSize: `2rem` }}>Road to Nowhere</h2>
        </Link>
      </div>
      <div className="header-right">
        <Link style={{ textDecoration: `none` }} to="/settings/" tabIndex={-1}>
          <h2>Settings</h2>
        </Link>
        <Link style={{ textDecoration: `none` }} to="/about/" tabIndex={-1}>
          <h2>About</h2>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
