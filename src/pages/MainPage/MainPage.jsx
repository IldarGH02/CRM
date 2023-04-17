import { Routes, Route, Navigate } from "react-router-dom"
import routeMain from "./routes"

import Header from "components/Header/Header"
import {Navigation} from "components/Navifation/Navigation"

import { useDispatch } from "react-redux"
import { useAuth } from "hooks/use-auth"
import { removeUser } from "store/slices/userSlice"

import ContactsPage, {routeMain as routeContactsPage} from 'pages/ContactsPage/ContactsPage'
import CalendarPage, {routeMain as routeCalendarPage} from 'pages/CalendarPage/CalendarPage'

const MainPage = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()

    const handleClick = () => {
        dispatch(removeUser())
    }

    return isAuth ? (
        <div className="mainPage">
            <Navigation
                handleClick={() => handleClick()}
                email={email}
            />
            <div className='mainPageContainer'>
                <Header
                    user={email}
                />
                <main className='main'>
                    <Routes>
                        <Route path={routeContactsPage()} element={<ContactsPage/>}/>
                        <Route path={routeCalendarPage()} element={<CalendarPage/>}/>
                    </Routes>
                </main>
            </div>
        </div>
    ) : <Navigate to='/login'/>
}

export {routeMain}

export default MainPage