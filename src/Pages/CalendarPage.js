import { useState, useEffect } from "react";
import { DayPilot, DayPilotMonth } from "@daypilot/daypilot-lite-react";
import Headers from "../Componentes/header";
import { useLocation } from "react-router-dom";
import "../Css/Calendar.css";

const CalendarPage = () => {
  const [startDate] = useState(DayPilot.Date.today());
  const [calendar, setCalendar] = useState(null);
  const [events, setEvents] = useState([]);
  const location = useLocation();
  const eventData = location.state?.data;

  const config = {
    eventHeight: 30,
    headerHeight: 30,
    cellHeaderHeight: 20,
  };

  useEffect(() => {
    if (eventData) {
      const newEvent = {
        id: eventData.id,
        text: eventData.texto,
        start: DayPilot.Date.today().toString(),
        end: DayPilot.Date.today().addDays(1).toString(),
        backColor: eventData.color,
      };

      setEvents((prevEvents) => {
        const isEventExists = prevEvents.some(
          (event) => event.id === newEvent.id
        );
        if (isEventExists) {
          return prevEvents;
        } else {
          return [...prevEvents, newEvent];
        }
      });
    }
  }, [eventData]);

  return (
    <div className="">
      <Headers />
      <div className="mt-10">
        <DayPilotMonth
          {...config}
          startDate={startDate}
          controlRef={setCalendar}
          events={events}
        />
      </div>
    </div>
  );
};

export default CalendarPage;
