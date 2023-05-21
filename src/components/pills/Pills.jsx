import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Pill from './Pill'
import './Pill.css'

function Pills({
  theme1, theme2, theme3, callback,
}) {
  const [current, setCurrent] = useState(theme1)

  const getOption = (option) => {
    callback(option)
    setCurrent(option)
  }

  return (
    <div className="pills">
      <Pill
        theme={theme1}
        active={current === theme1}
        clickHandler={getOption}
      />
      <Pill
        theme={theme2}
        active={current === theme2}
        clickHandler={getOption}
      />
      <Pill
        theme={theme3}
        active={current === theme3}
        clickHandler={getOption}
      />
    </div>
  )
}

Pills.propTypes = {
  theme1: PropTypes.string.isRequired,
  theme2: PropTypes.string.isRequired,
  theme3: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
}

export default Pills
