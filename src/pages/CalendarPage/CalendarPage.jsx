import CalendarLib from "components/CalendarLib/CalendarLib"
import routeMain from "./routes"

const CalendarPage = () => {
    return (
        <section className="calendar">
            <div className="calendar__container">
                <div className="calendar__content">
                    <CalendarLib/>
                </div>
            </div>
        </section>
    )
}

export {routeMain}

export default CalendarPage
