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
        this.props.changeSelectedView(+e.target.value, this.props.selected);
    }

    makeRadioBtns() {
        let radioBtns = this.props.types.map((type, idx) => {
            return <Radio
                      key={type}
                      name="viewType"
                      value={idx}
                      text={type}
                      onToggle={this.onToggle.bind(this)}
                      checked={idx === this.props.selected} />;
        });

        return <div className="header-inputs">{radioBtns}</div>;
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
                      autoFocus type="text"
                      placeholder={this.props.name} />
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
    selected: React.PropTypes.number,
    types: React.PropTypes.instanceOf(Immutable.List)
};

HeaderContainer.defaultProps = {
    selected: 0,
    name: 'Untitled Calendar',
    types: Immutable.List([ 'calendar', 'courses' ])
};
