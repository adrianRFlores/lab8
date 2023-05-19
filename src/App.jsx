import { useState } from 'react'
import Input from './components/numInput/Input'
import CharSelector from './components/charSelector/CharSelector'
import Maze from './components/maze/Maze'
import './App.css'

function App() {

  const [formData, setFormData] = useState([5,5,'forest','knight'])
  let x, y = 5

  const getCharSkin = (option) => {
    let temp = [...formData]
    temp[3] = option
    setFormData(temp)
  }

  const widthHandler = (event) => {
    if(parseInt(event.target.value) > 3 && y > 3){
      x = parseInt(event.target.value)
      console.log(x)
    }
  }

  const heightHandler = (event) => {
    if(parseInt(event.target.value) > 3 && x > 3){
      y = parseInt(event.target.value)
      console.log(y)
    }
  }

  const mazeReloadHandler = () => {
    setFormData([x, y, formData[2], formData[3]])
    console.log(formData)
  }

  return (
    <div className='App'>
      <div className='formContainer'>
        <h1>Configuración</h1>
        <div className='form'>
          <div className='numInputContainer'>
            <Input id='width' label='Ancho' min='4' max='100' changeHandler={widthHandler}></Input>
            <Input id='height' label='Alto' min='4' max='100' changeHandler={heightHandler}></Input>
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
      <button onClick={() => mazeReloadHandler()}>reload</button>
    </div>
  )
}

export default App
