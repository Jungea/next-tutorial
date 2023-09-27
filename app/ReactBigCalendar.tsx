"use client"

import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from "moment";
import events from "./event";

const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {

    return (
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />

    )

}