import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ brideGroom, subHeader }) => (
  <header
  >
    <div
      className="jumbotron"
    >
      <div className="textBox">
        <h1 style={{ margin: 0 }} >
            {brideGroom}
        </h1>
        <h3>
          {subHeader}
        </h3>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
