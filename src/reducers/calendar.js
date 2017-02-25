import Immutable from 'immutable';
import calendarEnums from '../enums/calendar';

function makeInitialState() {
    return Immutable.Map({
        selected: 0,
        name: 'Untitled Calendar',
        types: Immutable.List([ 'calendar', 'courses' ])
    });
}

function changeSelectedView(state, action) {
    return state.set('selected', action.idx);
}

function updateCalendarName(state, action) {
    return state.set('name', action.name || 'Untitled Calendar');
}

export default (state = makeInitialState(), action) => {
    switch(action.type) {
        case calendarEnums.CHANGE_SELECTED_VIEW:
            return changeSelectedView(state, action);
        case calendarEnums.UPDAATE_CALENDAR_NAME:
            return updateCalendarName(state, action);
        default:
            return state;
    }
};
