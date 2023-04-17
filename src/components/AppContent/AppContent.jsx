import { Routes, Route } from 'react-router-dom'

import LoginPage, {routeMain as routeLoginPage} from 'pages/LoginPage/LoginPage'
import Register, {routeMain as routeRegisterPage} from 'pages/Register/Register'
import MainPage, {routeMain as routeMainPage} from 'pages/MainPage/MainPage'
import ContactsPage, {routeMain as routeContactsPage} from 'pages/ContactsPage/ContactsPage'
import CalendarPage, {routeMain as routeCalendarPage} from 'pages/CalendarPage/CalendarPage'

const AppContent = () => {
    return (
        <div className='mainWrapper'>            
            <Routes>
                <Route path={routeLoginPage()} element={<LoginPage/>}/>
                <Route path={routeRegisterPage()} element={<Register/>}/>
                <Route path={routeMainPage()} element={<MainPage/>}>
                    <Route path={routeContactsPage()} element={<ContactsPage/>}/>
                    <Route path={routeCalendarPage()} element={<CalendarPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default AppContent