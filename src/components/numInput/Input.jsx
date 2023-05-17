import React from "react"
import "./Input.css"

const Input = ({ id, label, min, max }) => {
  return (
    <div className="singleInputContainer">
      <label
        htmlFor={id}
        className="formLabel">
        {label}
      </label>
      <input
        type="number"
        name={id}
        min={min}
        max={max}
        placeholder={min.concat(" - ", max)}></input>
    </div>
  )
}

export default Input
