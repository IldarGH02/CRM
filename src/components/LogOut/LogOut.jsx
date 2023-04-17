const LogOut = (props) => {
    return (
        <button 
            onClick={props.handleLogOut} 
            className="navigation__button logout-button">
                Log Out
        </button>
    )
}

export default LogOut