import calendarEnums from '../enums/calendar';

export function updateCalendarName(name) {
    return {
        type: calendarEnums.UPDATE_CALENDAR_NAME,
        name
    };
}

export function updateActiveWeek(week) {
    return {
        type: calendarEnums.UPDATE_ACTIVE_WEEK,
        week
    };
}

export function updateActiveDay(day) {
    return {
        type: calendarEnums.UPDATE_ACTIVE_DAY,
        day
    };
}

export function toggleToday() {
    return {
        type: calendarEnums.TOGGLE_TODAY
    };
}
