import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../../components/header/header.jsx';
import * as calendarActions from '../../actions/calendar';
import * as navigationActions from '../../actions/navigation';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

function mapStateToProps(store) {
    return {
        name: store.calendar.get('name'),
        types: store.navigation.get('types'),
        typeIdx: store.navigation.get('typeIdx')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateTypeIdx(idx, curr) {
            if (idx === curr) {
                return;
            }

            dispatch(navigationActions.updateTypeIdx(idx));
        },

        updateCalendarName(name) {
            dispatch(calendarActions.updateCalendarName(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
