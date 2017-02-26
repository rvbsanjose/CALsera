import './header.scss';
import React from 'react';
import Immutable from 'immutable';
import Radio from '../radio/radio.jsx';

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    onToggle(e) {
        this.props.updateTypeIdx(+e.target.value, this.props.typeIdx);
    }

    makeRadioBtns() {
        let radioBtns = this.props.types.map((type, idx) => {
            return this.makeRadioBtn(type, idx);
        });

        return <div className="header-inputs">{radioBtns}</div>;
    }

    makeRadioBtn(type, idx) {
        return <Radio
                  key={type}
                  value={idx}
                  text={type}
                  name="viewType"
                  onToggle={this.onToggle.bind(this)}
                  checked={idx === this.props.typeIdx} />
    }

    onClick() {
        if (!this.state.isEditing) {
            this.setState({
                isEditing: !this.state.isEditing
            });
        }
    }

    onKeyDown(e) {
        if (e && e.keyCode === 13) {
            this.setState({
                isEditing: !this.state.isEditing
            });

            this.props.updateCalendarName(this.refs.calendarName.value);
        }
    }

    renderName() {
        if (this.state.isEditing) {
            return (
                <div
                  onKeyDown={this.onKeyDown.bind(this)}
                  className="header-calendar-name">
                    <input
                      ref="calendarName"
                      autoFocus type="text" />
                </div>
            );
        }

        return (
            <div
              onClick={this.onClick.bind(this)}
              className="header-calendar-name">
                {this.props.name} <i className="material-icons">create</i>
            </div>
        );
    }

    render() {
        return (
            <div className="header-container">
                {this.renderName()}
                {this.makeRadioBtns()}
            </div>
        );
    }
}

HeaderContainer.propTypes = {
    name: React.PropTypes.string,
    typeIdx: React.PropTypes.number,
    types: React.PropTypes.instanceOf(Immutable.List)
};

HeaderContainer.defaultProps = {
    typeIdx: 0,
    name: 'Untitled Calendar',
    types: Immutable.List([ 'calendar', 'courses' ])
};
