import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
  >
    <div
      style={{
        margin: `0 auto`,
        
        
      }}
      className="jumbotron"
    >
      <div className="textBox">
        <h1 style={{ margin: 0 }} >
            Alex and Emily
        </h1>
        <h3>
          Are getting married!
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
