import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header.jsx';
import * as calendarActions from '../../actions/calendar';
import * as navigationActions from '../../actions/navigation';

function mapStateToProps(store) {
    return {
        name: store.calendar.get('name'),
        types: store.navigation.get('types'),
        typeIdx: store.navigation.get('typeIdx')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTypeIdx(typeIdx) {
            dispatch(navigationActions.updateTypeIdx(typeIdx));
        },

        updateCalendarName(name) {
            dispatch(calendarActions.updateCalendarName(name));
        }
    };
}

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
