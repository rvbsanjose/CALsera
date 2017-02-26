import './cal.scss';
import React from 'react';
import Immutable from 'immutable';
import Calcourse from '../calCourse/calCourse.jsx';

export default class Cal extends React.Component {
    makeScheduledCourses() {
        if (!this.props.schedule.size) {
            return <Calcourse />;
        }

        return this.props.schedule.reduce((accum, course) => {
            return accum.push(
                <Calcourse
                  course={course}
                  key={`course-${course.id}`}
                  removeCourseFromWeek={this.props.removeCourseFromWeek} />
            ) && accum;
        }, []);
    }

    render() {
        return (
            <div className="cal-container">
                {this.makeScheduledCourses()}
            </div>
        );
    }
}

Cal.propTypes = {
    removeCourseFromWeek: React.PropTypes.func,
    schedule: React.PropTypes.instanceOf(Immutable.OrderedMap)
};

Cal.defaultProps = {
    schedule: Immutable.OrderedMap(),
    removeCourseFromWeek: function() {}
};
