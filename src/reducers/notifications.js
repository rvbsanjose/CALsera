import Immutable from 'immutable';
import notificationsEnums from '../enums/notifications';
import notificationsRecord from '../records/notifications';

function makeInitialState() {
    return Immutable.Map();
}

function displayNotification(state, action) {
    if (state.has(action.id)) {
        return state;
    }

    return state.set(action.id, notificationsRecord({
        id: action.id,
        message: action.message,
        notificationType: action.notificationType
    }));
}

function removeNotification(state, action) {
    return state.delete(action.id);
}

export default (state = makeInitialState(), action) => {
    switch (action.type) {
        case notificationsEnums.REMOVE_MESSAGE:
            return removeNotification(state, action);
        case notificationsEnums.DISPLAY_MESSAGE:
            return displayNotification(state, action);
        default:
            return state;
    }
}
