import './timeslot.scss';
import React from 'react';

export default class Timeslot extends React.Component {
    formatTime() {
        if (this.props.hour < 12) {
            return `${this.props.hour}am`;
        } else if (this.props.hour === 12) {
            return `${this.props.hour}pm`;
        } else {
            return `${this.props.hour - 12}pm`;
        }
    }

    render() {
        return (
            <div className="time-container">
                <div className="time-slot">
                    {this.formatTime()}
                </div>
                <div className="time-divider"></div>
            </div>
        );
    }
}

Timeslot.propTypes = {
    hour: React.PropTypes.number.isRequired
};
