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
        disabledStart: false,
        disabledReset:false,
        disabledCheck:true,
        answerNumber:1,
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
    })


}
reset = (e)=>{

    let answerNumber = this.state.answerNumber;

    if ( answerNumber == 1 ){
        this.state.answers.answer1 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    } else if ( answerNumber == 2 ){
        this.state.answers.answer2 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 3 ){
        this.state.answers.answer3 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 4 ){
        this.state.answers.answer4 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 5 ){
        this.state.answers.answer5 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 6 ){
        this.state.answers.answer6 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 7 ){
        this.state.answers.answer7 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 8 ){
        this.state.answers.answer8 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 9 ){
        this.state.answers.answer9 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 10 ){
        this.state.answers.answer10 = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }
}
check = (e) => {
    const tabResult = this.state.tabResult.slice();
    if ( this.state.answerNumber == 1 ){
        const userAnswer = this.state.answers.answer1.slice();
        const resultTab = this.state.checked.check1;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 2 ){
        const userAnswer = this.state.answers.answer2.slice();
        const resultTab = this.state.checked.check2;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 3 ){
        const userAnswer = this.state.answers.answer3.slice();
        const resultTab = this.state.checked.check3;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 4 ){
        const userAnswer = this.state.answers.answer4.slice();
        const resultTab = this.state.checked.check4;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 5 ){
        const userAnswer = this.state.answers.answer5.slice();
        const resultTab = this.state.checked.check5;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 6 ){
        const userAnswer = this.state.answers.answer6.slice();
        const resultTab = this.state.checked.check6;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 7 ){
        const userAnswer = this.state.answers.answer7.slice();
        const resultTab = this.state.checked.check7;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 8 ){
        const userAnswer = this.state.answers.answer8.slice();
        const resultTab = this.state.checked.check8;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 9 ){
        const userAnswer = this.state.answers.answer9.slice();
        const resultTab = this.state.checked.check9;
        name(resultTab, userAnswer);
    } else if ( this.state.answerNumber == 10 ){
        const userAnswer = this.state.answers.answer10.slice();
        const resultTab = this.state.checked.check10;
        name(resultTab, userAnswer);
    }

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
                for (var i=0; i<arr.length; i++) { //wykonujemy pętlę po całej tablicy
                        var j = Math.floor(Math.random() * arr.length); //losujemy wartość z przedziału 0 - tablica.length-1
                        var temp = arr[i]; //pod zmienną temp podstawiamy wartość bieżącego indexu
                        arr[i] = arr[j]; //pod bieżący index podstawiamy wartość z indexu wylosowanego
                        arr[j] = temp; //pod wylosowany podstawiamy wartość z bieżącego indexu
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
    if ( this.state.answerNumber == 1 ){
        const answers = this.state.answers.answer1;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 2 ){
        const answers = this.state.answers.answer2;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 3 ){
        const answers = this.state.answers.answer3;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 4 ){
        const answers = this.state.answers.answer4;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 5 ){
        const answers = this.state.answers.answer5;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 6 ){
        const answers = this.state.answers.answer6;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 7 ){
        const answers = this.state.answers.answer7;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 8 ){
        const answers = this.state.answers.answer8;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 9 ){
        const answers = this.state.answers.answer9;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
        }
    } else if ( this.state.answerNumber == 10 ){
        const answers = this.state.answers.answer10;

        if (answers.indexOf(e.target.dataset.color) == -1 ) {
            answers.splice(counter1,1);
            answers.splice(this.state.counter1,0, e.target.dataset.color);
            counter1++;

            this.forceUpdate();
            answers.splice(4);
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
