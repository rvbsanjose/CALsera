import './day.scss';
import React from 'react';
import Immutable from 'immutable';
import MaterialIcon from '../materialIcon/materialIcon.jsx';

export default class Day extends React.Component {
    getClassNames() {
        let classNames = 'day-container';

        if (this.props.activeDay === this.props.idx) {
            classNames += ' day-container--active';
        }

        return classNames;
    }

    toggleDay() {
        this.props.onToggleDay(this.props.idx);
    }

    makeScheduled() {
        if (this.props.day.courses.size === 1) {
            return `${this.props.day.courses.size} course scheduled`;
        }

        return `${this.props.day.courses.size} courses scheduled`;
    }

    makeScheduleCnt() {
        if (this.props.idx === 0 || this.props.idx === 6) {
            return;
        }

        return (
            <div className="day-courses">
                <MaterialIcon icon="date_range" />
                {this.makeScheduled()}
            </div>
        );
    }

    render() {
        return (
            <div
              className={this.getClassNames()}
              onClick={this.toggleDay.bind(this)}>
                <div className="day-date">
                    {this.props.day.day}
                </div>
                {this.makeScheduleCnt()}
            </div>
        );
    }
}

Day.propTypes = {
    activeDay: React.PropTypes.number,
    onToggleDay: React.PropTypes.func,
    idx: React.PropTypes.number.isRequired,
    day: React.PropTypes.instanceOf(Immutable.Record)
};

Day.defaultProps = {
    onToggleDay: function() {},
    day: Immutable.Record({})()
};
