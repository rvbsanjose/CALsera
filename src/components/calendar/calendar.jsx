import './calendar.scss';
import React from 'react';
import Day from '../day/day.jsx';

export default class Calendar extends React.Component {
    prevWeek() {
        this.props.updateActiveWeek(this.props.activeWeek - 1);
    }

    nextWeek() {
        this.props.updateActiveWeek(this.props.activeWeek + 1);
    }

    toggleToday() {
        this.props.toggleToday();
    }

    makeWeekSelector() {
        return (
            <div className="calendar-selector">
                <i className="material-icons" onClick={this.prevWeek.bind(this)}>
                    keyboard_arrow_left
                </i>
                <div onClick={this.toggleToday.bind(this)} className="calendar-today">
                    <i className="material-icons">assessment</i> Today
                </div>
                <i className="material-icons" onClick={this.nextWeek.bind(this)}>
                    keyboard_arrow_right
                </i>
            </div>
        );
    }

    makeDaysInWeek() {
        return this.props.week.map((day, i) => {
            return <Day
                      key={i}
                      idx={i}
                      day={day}
                      activeDay={this.props.activeDay}
                      onToggleDay={this.props.updateActiveDay} />;
        });
    }

    render() {
        return (
            <div className="calendar-container">
                {this.makeWeekSelector()}
                {this.makeDaysInWeek()}
            </div>
        );
    }
}
