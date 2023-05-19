const DropdownBtn = ({ active, text, clickHandler}) => {
    return (
        <button className={`btn ${active ? 'y' : 'n'}`} onClick={clickHandler}>
            {text}
            <span className={`arrow ${active ? 'y' : 'n'}`}>&gt;</span>
            </button>
    )
}

export default DropdownBtn