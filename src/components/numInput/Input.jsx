import React from 'react'
import PropTypes from 'prop-types'
import './Input.css'

function Input({
  id, label, min, max, changeHandler,
}) {
  return (
    <div className="singleInputContainer">
      <label
        htmlFor={id}
        className="formLabel"
      >
        {label}
      </label>
      <input
        type="number"
        name={id}
        min={min}
        max={max}
        placeholder={min.concat(' - ', max)}
        onChange={changeHandler}
      />
    </div>
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  changeHandler: PropTypes.func.isRequired,
}

export default Input
