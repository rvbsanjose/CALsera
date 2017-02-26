import './course.scss';
import React from 'react';

export default class Course extends React.Component {
    makeCourseTime() {
        return `${this.props.course.days.join(', ')} from ` +
            `${this.props.course.time.join(' to ')}`;
    }

    render() {
        return (
            <div className="course-container">
                <div className="course-name">
                    {this.props.course.name}
                </div>
                <div className="course-instructor">
                    <i className="material-icons">school</i>
                    Lead Instructor: {this.props.course.author}
                </div>
                <div className="course-time">
                    <i className="material-icons">timelapse</i>
                    {this.makeCourseTime()}
                </div>
                <div className="course-description">
                    {this.props.course.description}
                </div>
            </div>
        );
    }
}
