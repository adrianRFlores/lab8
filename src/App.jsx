import React, { useState } from 'react'
import Input from './components/numInput/Input'
import CharSelector from './components/charSelector/CharSelector'
import Maze from './components/maze/Maze'
import Pills from './components/pills/Pills'
import './App.css'

function App() {
  const [formData, setFormData] = useState([5, 5, 'forest', 'knight'])
  let x
  let y = 5

  const getCharSkin = (option) => {
    const temp = [...formData]
    temp[3] = option
    setFormData(temp)
  }

  const getMazeTheme = (option) => {
    const temp = [...formData]
    temp[2] = option
    setFormData(temp)
  }

  const widthHandler = (event) => {
    if (parseInt(event.target.value, 10) > 3 && y > 3) {
      x = parseInt(event.target.value, 10)
    }
  }

  const heightHandler = (event) => {
    if (parseInt(event.target.value, 10) > 3 && x > 3) {
      y = parseInt(event.target.value, 10)
    }
  }

  const mazeReloadHandler = () => {
    setFormData([x, y, formData[2], formData[3]])
  }

  return (
    <div className="App">
      <div className="formHolder">
        <div className="formContainer">
          <h1>Configuración</h1>
          <div className="form">
            <div className="numInputContainer">
              <Input
                id="width"
                label="Ancho"
                min="4"
                max="100"
                changeHandler={widthHandler}
              />
              <Input
                id="height"
                label="Alto"
                min="4"
                max="100"
                changeHandler={heightHandler}
              />
              <button
                type="button"
                onClick={() => mazeReloadHandler()}
                className="resetBtn"
                disabled={x > 3 && y > 3}
              >
                Reiniciar con esta configuración
              </button>
            </div>
            <div className="charSelectorContainer">
              <CharSelector
                option1="knight"
                option2="sorcerer"
                option3="huntress"
                callback={getCharSkin}
              />
            </div>
            <div className="pillContainer">
              <h3>Tema</h3>
              <Pills
                theme1="forest"
                theme2="godlands"
                theme3="spriteworld"
                callback={getMazeTheme}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mazeStyle">
        <Maze
          dimX={formData[0]}
          dimY={formData[1]}
          theme={formData[2]}
          skin={formData[3]}
        />
      </div>
    </div>
  )
}

export default App
