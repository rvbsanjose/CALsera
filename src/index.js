import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

class Test extends React.Component {
    render() {
        return <div>Webpack set up correctly!</div>
    }
}

ReactDOM.render(<Test />, document.querySelector('#calsera-app'));
