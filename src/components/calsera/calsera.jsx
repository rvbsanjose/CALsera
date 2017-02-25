import './calsera.scss';
import React from 'react';
import HeaderContainer from '../../containers/headerContainer/headerContainer.jsx';

export default class Calsera extends React.Component {
    render() {
        return (
            <div className="calsera-container">
                <HeaderContainer />
            </div>
        );
    }
}
