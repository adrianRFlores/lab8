import React from 'react'
import './Tile.css'
import PropTypes from 'prop-types'

function Tile({ theme, obstacle, children = " " }) {
  return (
    <div className="tileContainer" style={{ backgroundImage: `url(${theme}/bg.png)` }}>
      {obstacle ? <img src={`${theme}/obstacle.png`} alt="obstacle" /> : children}
    </div>
  )
}

Tile.propTypes = {
  theme: PropTypes.string.isRequired,
  obstacle: PropTypes.bool.isRequired,
  children: PropTypes.element,
}

Tile.defaultProps = {
  children: " ",
}

export default Tile
