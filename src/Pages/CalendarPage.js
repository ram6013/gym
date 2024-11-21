import { useState } from "react";
import {
  DayPilot,
  DayPilotMonth,
  DayPilotCalendar,
} from "@daypilot/daypilot-lite-react";
import Headers from "../Componentes/header";
import { useEffect } from "react";
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

      setEvents([newEvent]);  
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
          theme=""
        />
      </div>
    </div>
  );
};

export default CalendarPage;