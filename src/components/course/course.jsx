import './course.scss';
import React from 'react';
import Immutable from 'immutable';
import MaterialIcon from '../materialIcon/materialIcon.jsx';

export default class Course extends React.Component {
    makeCourseTime() {
        return `${this.props.course.days.join(', ')} from ` +
            `${this.props.course.time.join(' to ')}`;
    }

    makeCoursePayload() {
        return {
            id: this.props.course.id,
            name: this.props.course.name,
            days: this.props.course.days,
            time: this.props.course.time,
            dayIndex: this.props.course.dayIndex,
            timeIndex: this.props.course.timeIndex
        };
    }

    onClickActionIcon() {
        if (this.props.enrolledCourses.has(`course-${this.props.course.id}`)) {
            return this.props.removeCourseFromWeek(this.makeCoursePayload());
        }

        return this.props.addCourseToWeeks(this.makeCoursePayload());
    }

    makeActionIconBtn() {
        if (this.props.enrolledCourses.has(`course-${this.props.course.id}`)) {
            return <MaterialIcon
                    icon="close"
                    title="Remove course"
                    onCallback={this.onClickActionIcon.bind(this)} />;
        }

        return <MaterialIcon
                icon="note_add"
                title="Add course"
                onCallback={this.onClickActionIcon.bind(this)} />;
    }

    makeSchoolIcon() {
        return <MaterialIcon icon="school" />;
    }

    makeTimelapseIcon() {
        return <MaterialIcon icon="timelapse" />;
    }

    render() {
        return (
            <div className="course-container">
                <div className="course-actions">
                    {this.makeActionIconBtn()}
                </div>
                <div className="course-name">
                    {this.props.course.name}
                </div>
                <div className="course-instructor">
                    {this.makeSchoolIcon()}
                    Lead Instructor: {this.props.course.author}
                </div>
                <div className="course-time">
                    {this.makeTimelapseIcon()}
                    {this.makeCourseTime()}
                </div>
                <div className="course-description">
                    {this.props.course.description}
                </div>
            </div>
        );
    }
}

Course.propTypes = {
    addCourseToWeeks: React.PropTypes.func,
    removeCourseFromWeek: React.PropTypes.func,
    course: React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        author: React.PropTypes.string,
        description: React.PropTypes.string,
        dayIndex: React.PropTypes.instanceOf(Immutable.List),
        timeIndex: React.PropTypes.instanceOf(Immutable.List)
    }),
    enrolledCourses: React.PropTypes.instanceOf(Immutable.Set)
};

Course.defaultProps = {
    course: Immutable.Map(),
    addCourseToWeeks: function() {},
    enrolledCourses: Immutable.Set(),
    removeCourseFromWeek: function() {}
};
