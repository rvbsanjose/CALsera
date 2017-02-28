import './calCourse.scss';
import React from 'react';
import Immutable from 'immutable';
import MaterialIcon from '../materialIcon/materialIcon.jsx';

export default class CalCourse extends React.Component {
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

    timeDifference() {
        return this.props.course.timeIndex.get(1) -
            this.props.course.timeIndex.get(0);
    }

    position() {
        return {
            top: ((this.props.course.timeIndex.get(0) - 7) * 80) + 43,
            height: (this.timeDifference() * 80) - 7
        };
    }

    render() {
        if (!this.props.course) {
            return null;
        }

        return (
            <div className="calcourse-container" style={this.position()}>
                <div className="calcourse-actions">
                    {this.makeRemoveBtn()}
                </div>
                <div className="calcourse-row">
                    <MaterialIcon icon="schedule" />
                    <div className="calcourse-name">
                        {this.props.course.name}
                    </div>
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
