import { useState } from "react";
import {DayPilot,DayPilotCalendar} from "@daypilot/daypilot-lite-react";
import Headers from "../Componentes/header";
const CalendarPage = () => {
    const [calendar, setCalendar] = useState();
    return (
        <div className="h-screen">
            <Headers/>
            <div className="mt-11">
          <DayPilotCalendar
            viewType="Week"
            onTimeRangeSelected={args => {
              const e = {
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                text: "Entrenamiento"
              };
              calendar.events.add(e);
              calendar.clearSelection();
            }}
            controlRef={setCalendar}
          />
            </div>
        </div>
      );
    }

export default CalendarPage;