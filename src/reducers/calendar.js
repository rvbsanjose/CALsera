import moment from 'moment';
import Immutable from 'immutable';
import calendarEnums from '../enums/calendar';
import calendarRecord from '../records/calendar';

function makeInitialState() {
    return Immutable.Map(calendarRecord({
        active: {
            day: moment().day(),
            week: moment().week()
        }
    }));
}

function updateCalendarName(state, action) {
    return state.set('name', (action.name || 'Untitled Calendar'));
}

function toggleToday(state) {
    return state.set('active', Immutable.Map({
        day: moment().day(),
        week: moment().week()
    }));
}

function updateActiveDay(state, action) {
    return state.setIn([ 'active', 'day' ], action.day);
}

function updateActiveWeek(state, action) {
    let week = action.week;

    if (week <= 0) {
        week = 52;
    } else if (week >= 52) {
        week = 1;
    }

    return state.set('active', Immutable.Map({
        week,
        day: null
    }));
}

export default (state = makeInitialState(), action) => {
    switch(action.type) {
        case calendarEnums.UPDATE_CALENDAR_NAME:
            return updateCalendarName(state, action);
        case calendarEnums.UPDATE_ACTIVE_WEEK:
            return updateActiveWeek(state, action);
        case calendarEnums.UPDATE_ACTIVE_DAY:
            return updateActiveDay(state, action);
        case calendarEnums.TOGGLE_TODAY:
            return toggleToday(state, action);
        default:
            return state;
    }
};
