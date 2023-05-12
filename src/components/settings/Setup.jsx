import React from "react"

const Setup = ({ callback }) => {
  return (
    <div className="formContainer">
      <input
        type="number"
        id="widthIn"
        min="4"
        max="100"
        label></input>
    </div>
  )
}

export default Setup
