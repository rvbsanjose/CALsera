import React from 'react';
import Immutable from 'immutable';
import Timeslot from '../timeslot/timeslot.jsx';
import Calcourse from '../calCourse/calCourse.jsx';

export default class Cal extends React.Component {
    makeScheduledCourses() {
        if (!this.props.schedule.size) {
            return null;
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

    makeTimeSlots() {
        let slots = [];

        for (let i = 7; i <= 19; i++) {
            slots.push(<Timeslot key={`time-${i}`} hour={i} />);
        }

        return slots;
    }

    render() {
        return (
            <div className="cal-container">
                {this.makeTimeSlots()}
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
