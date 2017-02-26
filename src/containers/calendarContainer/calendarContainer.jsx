import React from 'react';
import { connect } from 'react-redux';
import * as weeksActions from '../../actions/weeks';
import * as calendarActions from '../../actions/calendar';
import Calendar from '../../components/calendar/calendar.jsx';

class CalendarContainer extends React.Component {
    render() {
        return <Calendar {...this.props} />;
    }
}

function mapStateToProps(state) {
    let active = state.calendar.get('active');

    return {
        activeDay: active.get('day'),
        activeWeek: active.get('week'),
        week: state.weeks.get(`week${active.get("week")}`)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateActiveWeek(week) {
            if (!week) {
                return;
            }

            dispatch(weeksActions.addWeek(week));
            dispatch(calendarActions.updateActiveWeek(week));
        },

        updateActiveDay(day) {
            if (typeof day === 'undefined') {
                return;
            }

            dispatch(calendarActions.updateActiveDay(day));
        },

        toggleToday() {
            dispatch(calendarActions.toggleToday());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarContainer);
