import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';

import './Calendar.css';

const AppCalendar = () => {
    const [value, onChange] = useState(new Date());

    const navigate = useNavigate();

    const chooseDate = async date => {
        await onChange(date);
        navigate(`date/${dayjs(date).format('YYYY-MM-DD')}`);
    }

    return (
        <Calendar
            onChange={chooseDate}
            value={value}
            locale="us-US"
            calendarType="ISO 8601"
        />
    );
};

export { AppCalendar };