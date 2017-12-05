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
                answerNumber:1,
                answers: [
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
                  ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer']
                ],

                checked: [
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle'],
                    ['miniCircle','miniCircle','miniCircle','miniCircle']
                ],
                counter1:0,
                delItems: [
                    true,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false
                ]
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
        disabledStart: false,
        disabledReset:false,
        disabledCheck:true,
        answerNumber:1,
        answers: [
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'],
          ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer']
        ],
        checked: [
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle'],
            ['miniCircle','miniCircle','miniCircle','miniCircle']
        ],
        counter1:0,
    })


}
reset = (e)=>{

    let answerNumber = this.state.answerNumber;
    this.state.answers[answerNumber - 1] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
    this.state.counter1 = 0;
    this.forceUpdate();

}
check = (e) => {

    const tabResult = this.state.tabResult.slice();

    // test //
    let numberAnsw = this.state.answerNumber;


    let resultTab = this.state.checked[numberAnsw - 1];
    let userAnswer = this.state.answers[numberAnsw - 1].slice();

    if ( numberAnsw == 9 ) {
        this.state.delItems[9] = false;
    } else  {
        this.state.delItems[ numberAnsw - 1 ] = false;
        this.state.delItems[ numberAnsw ] = true;
    }

        name(resultTab, userAnswer);
    function name(resTab, usrAns) {
        let resultTab = resTab;
        let userAnswer = usrAns;
        resultTab.splice(0,4);

         if ( tabResult[0] == userAnswer[0] ){
             let num = Math.random();

             if ( num < 0.5 ) {
                resultTab.push('black miniCircle');
             } else {
                resultTab.unshift('black miniCircle');
             }

        } else if ( tabResult.indexOf(userAnswer[0]) != -1) {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.unshift('cross miniCircle');
            } else {
               resultTab.push('cross miniCircle');
            }

        } else {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.push('miniCircle');
            } else {
               resultTab.unshift('miniCircle');
            }
        }

         if ( tabResult[1] == userAnswer[1] ) {
             let num = Math.random();
             if ( num < 0.5 ) {
                resultTab.unshift('black miniCircle');
             } else {
                resultTab.push('black miniCircle');
             }
        } else if ( tabResult.indexOf(userAnswer[1]) != -1) {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.unshift('cross miniCircle');
            } else {
               resultTab.push('cross miniCircle');
            }

        } else {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.unshift('miniCircle');
            } else {
               resultTab.push('miniCircle');
            }
        }

         if ( tabResult[2] == userAnswer[2] ) {
             let num = Math.random();
             if ( num < 0.5 ) {
                resultTab.unshift('black miniCircle');
             } else {
                resultTab.unshift('black miniCircle');
             }
        } else if ( tabResult.indexOf(userAnswer[2]) != -1) {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.push('cross miniCircle');
            } else {
               resultTab.push('cross miniCircle');
            }
        } else {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.unshift('miniCircle');
            } else {
               resultTab.push('miniCircle');
            }
        }

        if ( tabResult[3] == userAnswer[3] ) {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.push('black miniCircle');
            } else {
               resultTab.push('black miniCircle');
            }
        } else if ( tabResult.indexOf(userAnswer[3]) != -1) {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.unshift('cross miniCircle');
            } else {
               resultTab.push('cross miniCircle');
            }
        } else {
            let num = Math.random();
            if ( num < 0.5 ) {
               resultTab.push('miniCircle');
            } else {
               resultTab.unshift('miniCircle');
            }
        }

        if ((  tabResult[0] == userAnswer[0] ) && (  tabResult[1] == userAnswer[1] ) && (  tabResult[2] == userAnswer[2] ) && ( tabResult[3] == userAnswer[3] )){
            alert('WYGRALES !!!');
            resultTab.unshift('black miniCircle');
            resultTab.unshift('black miniCircle');
            resultTab.unshift('black miniCircle');
            resultTab.unshift('black miniCircle');
        }
        function mixArray(arr) {
                for (var i=0; i<arr.length; i++) {
                        var j = Math.floor(Math.random() * arr.length);
                        var temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp;
                    }
                    return arr;
                }


                mixArray(resultTab) ;
    }
    this.setState({

        answerNumber:this.state.answerNumber + 1,
        counter1:0,
        disabledCheck:true
    })


}

takeColor = (e)=>{

    let counter1= this.state.counter1;

    for (let i = 0; i < 10; i++) {
        if ( this.state.answerNumber === i + 1 ){
            const answers = this.state.answers[i];

            if (answers.indexOf(e.target.dataset.color) == -1 ) {
                answers.splice(counter1,1);
                answers.splice(this.state.counter1,0, e.target.dataset.color);
                counter1++;

                this.forceUpdate();
                answers.splice(4);
            }
        }
    }
let disabledCheck = this.state.disabledCheck;
if ( this.state.counter1 >= 3 ){
    disabledCheck = false;
}
this.setState({
    counter1,
    disabledCheck
})
}
click = (e) =>{

    for (let i = 0; i < 10; i++){
        for (let j = 0; j < 4; j++ ){
          if (this.state.answerNumber === i + 1) {
            if (( e.target.dataset.key == j + 1) && ( e.target.dataset.disable == 'true')){
              this.state.answers[i][j] = 'white circleAnswer';
              this.state.counter1 = j;
              this.forceUpdate();
            }
          }
        }
    }

}

render(){

    return (
        <div className='container'>
            <Title />
            <div className='mainBtn'>
                <Button disabled={this.state.disabledStart} action={this.start} name='New Game' />
                <Button disabled={this.state.disabledReset} action={this.reset} name= 'Reset line' />
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
                {this.state.answers.map((answer, i) => {
                    return <Answer action={this.click} disabled={this.state.delItems[i]} checked={this.state.checked[i]} class={this.state.answers[i]} key={i}/>
                })}

            <div className='footer'>
                <a className='socialIcon' href='https://github.com/kolin4'><i className="icon-github-circled"></i></a>
                <a className='socialIcon'  href='https://www.linkedin.com/in/krzysztof-kolacz/'><i className="icon-linkedin"></i></a>
                </div>
        </div>
    )
}
}

ReactDOM.render(<App />, document.getElementById('appReact'));
