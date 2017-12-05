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
                ],  // Dwuwymiarowa tablica zamiast obiektu.
                    // Teraz zamiast odwolywac sie np. do kluczy wystarczy wskazac numer elementu.
                    // "answers.answer1" to teraz "answers[0]", "answers.answer2" to "answers[1]" - i tak dalej.

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
                ],  // Jak wyzej.
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

    if ( answerNumber == 1 ){
        this.state.answers[0] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    } else if ( answerNumber == 2 ){
        this.state.answers[1] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 3 ){
        this.state.answers[2] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 4 ){
        this.state.answers[3] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 5 ){
        this.state.answers[4] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 6 ){
        this.state.answers[5] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 7 ){
        this.state.answers[6] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 8 ){
        this.state.answers[7] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 9 ){
        this.state.answers[8] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }  else if ( answerNumber == 10 ){
        this.state.answers[9] = ['white circleAnswer','white circleAnswer','white circleAnswer','white circleAnswer'];
        this.state.counter1 = 0;
        this.forceUpdate();
    }
}
check = (e) => {

    const tabResult = this.state.tabResult.slice();
    let resultTab;
    let userAnswer;

    if ( this.state.answerNumber == 1 ){
<<<<<<< HEAD
        userAnswer = this.state.answers.answer1.slice();
        resultTab = this.state.checked.check1;
        this.state.delItems1 = false;
        this.state.delItems2 = true;
    } else if ( this.state.answerNumber == 2 ){
        userAnswer = this.state.answers.answer2.slice();
        resultTab = this.state.checked.check2;
        this.state.delItems2 = false;
        this.state.delItems3 = true;
    } else if ( this.state.answerNumber == 3 ){
        userAnswer = this.state.answers.answer3.slice();
        resultTab = this.state.checked.check3;
        this.state.delItems3 = false;
        this.state.delItems4 = true;
    } else if ( this.state.answerNumber == 4 ){
        userAnswer = this.state.answers.answer4.slice();
        resultTab = this.state.checked.check4;
        this.state.delItems4 = false;
        this.state.delItems5 = true;
    } else if ( this.state.answerNumber == 5 ){
        userAnswer = this.state.answers.answer5.slice();
        resultTab = this.state.checked.check5;
        this.state.delItems5 = false;
        this.state.delItems6 = true;
    } else if ( this.state.answerNumber == 6 ){
        userAnswer = this.state.answers.answer6.slice();
        resultTab = this.state.checked.check6;
        this.state.delItems6 = false;
        this.state.delItems7 = true;
    } else if ( this.state.answerNumber == 7 ){
        userAnswer = this.state.answers.answer7.slice();
        resultTab = this.state.checked.check7;
        this.state.delItems7 = false;
        this.state.delItems8 = true;
    } else if ( this.state.answerNumber == 8 ){
        userAnswer = this.state.answers.answer8.slice();
        esultTab = this.state.checked.check8;
        this.state.delItems8 = false;
        this.state.delItems9 = true;
    } else if ( this.state.answerNumber == 9 ){
        userAnswer = this.state.answers.answer9.slice();
        resultTab = this.state.checked.check9;
        this.state.delItems9 = false;
        this.state.delItems10 = true;
    } else if ( this.state.answerNumber == 10 ){
        userAnswer = this.state.answers.answer10.slice();
        resultTab = this.state.checked.check10;
        // name(resultTab, userAnswer);
        this.state.delItems10 = false;
=======
        const userAnswer = this.state.answers[0].slice();
        const resultTab = this.state.checked[0];
        name(resultTab, userAnswer);
        this.state.delItems[0] = false;
        this.state.delItems[1] = true;
    } else if ( this.state.answerNumber == 2 ){
        const userAnswer = this.state.answers[1].slice();
        const resultTab = this.state.checked[1];
        name(resultTab, userAnswer);
        this.state.delItems[1] = false;
        this.state.delItems[2] = true;
    } else if ( this.state.answerNumber == 3 ){
        const userAnswer = this.state.answers[2].slice();
        const resultTab = this.state.checked[2];
        name(resultTab, userAnswer);
        this.state.delItems[2] = false;
        this.state.delItems[3] = true;
    } else if ( this.state.answerNumber == 4 ){
        const userAnswer = this.state.answers[3].slice();
        const resultTab = this.state.checked[3];
        name(resultTab, userAnswer);
        this.state.delItems[3] = false;
        this.state.delItems[4] = true;
    } else if ( this.state.answerNumber == 5 ){
        const userAnswer = this.state.answers[4].slice();
        const resultTab = this.state.checked[4];
        name(resultTab, userAnswer);
        this.state.delItems[4] = false;
        this.state.delItems[5] = true;
    } else if ( this.state.answerNumber == 6 ){
        const userAnswer = this.state.answers[5].slice();
        const resultTab = this.state.checked[5];
        name(resultTab, userAnswer);
        this.state.delItems[5] = false;
        this.state.delItems[6] = true;
    } else if ( this.state.answerNumber == 7 ){
        const userAnswer = this.state.answers[6].slice();
        const resultTab = this.state.checked[6];
        name(resultTab, userAnswer);
        this.state.delItems[6] = false;
        this.state.delItems[7] = true;
    } else if ( this.state.answerNumber == 8 ){
        const userAnswer = this.state.answers[7].slice();
        const resultTab = this.state.checked[7];
        name(resultTab, userAnswer);
        this.state.delItems[7] = false;
        this.state.delItems[8] = true;
    } else if ( this.state.answerNumber == 9 ){
        const userAnswer = this.state.answers[8].slice();
        const resultTab = this.state.checked[8];
        name(resultTab, userAnswer);
        this.state.delItems[8] = false;
        this.state.delItems[9] = true;
    } else if ( this.state.answerNumber == 10 ){
        const userAnswer = this.state.answers[9].slice();
        const resultTab = this.state.checked[9];
        name(resultTab, userAnswer);
        this.state.delItems[9] = false;
>>>>>>> 8c7019abe57f70579da583d771cf34332374e3ee

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
    // Przykład pętli zamiast długiego bloku if/else
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
