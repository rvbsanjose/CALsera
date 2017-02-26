import './calCourse.scss';
import React from 'react';
import Immutable from 'immutable';
import MaterialIcon from '../materialIcon/materialIcon.jsx';

export default class CalCourse extends React.Component {
    makeCourseTime() {
        return `${this.props.course.days.join(', ')} from ` +
            `${this.props.course.time.join(' to ')}`;
    }

    removeCourseFromWeek() {
        this.props.removeCourseFromWeek({
            id: this.props.course.id,
            name: this.props.course.name,
            days: this.props.course.days,
            time: this.props.course.time,
            dayIndex: this.props.course.dayIndex,
            timeIndex: this.props.course.timeIndex
        });
    }

    makeRemoveBtn() {
        return <MaterialIcon
                icon="close"
                title="Remove course"
                onCallback={this.removeCourseFromWeek.bind(this)} />;
    }

    render() {
        if (!this.props.course) {
            return (
                <div className="calcourse-container calcourse-container--non">
                    <MaterialIcon icon="highlight_off" />
                </div>
            );
        }

        return (
            <div className="calcourse-container">
                <div className="calcourse-actions">
                    {this.makeRemoveBtn()}
                </div>
                <div className="calcourse-row">
                    <MaterialIcon icon="schedule" />
                    <div className="calcourse-name">
                        {this.props.course.name}
                    </div>
                </div>
                <div className="calcourse-time">
                    {this.makeCourseTime()}
                </div>
            </div>
        );
    }
}

CalCourse.propTypes = {
    removeCourseFromWeek: React.PropTypes.func,
    course: React.PropTypes.shape({
        id: React.PropTypes.number,
        name: React.PropTypes.string,
        days: React.PropTypes.instanceOf(Immutable.List),
        time: React.PropTypes.instanceOf(Immutable.List),
        dayIndex: React.PropTypes.instanceOf(Immutable.List),
        timeIndex: React.PropTypes.instanceOf(Immutable.List)
    })
};

CalCourse.defaultProps = {
    removeCourseFromWeek: function() {}
};
