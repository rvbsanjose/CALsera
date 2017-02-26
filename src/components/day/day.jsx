import './day.scss';
import React from 'react';
import Immutable from 'immutable';

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

    makeScheduleCnt() {
        if (this.props.idx === 0 || this.props.idx === 6) {
            return;
        }

        return (
            <div className="day-courses">
                <i className="material-icons">date_range</i>
                {`${this.props.day.courses.size} courses scheduled`}
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
    idx: React.PropTypes.number,
    activeDay: React.PropTypes.number,
    day: React.PropTypes.instanceOf(Immutable.Record)
};
