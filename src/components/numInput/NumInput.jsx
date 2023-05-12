import React from "react"
import "./NumInput.module.css"

const Input = ({ id, label, min, max }) => {
  return (
    <div className="formContainer">
      <label
        for={id}
        class="formLabel">
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
