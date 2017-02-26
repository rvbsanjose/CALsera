import React from 'react';
import './presentation.scss';
import Immutable from 'immutable';
import navigationEnums from '../../enums/navigation';
import CalContainer from '../../containers/calContainer/calContainer.jsx';
import CoursesContainer from '../../containers/coursesContainer/coursesContainer.jsx';

export default class Presentation extends React.Component {
    getViewType() {
        let {
            types,
            typeIdx
        } = this.props;

        if (types.get(typeIdx) === navigationEnums.CALENDAR) {
            return <CalContainer />;
        }

        return <CoursesContainer />;
    }

    render() {
        return (
            <div className="presentation-container">
                {this.getViewType()}
            </div>
        );
    }
}

Presentation.propTypes = {
    typeIdx: React.PropTypes.number.isRequired,
    types: React.PropTypes.instanceOf(Immutable.List)
};

Presentation.defaultProps = {
    types: Immutable.List([ navigationEnums.COURSES, navigationEnums.CALENDAR ])
};
