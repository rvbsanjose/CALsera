import calendar from './calendar';
import events from './events';
import { combineReducers } from 'redux';

export default combineReducers({
    calendar,
    events
});
