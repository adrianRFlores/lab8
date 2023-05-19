import React from "react"
import "./Input.css"

const Input = ({ id, label, min, max, changeHandler}) => {
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
        placeholder={min.concat(" - ", max)}
        onChange={changeHandler}></input>
    </div>
  )
}

export default Input
