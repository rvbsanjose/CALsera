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
    name: React.PropTypes.string,
    value: React.PropTypes.number,
    checked: React.PropTypes.bool,
    onToggle: React.PropTypes.func
};

Radio.defaultProps = {
    name: '',
    value: '',
    onToggle: function() {}
};
