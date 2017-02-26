import notificationsEnums from '../enums/notifications';

export function removeNotification(id) {
    return {
        type: notificationsEnums.REMOVE_MESSAGE,
        id
    };
}

export function displayNotification(opts = {}) {
    return {
        type: notificationsEnums.DISPLAY_MESSAGE,
        id: opts.id,
        message: opts.message,
        notificationType: opts.notificationType
    };
}
