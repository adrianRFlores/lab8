import React, { useEffect, useState } from 'react'
import './Tile.css'

const Tile = ({theme, obstacle, children = null}) => {

    return (
        <div className='tileContainer' style={{ backgroundImage: `url(${theme}/bg.png)` }}>
            {obstacle ? <img src={`${theme}/obstacle.png`} /> : children}
        </div>
    )
}

export default Tile