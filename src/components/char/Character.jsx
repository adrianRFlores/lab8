import React from 'react'
import PropTypes from 'prop-types'
import './Character.css'

function Character({ skin, direction }) {
  return (
    <div className="CharacterContainer">
      <img src={`${skin}/${skin}${direction}.png`} alt={skin} />
    </div>
  )
}

Character.propTypes = {
  skin: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
}

export default Character
