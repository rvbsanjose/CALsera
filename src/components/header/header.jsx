import './header.scss';
import React from 'react';
import Immutable from 'immutable';
import Radio from '../radio/radio.jsx';
import navigationEnums from '../../enums/navigation';
import MaterialIcon from '../materialIcon/materialIcon.jsx';

export default class HeaderContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    onToggle(e) {
        this.props.updateTypeIdx(+e.target.value);
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
            this.updateCalendarName();
        }
    }

    onInputBlur() {
        this.updateCalendarName();
    }

    updateCalendarName() {
        this.setState({
            isEditing: !this.state.isEditing
        });

        this.props.updateCalendarName(this.refs.calendarName.value);
    }

    renderName() {
        if (this.state.isEditing) {
            return (
                <div
                  onKeyDown={this.onKeyDown.bind(this)}
                  className="header-calendar-name">
                    <input
                      ref="calendarName"
                      autoFocus type="text"
                      onBlur={this.onInputBlur.bind(this)} />
                </div>
            );
        }

        return (
            <div
              title="Click to rename calendar"
              onClick={this.onClick.bind(this)}
              className="header-calendar-name">
                {this.props.name} <MaterialIcon icon="create" />
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
    updateTypeIdx: React.PropTypes.func,
    updateCalendarName: React.PropTypes.func,
    typeIdx: React.PropTypes.number.isRequired,
    types: React.PropTypes.instanceOf(Immutable.List)
};

HeaderContainer.defaultProps = {
    name: 'Untitled Calendar',
    updateTypeIdx: function() {},
    updateCalendarName: function() {},
    types: Immutable.List([ navigationEnums.COURSES, navigationEnums.CALENDAR ])
};
