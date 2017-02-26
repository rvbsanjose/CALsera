import React from 'react';
import { connect } from 'react-redux';
import Presentation from '../../components/presentation/presentation.jsx';

function mapStateToProps(state) {
    return {
        types: state.navigation.get('types'),
        typeIdx: state.navigation.get('typeIdx')
    };
}

class PresentationContainer extends React.Component {
    render() {
        return <Presentation {...this.props} />;
    }
}

export default connect(mapStateToProps)(PresentationContainer);
