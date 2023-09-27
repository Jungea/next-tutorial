"use client"

import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css';
import events from "./event";

export default function TuiCalendar() {

    return (
        <Calendar
            view="month"
            events={events} />
    )

}