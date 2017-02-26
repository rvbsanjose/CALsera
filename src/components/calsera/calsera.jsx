import './calsera.scss';
import React from 'react';
import HeaderContainer from '../../containers/headerContainer/headerContainer.jsx';
import CalendarContainer from '../../containers/calendarContainer/calendarContainer.jsx';
import PresentationContainer from '../../containers/presentationContainer/presentationContainer.jsx';

export default class Calsera extends React.Component {
    render() {
        return (
            <div className="calsera-container">
                <HeaderContainer />
                <div className="row">
                  <CalendarContainer />
                  <PresentationContainer />
                </div>
            </div>
        );
    }
}
