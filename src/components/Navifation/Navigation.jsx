import { NavLink } from "react-router-dom"

import {routeMain as routeContacts} from "pages/ContactsPage/ContactsPage"
import {routeMain as routeCalendar} from "pages/CalendarPage/CalendarPage"
import LogOut from "components/LogOut/LogOut"


const Navigation = ({handleClick}) => {
    return (
        <div className="navigation">
            <div className="navigation__content">
                <div className="navigation__header">
                    <h1 className="navifation__logo">LOGO</h1>
                    <nav className="navigation__nav">
                        <NavLink to={routeContacts()} className='navigation__link contacts'>Список контактов</NavLink>
                        <NavLink to={routeCalendar()} className='navigation__link calendar'>Календарь</NavLink>
                        <NavLink className='navigation__link calendar'>Описание</NavLink>
                    </nav>
                </div>
                <div className="navigation__footer">
                   <LogOut
                        handleLogOut={handleClick}
                   />
                </div>
            </div>
        </div>
    )
}

export {Navigation}