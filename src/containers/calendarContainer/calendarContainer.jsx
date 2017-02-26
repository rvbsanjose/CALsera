import React from 'react';
import { connect } from 'react-redux';
import * as weeksActions from '../../actions/weeks';
import * as calendarActions from '../../actions/calendar';
import * as navigationActions from '../../actions/navigation';
import Calendar from '../../components/calendar/calendar.jsx';

function mapStateToProps(state) {
    let active = state.calendar.get('active');

    return {
        activeDay: active.get('day'),
        activeWeek: active.get('week'),
        week: state.weeks.get(`week-${active.get("week")}`)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateActiveWeek(week) {
            dispatch(calendarActions.updateActiveWeek(week));
        },

        updateActiveDay(day) {
            dispatch(calendarActions.updateActiveDay(day));
            dispatch(navigationActions.updateTypeIdx(0));
        },

        toggleToday() {
            dispatch(calendarActions.toggleToday());
        }
    };
}

class CalendarContainer extends React.Component {
    render() {
        return <Calendar {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
