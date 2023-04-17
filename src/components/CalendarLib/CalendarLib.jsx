import { useState } from "react";
import Calendar from "@demark-pro/react-booking-calendar"

const reserved = [
    {
      startDate: new Date(2023, 3, 22)
    },
  ];

const CalendarLib = () => {
    const [selectedDates, setSelectedDates] = useState([]);
    const handleChange = (e) => setSelectedDates(e);

    return (
        <section className="calendar">
            <div className="calendar__content">
                <Calendar 
                    selected={selectedDates}
                    onChange={handleChange}
                    onOverbook={(e, err) => alert(err)}
                    disabled={(date, state) => !state.isSameMonth}
                    reserved={reserved}
                    variant="events"
                    dateFnsOptions={{ weekStartsOn: 1 }}
                    range={true}
                />
            </div>
        </section>
    )
}

export default CalendarLib