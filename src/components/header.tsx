/* eslint-disable no-unused-vars */
import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import "./header.css"

interface HeaderProps {
  siteTitle: string
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header className="header">
    <Link to="/" className="header-item">
      {siteTitle}
    </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
