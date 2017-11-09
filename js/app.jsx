import React from 'react';
import ReactDOM from 'react-dom';

import {Title} from './title.jsx';
import {Button} from './button.jsx';
import {Circle} from './circle.jsx';
import {Answer} from './answer.jsx';

class App extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                tabResult:[],
                disabledStart: false,
                disabledReset:true,
                disabledCheck:true,
                answerNumber:0,
                answer1: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer2: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer3: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer4: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer5: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer6: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer7: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer8: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer9: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                answer10: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                counter1:0,

            }
    }

start = (e) =>{
    const tabColor = ['red', 'yellow','blue','green','orange','brown'];
    const tabRandom = [];
    while (tabRandom.length < 4){
        let randomColor = tabColor[Math.floor(Math.random()* (6-0))];
        if ( tabRandom.indexOf(randomColor) == -1) {
            tabRandom.push(randomColor);
        }
    }
    this.setState({
        tabResult:tabRandom,
        disabledStart: true,
        disabledReset:false,
        disabledCheck:false,

    })


}
reset = (e)=>{
    console.log('reset');
}
check = (e) =>{
    console.log('check');

}



takeColor = (e)=>{

    if ( this.state.answerNumber == 0 ){

        const answer1 = this.state.answer1;
        let counter1 = this.state.counter1;
        if (answer1.indexOf(e.target.dataset.color) == -1 ) {
            answer1.splice(counter1,1);
            answer1.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;
        }
        answer1.splice(4);
        console.log(answer1);
        this.setState({
            answer1,
            counter1
    })
}
}

render(){

    console.log(this.state.tabResult);
    return (
        <div className='container'>
            <Title />
            <div className='mainBtn'>
                <Button disabled={this.state.disabledStart} action={this.start} name='Start' />
                <Button disabled={this.state.disabledReset} action={this.reset} name= 'Reset' />
                <Button disabled={this.state.disabledCheck} action={this.check} name='Check' />
            </div>
            <div className='chooseBox'>
                <Circle action={this.takeColor} class='circle red' color='red circleAnswer'/>
                <Circle action={this.takeColor} class='circle yellow' color='yellow circleAnswer'/>
                <Circle action={this.takeColor} class='circle blue' color='blue circleAnswer'/>
                <Circle action={this.takeColor} class='circle green' color='green circleAnswer'/>
                <Circle action={this.takeColor} class='circle orange' color='orange circleAnswer'/>
                <Circle action={this.takeColor} class='circle brown' color='brown circleAnswer'/>
            </div>
                <Answer class={this.state.answer1}/>
                <Answer class={this.state.answer2}/>
                <Answer class={this.state.answer3}/>
                <Answer class={this.state.answer4}/>
                <Answer class={this.state.answer5}/>
                <Answer class={this.state.answer6}/>
                <Answer class={this.state.answer7}/>
                <Answer class={this.state.answer8}/>
                <Answer class={this.state.answer9}/>
                <Answer class={this.state.answer10}/>
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('appReact'));
