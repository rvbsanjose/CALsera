import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as calendarActions from '../../actions/calendar';
import Header from '../../components/header/header.jsx';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />;
    }
}

function mapStateToProps(store) {
    return {
        name: store.calendar.get('name'),
        types: store.calendar.get('types'),
        selected: store.calendar.get('selected')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeSelectedView(idx, curr) {
            if (idx === curr) {
                return;
            }

            dispatch(calendarActions.changeSelectedView(idx));
        },

        updateCalendarName(name) {
            dispatch(calendarActions.updateCalendarName(name));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
