import React from 'react';
import './notification.scss';
import Immutable from 'immutable';
import errorsEnums from '../../enums/errors';

export default class Notification extends React.Component {
    componentDidMount() {
        setTimeout(function() {
            this.props.removeNotification(this.props.notification.get('id'));
        }.bind(this), 2500);
    }

    getClassNames() {
        let classNames = 'notification-container',
            type = this.props.notification.get('notificationType');

        if (type === errorsEnums.ERROR) {
            classNames += ' notification-container--error';
        }

        return classNames;
    }

    render() {
        return (
            <div className={this.getClassNames()}>
                {this.props.notification.get('message')}
            </div>
        );
    }
}

Notification.propTypes = {
    removeNotification: React.PropTypes.func,
    notification: React.PropTypes.instanceOf(Immutable.Map)
};

Notification.defaultProps = {
    notification: Immutable.Map(),
    removeNotification: function() {}
};
