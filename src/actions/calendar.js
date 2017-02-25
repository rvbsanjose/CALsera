import calendarEnums from '../enums/calendar';

export function changeSelectedView(idx) {
    return {
        type: calendarEnums.CHANGE_SELECTED_VIEW,
        idx
    };
}

export function updateCalendarName(name) {
    return {
        type: calendarEnums.UPDAATE_CALENDAR_NAME,
        name
    };
}
