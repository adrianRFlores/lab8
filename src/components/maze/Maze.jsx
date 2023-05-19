import React, {useState, useEffect} from 'react'
import Tile from '../Tile/Tile'
import Character from '../char/Character'
import './Maze.css'

const Maze = ({dimX, dimY, theme, skin}) => {

    const [maze, setMaze] = useState([])
    const [lookDirection, setLookDirection] = useState('Front')
    const [winState, setWinState] = useState(false)
    let playerPos = [0,0]
    let userReload = true

    const getMaze = () => {
        fetch(`https://maze.uvgenios.online/?type=json&w=${dimX}&h=${dimY}`)
        .then((response) => { return response.json()})
        .then((data) => {setMaze(data)})
        .catch((error) => {console.log(error)})
    }

    useEffect(() => {
         getMaze()
         setWinState(false)
        }, [])

    useEffect(() => {
        getMaze()
        setWinState(false)
    }, [dimX, dimY])

    useEffect(() => {
        if(winState && userReload){
            getMaze()
            setWinState(false)
        }
    }, [winState])

    const getDestinationTile = (col, row) => {
        let destination = maze[col][row]
        if(destination === '|' || destination === '+' || destination === '-'){
            return 'obs'
        } else if (destination === 'g'){
            return 'win'
        }
        else {
            return 'clear'
        }
    }

    const moveHandler = (event) => {
        if(!winState) {
            let old = [...maze]
            if(event.key === "ArrowUp"){
                switch(getDestinationTile(playerPos[0]-1, playerPos[1])){
                    case "clear":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]-1][playerPos[1]] = 'p'
                        setLookDirection("Back")
                        setMaze(old)
                        break
                    case "win":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]-1][playerPos[1]] = 'p'
                        setLookDirection("Back")
                        setMaze(old)
                        setWinState(true)
                        break
                    default:
                        break
                }      
            }
            else if(event.key === "ArrowDown"){
                switch(getDestinationTile(playerPos[0]+1, playerPos[1])){
                    case "clear":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]+1][playerPos[1]] = 'p'
                        setLookDirection("Front")
                        setMaze(old)
                        break
                    case "win":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]+1][playerPos[1]] = 'p'
                        setLookDirection("Front")
                        setMaze(old)
                        setWinState(true)
                        break
                    default:
                        break
                }      
            }
            else if(event.key === "ArrowLeft"){
                switch(getDestinationTile(playerPos[0], playerPos[1]-1)){
                    case "clear":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]][playerPos[1]-1] = 'p'
                        setLookDirection("Left")
                        setMaze(old)
                        break
                    case "win":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]][playerPos[1]-1] = 'p'
                        setLookDirection("Left")
                        setMaze(old)
                        setWinState(true)
                        break
                    default:
                        break
                }      
            }
            if(event.key === "ArrowRight"){
                switch(getDestinationTile(playerPos[0], playerPos[1]+1)){
                    case "clear":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]][playerPos[1]+1] = 'p'
                        setLookDirection("Right")
                        setMaze(old)
                        break
                    case "win":
                        old[playerPos[0]][playerPos[1]] = ' '
                        old[playerPos[0]][playerPos[1]+1] = 'p'
                        setLookDirection("Right")
                        setMaze(old)
                        setWinState(true)
                        break
                    default:
                        break
                }      
            }
        }
    }

    return (
        <div className='maze' tabIndex='0'
        onKeyDown={moveHandler}
        style = {{display: 'grid', gridTemplateColumns: `repeat(${dimX*3 + 1}, 1fr)`, gridTemplateRows: `repeat(${dimY*2 + 1}, 1fr)`}}>
            {maze?.map(
            (row, x) => {
                return (
                    row.map((tile, y) => {
                        if(tile === '|' || tile === '+' || tile === '-'){
                            return (
                                <Tile theme={theme} obstacle={true}/>
                            )
                        }
                        else if(tile === ' ') {
                            return (
                                <Tile theme={theme} obstacle={false}/>
                            )
                        }
                        else if(tile === 'p'){
                            playerPos = [x,y]
                            return (
                                <Tile theme={theme} obstacle={false}>
                                    <Character skin={skin} direction={lookDirection}/>
                                </Tile>
                            )
                        }
                        else if(tile === 'g'){
                            return (
                                <Tile theme={theme} obstacle={false}>
                                    <img className="bag" src="/whitebag.png"/>
                                </Tile>
                            )
                        }
                    })
                )
            } 
        )}
        </div>
    )

    
}

export default Maze