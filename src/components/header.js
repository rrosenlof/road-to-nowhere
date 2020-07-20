import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header"
      style={{
        margin: `0 auto`,
        maxWidth: 900,
        paddingTop: `1rem`
      }}
    >
      <div className="header-left">
        <Link style={{ textDecoration: `none`}} to="/" tabIndex={-1}>
          <h2 style={{ fontSize: `2rem` }}>Road to Nowhere</h2>
        </Link>
      </div>
    </div>
  </header>
)

export default Header
