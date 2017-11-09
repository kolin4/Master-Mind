import React from 'react';
import ReactDOM from 'react-dom';

import {Title} from './title.jsx';
import {Button} from './button.jsx';
import {Circle} from './circle.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
            this.state = {

            }
    }

start = (e) =>{
    const tabColor = ['red', 'yellow','blue','green','orange','brown'];
    console.log(tabColor);
}
reset = (e)=>{
    console.log('reset');
}
check = (e) =>{
    console.log('check');
}



takeColor = (e)=>{
    console.log(e.target.dataset.color);
}

render(){

    return (
        <div className='container'>
            <Title />
            <div className='mainBtn'>
                <Button action={this.start} name='Start' />
                <Button action={this.reset} name= 'Reset' />
                <Button action={this.check} name='Check' />
            </div>
            <div className='chooseBox'>
                <Circle action={this.takeColor} class='circle red' color='red'/>
                <Circle action={this.takeColor} class='circle yellow' color='yellow'/>
                <Circle action={this.takeColor} class='circle blue' color='blue'/>
                <Circle action={this.takeColor} class='circle green' color='green'/>
                <Circle action={this.takeColor} class='circle orange' color='orange'/>
                <Circle action={this.takeColor} class='circle brown' color='brown'/>
            </div>
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('appReact'));
