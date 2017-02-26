import React from 'react';
import './notifications.scss';
import Immutable from 'immutable';
import Notification from '../notification/notification.jsx';

export default class Notifications extends React.Component {
    makeNotifications() {
        return this.props.notifications.reduce((accum, notification) => {
            return accum.push(
                <Notification
                  key={notification.get('id')}
                  notification={notification}
                  removeNotification={this.props.removeNotification} />
              ) && accum;
        }, []);
    }

    render() {
        return (
            <div className="notifications-container">
                {this.makeNotifications()}
            </div>
        );
    }
}

Notifications.propTypes = {
    removeNotification: React.PropTypes.func,
    notifications: React.PropTypes.instanceOf(Immutable.Map)
};

Notifications.defaultProps = {
    notifications: Immutable.Map(),
    removeNotification: function() {}
};
