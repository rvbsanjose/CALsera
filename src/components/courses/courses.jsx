import React from 'react';
import Immutable from 'immutable';
import Course from '../course/course.jsx';

export default class Courses extends React.Component {
    makeCourseCatalog() {
        return this.props.courses.reduce((accum, course) => {
            let props = Object.assign({}, this.props, {
                course
            });

            return accum.push(<Course key={course.id} {...props}  />) && accum;
        }, []);
    }

    render() {
        return (
            <div className="courses-container">
                {this.makeCourseCatalog()}
            </div>
        );
    }
}

Courses.propTypes = {
    courses: React.PropTypes.instanceOf(Immutable.Map)
};

Courses.defaultProps = {
    courses: Immutable.Map()
};
