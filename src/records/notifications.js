import Immutable from 'immutable';

export default (conflict = {}) => {
    return Immutable.Map({
        id: conflict.id,
        message: conflict.message,
        notificationType: conflict.notificationType
    });
}
