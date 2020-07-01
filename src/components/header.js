import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Menu from "./menu"

const Header = ({ siteTitle }) => (
  <header style={headerHeader}>
    <div style={divHeader} >
      <h1 style={{ margin: 0 }}>
        <Link to="/" style={linkHeader}> {siteTitle} </Link>
      </h1>
      <Menu/>
    </div>

  </header>
)

const linkHeader = {
  textAlign: "left",
  color: `white`,
  textDecoration: `none` 
}

const divHeader = {
  margin: `0 auto`,
  //maxWidth: 960,
  padding: `1.45rem 1.0875rem`
}

const headerHeader = {
  background: "#05668D",
  borderBottom: "solid",
  borderWidth: "0.5em",
  borderColor: "#02C39A"
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
