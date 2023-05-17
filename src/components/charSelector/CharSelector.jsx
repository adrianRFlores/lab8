import React, { useState } from "react"
import "./CharSelector.css"
//import arrow from './arrow.svg'

const CharSelector = ({option1, option2, option3}) => {

  const [current, setCurrent] = useState(option1)

  return (
    <div className="selectorContainer">
      
      <img src={`${option1}/${option1}Front.png`} />
      <img src={`${option2}/${option2}Front.png`} />
      <img src={`${option3}/${option3}Front.png`} />
    </div>
  )
}

export default CharSelector