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
                answers: {
                    answer1: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer2: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer3: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer4: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer5: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer6: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer7: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer8: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer9: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                    answer10: ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer']

                },
                checked: {
                    check1: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check2: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check3: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check4: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check5: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check6: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check7: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check8: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check9: ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    check10: ['miniCircle','miniCircle','miniCircle','miniCircle']
                },
                counter1:0,


            }
    }

start = (e) =>{
    const tabColor = ['red circleAnswer', 'yellow circleAnswer','blue circleAnswer','green circleAnswer','orange circleAnswer','brown circleAnswer'];
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
check = (e) => {
    const userAnswer = this.state.answers.answer1.slice();
    const tabResult = this.state.tabResult.slice();
    if ( this.state.answerNumber == 0 ){
        const resultTab = this.state.checked.check1;
        name(resultTab);
    } else if ( this.state.answerNumber == 1 ){
        const resultTab = this.state.checked.check2;
        name(resultTab);
    }

    function name(tab) {
        let resultTab = tab;
        if ( tabResult[0] == userAnswer[0] ){
            resultTab.push('black miniCircle');

        } else if ( tabResult.indexOf(userAnswer[0]) != -1) {
            resultTab.push('cross miniCircle');
        }

         if ( tabResult[1] == userAnswer[1] ) {
            resultTab.push('black miniCircle');
        } else if ( tabResult.indexOf(userAnswer[1]) != -1) {
            resultTab.push('cross miniCircle');
        }

         if ( tabResult[2] == userAnswer[2] ) {
            resultTab.push('black miniCircle');
        } else if ( tabResult.indexOf(userAnswer[2]) != -1) {
            resultTab.push('cross miniCircle');
        }

        if ( tabResult[3] == userAnswer[3] ) {
            resultTab.push('black miniCircle');
        } else if ( tabResult.indexOf(userAnswer[3]) != -1) {
            resultTab.push('cross miniCircle');
        }

        resultTab.splice(0,4);
    }
    this.setState({
        answerNumber:1,
        counter1:0
    })


}



takeColor = (e)=>{

    let counter1= this.state.counter1;
    if ( this.state.answerNumber == 0 ){
        const answers = this.state.answers.answer1;


        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }


    } else if ( this.state.answerNumber == 1 ){
        const answers = this.state.answers.answer2;


        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }


    }

this.setState({
    counter1
})
}

render(){


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
                <Answer checked={this.state.checked.check1} class={this.state.answers.answer1}/>
                <Answer checked={this.state.checked.check2} class={this.state.answers.answer2}/>
                <Answer checked={this.state.checked.check3} class={this.state.answers.answer3}/>
                <Answer checked={this.state.checked.check4} class={this.state.answers.answer4}/>
                <Answer checked={this.state.checked.check5} class={this.state.answers.answer5}/>
                <Answer checked={this.state.checked.check6} class={this.state.answers.answer6}/>
                <Answer checked={this.state.checked.check7} class={this.state.answers.answer7}/>
                <Answer checked={this.state.checked.check8} class={this.state.answers.answer8}/>
                <Answer checked={this.state.checked.check9} class={this.state.answers.answer9}/>
                <Answer checked={this.state.checked.check10} class={this.state.answers.answer10}/>
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('appReact'));
