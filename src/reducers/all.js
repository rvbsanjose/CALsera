import calendar from './calendar';
import events from './events';
import weeks from './weeks';
import navigation from './navigation';
import { combineReducers } from 'redux';

export default combineReducers({
    weeks,
    events,
    calendar,
    navigation
});
