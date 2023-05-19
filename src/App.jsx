import { useState } from 'react'
import Input from './components/numInput/Input'
import CharSelector from './components/charSelector/CharSelector'
import Maze from './components/maze/Maze'
import './App.css'

function App() {

  const [formData, setFormData] = useState([5,5,'forest','knight'])

  const getCharSkin = option => {
    let temp = [...formData]
    temp[3] = option
    setFormData(temp)
  }

  return (
    <div className='App'>
      <div className='formContainer'>
        <h1>Configuración</h1>
        <div className='form'>
          <div className='numInputContainer'>
            <Input id='width' label='Ancho' min='4' max='100'></Input>
            <Input id='height' label='Alto' min='4' max='100'></Input>
          </div>
          <div className='charSelectorContainer'>
            <CharSelector option1='knight' option2='sorcerer' option3='huntress' callback={getCharSkin}/>
          </div>
          <div className='pillContainer'></div>
        </div>
      </div>
      <div className='mazeStyle'>
        <Maze dimX={formData[0]} dimY={formData[1]} theme={formData[2]} skin={formData[3]}/>
      </div>
    </div>
  )
}

export default App
