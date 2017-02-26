import React from 'react';
import Immutable from 'immutable';
import { connect } from 'react-redux';
import * as weeksActions from '../../actions/weeks.js';
import Courses from '../../components/courses/courses.jsx';

function mapStateToProps(state) {
    return {
        courses: state.courses,
        enrolledCourses: getEnrolledCourses(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addCourseToWeeks(course) {
            dispatch(weeksActions.addCourseToWeeks(course));
        },

        removeCourseFromWeek(course) {
            dispatch(weeksActions.removeCourseFromWeek(course));
        }
    };
}

function getEnrolledCourses(state) {
    let courses = state.courses,
        weekNum = `week-${state.calendar.getIn([ 'active', 'week' ])}`,
        week = state.weeks.get(weekNum);

    return week.reduce((accum, day) => {
        day.courses.forEach(course => {
            accum = accum.add(`course-${course.id}`);
        });

        return accum;
    }, Immutable.Set());
}

class CoursesContainer extends React.Component {
    render() {
        return <Courses {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesContainer);
