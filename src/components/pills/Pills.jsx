import React, {useState} from 'react'
import Pill from './Pill'
import './Pill.css'

const Pills = ({ themes, callback }) => {

    const [current, setCurrent] = useState(themes[0])

    const getOption = (option) => {
        callback(option)
        setCurrent(option)
    }

    return (
        <div className="pills">
            <Pill theme={themes[0]} active={current === themes[0]} clickHandler={getOption}/>
            <Pill theme={themes[1]} active={current === themes[1]} clickHandler={getOption}/>
            <Pill theme={themes[2]} active={current === themes[2]} clickHandler={getOption}/>
        </div>
    )

}

export default Pills