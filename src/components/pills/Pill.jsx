import React from 'react'
import PropTypes from 'prop-types'
import './Pill.css'

function Pill({ theme, active, clickHandler }) {
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <button
      type="button"
      className={`pillHolder ${active ? 'y' : 'n'}`}
      onClick={() => clickHandler(theme)}
      style={{ backgroundImage: `url(${theme}/bg.png)` }}
    >
      {capitalize(theme)}
    </button>
  )
}

Pill.propTypes = {
  theme: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
}

export default Pill
