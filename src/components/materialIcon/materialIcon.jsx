import React from 'react';

export default class MaterialIcon extends React.Component {
    render() {
        return (
            <i
              title={this.props.title}
              className="material-icons"
              onClick={this.props.onCallback}>
                {this.props.icon}
            </i>
        );
    }
}

MaterialIcon.propTypes = {
    title: React.PropTypes.string,
    onCallback: React.PropTypes.func,
    icon: React.PropTypes.string.isRequired
};

MaterialIcon.defaultProps = {
    title: '',
    onCallback: function() {}
};
