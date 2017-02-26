import React from 'react';
import { connect } from 'react-redux';
import * as notificationsActions from '../../actions/notifications';
import Notifications from '../../components/notifications/notifications.jsx';

function mapStateToProps(state) {
    return {
        notifications: state.notifications
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeNotification(id) {
            dispatch(notificationsActions.removeNotification(id));
        }
    };
}

class NotificationsContainer extends React.Component {
    render() {
        return <Notifications {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationsContainer);
