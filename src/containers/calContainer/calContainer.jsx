import React from 'react';
import './calContainer.scss';
import { connect } from 'react-redux';
import Cal from '../../components/cal/cal.jsx';
import * as weeksActions from '../../actions/weeks';

function mapStateToProps(state) {
    let active = state.calendar.get('active'),
        activeDay = active.get('day'),
        activeWeek = active.get('week'),
        schedule = sortActiveDay(state, activeWeek, activeDay);

    return {
        schedule
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeCourseFromWeek(course) {
            dispatch(weeksActions.removeCourseFromWeek(course));
        }
    };
}

function sortActiveDay(state, activeWeek, activeDay) {
    return state.weeks.getIn([ `week-${activeWeek}`, activeDay, 'courses' ])
        .sortBy(course => course.timeIndex.get(0));
}

class CalContainer extends React.Component {
    render() {
        return <Cal {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalContainer);
