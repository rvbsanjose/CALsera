import calendarEnums from '../enums/calendar';

export function updateCalendarName(name) {
    return {
        type: calendarEnums.UPDATE_CALENDAR_NAME,
        name
    };
}

export function updateActiveWeek(week) {
    if (typeof week === 'undefined') {
        throw Error('Can\'t update active week without a week number.');
    }

    return (dispatch, getState) => {
        let state = getState(),
            activeWeek = state.calendar.getIn([ 'active', 'week' ]);

        if (activeWeek === week) {
            return;
        }

        dispatch({
            type: calendarEnums.UPDATE_ACTIVE_WEEK,
            week
        });
    };
}

export function updateActiveDay(day) {
    if (typeof day === 'undefined') {
        throw Error('Can\'t update active day without a day number.');
    }

    return (dispatch, getState) => {
        let state = getState(),
            activeDay = state.calendar.getIn([ 'active', 'day' ]);

        if (activeDay === day) {
            return;
        }

        dispatch({
            type: calendarEnums.UPDATE_ACTIVE_DAY,
            day
        });
    };
}

export function toggleToday() {
    return {
        type: calendarEnums.TOGGLE_TODAY
    };
}
