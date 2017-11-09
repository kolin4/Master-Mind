import React from 'react';
import ReactDOM from 'react-dom';

import {Title} from './title.jsx';

class App extends React.Component{


render(){
    console.log('dziala');
    return (
        <Title />
    )
}
}

ReactDOM.render(<App />, document.getElementById('appReact'));
