import weeks from './weeks';
import courses from './courses';
import calendar from './calendar';
import navigation from './navigation';
import { combineReducers } from 'redux';
import notifications from './notifications';

export default combineReducers({
    weeks,
    courses,
    calendar,
    navigation,
    notifications
});
