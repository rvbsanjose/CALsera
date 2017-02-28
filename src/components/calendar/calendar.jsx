import './calendar.scss';
import React from 'react';
import Day from '../day/day.jsx';
import Immutable from 'immutable';
import MaterialIcon from '../materialIcon/materialIcon.jsx';

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

    makeLeftArrow() {
        return <MaterialIcon
                title="Previous week"
                icon="keyboard_arrow_left"
                onCallback={this.prevWeek.bind(this)} />;
    }

    makeRightArrow() {
        return <MaterialIcon
                title="Next week"
                icon="keyboard_arrow_right"
                onCallback={this.nextWeek.bind(this)} />;
    }

    makeWeekSelector() {
        return (
            <div className="calendar-selector">
                {this.makeLeftArrow()}
                <div
                  title="Jump to current day"
                  onClick={this.toggleToday.bind(this)}
                  className="calendar-today">
                    <MaterialIcon icon="assessment" /> Today
                </div>
                {this.makeRightArrow()}
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

Calendar.propTypes = {
    activeDay: React.PropTypes.number,
    toggleToday: React.PropTypes.func,
    updateActiveDay: React.PropTypes.func,
    updateActiveWeek: React.PropTypes.func,
    activeWeek: React.PropTypes.number.isRequired,
    week: React.PropTypes.instanceOf(Immutable.List)
};

Calendar.defaultProps = {
    week: Immutable.List([]),
    toggleToday: function() {},
    updateActiveDay: function() {},
    updateActiveWeek: function() {}
};
