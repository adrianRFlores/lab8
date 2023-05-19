import './DropdownBtn.css'

const DropdownBtn = ({ active, text, clickHandler, current}) => {
    return (
        <button className={`btn ${active ? 'y' : 'n'}`} onClick={clickHandler}>
            <img src={`${current}/${current}Front.png`} />
            {text}
            <span className={`arrow ${active ? 'y' : 'n'}`}>&gt;</span>
        </button>
    )
}

export default DropdownBtn