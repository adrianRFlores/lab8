import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './CharSelector.css'
import DropdownBtn from '../dropdownBtn/DropdownBtn'

function CharSelector({
  option1, option2, option3, callback,
}) {
  const [current, setCurrent] = useState(option1)
  const [btnState, setBtnState] = useState(false)

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1)

  return (
    <div className="selectorContainer">
      <DropdownBtn
        active={btnState}
        text="Character skin"
        clickHandler={() => {
          setBtnState(!btnState)
        }}
        current={current}
      />
      <div className={`dropdown ${btnState ? 'opened' : 'closed'}`}>
        <button
          type="button"
          className={`option ${current === option1 ? 'y' : 'n'}`}
          onClick={() => {
            setCurrent(option1)
            callback(option1)
          }}
        >
          <img src={`${option1}/${option1}Front.png`} alt={option1} />
          <span>{capitalize(option1)}</span>
        </button>
        <button
          type="button"
          className={`option ${current === option2 ? 'y' : 'n'}`}
          onClick={() => {
            setCurrent(option2)
            callback(option2)
          }}
        >
          <img src={`${option2}/${option2}Front.png`} alt={option2} />
          <span>{capitalize(option2)}</span>
        </button>
        <button
          type="button"
          className={`option ${current === option3 ? 'y' : 'n'}`}
          onClick={() => {
            setCurrent(option3)
            callback(option3)
          }}
        >
          <img src={`${option3}/${option3}Front.png`} alt={option3} />
          <span>{capitalize(option3)}</span>
        </button>
      </div>
    </div>
  )
}

CharSelector.propTypes = {
  option1: PropTypes.string.isRequired,
  option2: PropTypes.string.isRequired,
  option3: PropTypes.string.isRequired,
  callback: PropTypes.bool.isRequired,
}

export default CharSelector
