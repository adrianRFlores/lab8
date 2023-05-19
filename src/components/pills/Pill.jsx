import './Pill.css'

const Pill = ({ theme, active, clickHandler }) => {

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    return (
        <button
        className={`pillHolder ${active ? 'y' : 'n'}`}
        onClick={() => clickHandler(theme)}
        style={{ backgroundImage: `url(${theme}/bg.png)` }}>
            {capitalize(theme)}
        </button>
    )

}

export default Pill