import React from 'react'
import PropTypes from 'prop-types'
import './DropdownBtn.css'

function DropdownBtn({
  active, text, clickHandler, current,
}) {
  return (
    <button
      type="button"
      className={`btn ${active ? 'y' : 'n'}`}
      onClick={clickHandler}
    >
      <img src={`${current}/${current}Front.png`} alt={current} />
      {text}
      <span className={`arrow ${active ? 'y' : 'n'}`}>&gt;</span>
    </button>
  )
}

DropdownBtn.propTypes = {
  active: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  current: PropTypes.string.isRequired,
}

export default DropdownBtn
