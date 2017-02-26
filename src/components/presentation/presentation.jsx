import React from 'react';
import './presentation.scss';
import Course from '../course/course.jsx';
import catalog from '../../../data/catalog';

export default class Presentation extends React.Component {
    makeCourseCatalog() {
        return catalog.courses.map(course => {
            return <Course key={course.name} course={course} />;
        });
    }

    render() {
        return (
            <div className="presentation-container">
                {this.makeCourseCatalog()}
            </div>
        );
    }
}
