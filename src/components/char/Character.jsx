import './Character.css'

const Character = ({skin, direction}) => {
    return (
        <div className="CharacterContainer">
            <img src={`${skin}/${skin}${direction}.png`} />
        </div>
    )
}

export default Character