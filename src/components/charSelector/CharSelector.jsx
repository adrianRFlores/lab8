import React, { useState } from "react"
import "./CharSelector.css"
import DropdownBtn from "../dropdownBtn/DropdownBtn"
//import arrow from './arrow.svg'

const CharSelector = ({option1, option2, option3, callback}) => {

  const [current, setCurrent] = useState(option1)
  const [btnState, setBtnState] = useState(false)

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  return (
    <div className="selectorContainer">
      <DropdownBtn active={btnState} text="Character skin" clickHandler={() => {setBtnState(!btnState)}} current={current}/>
      <div className={`dropdown ${btnState ? 'opened' : 'closed'}`}>
        <button className={`option ${current === option1 ? 'y' : 'n'}`}
        onClick={() => {setCurrent(option1); callback(option1)}}>
          <img src={`${option1}/${option1}Front.png`} />
          <span>{capitalize(option1)}</span>
        </button>
        <button className={`option ${current === option2 ? 'y' : 'n'}`} 
        onClick={() => {setCurrent(option2); callback(option2)}}>
          <img src={`${option2}/${option2}Front.png`} />
          <span>{capitalize(option2)}</span>
        </button>
        <button className={`option ${current === option3 ? 'y' : 'n'}`}
        onClick={() => {setCurrent(option3); callback(option3)}}>
          <img src={`${option3}/${option3}Front.png`} />
          <span>{capitalize(option3)}</span>
        </button>          
      </div>
      
    </div>
  )
}

export default CharSelector