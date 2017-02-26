import './radio.scss';
import React from 'react';

export default class Radio extends React.Component {
    render() {
        return (
            <div className="radio-container">
                <input
                  type="radio"
                  name={this.props.name}
                  value={this.props.value}
                  checked={this.props.checked}
                  onChange={this.props.onToggle.bind(this)} />
                {this.props.text}
            </div>
        );
    }
}

Radio.propTypes = {
    onToggle: React.PropTypes.func,
    text: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    checked: React.PropTypes.bool.isRequired
};

Radio.defaultProps = {
    onToggle: function() {}
};
