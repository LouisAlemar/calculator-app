import React from 'react';
import style from './Calculator.module.scss';

import NumberKey from '../NumberKey';
import Total from '../Total';
import Add from '../Add';
import Equals from '../Equals';

class Calculator extends React.Component {
    state = {
        total: '',
        runningNumber: [],
        method: ''
    }

    add = (number) => {
        this.setState({ 
            total: this.state.runningNumber.join(''),
            runningNumber: [],
            method: '+'
        })

        console.log(this.state)
    }

    equals = () => {
        switch(this.state.method){
            case '+': 
                this.setState({
                    total: this.state.total + this.state.runningNumber.join('')
                })
                break;

            default:
                break;
        }
    }

    updateRunningNumber = (number) => {
        const runningNumber = [...this.state.runningNumber];
        runningNumber.push(number);

        console.log(typeof this.state.total);

        if(this.state.total !== '0'){
            this.setState({ 
                total: this.state.total.concat(number),
                runningNumber: runningNumber
            });
        } else {
            this.setState({
                total: '0',
                runningNumber: runningNumber
            });
        }
    }

    render() {
        const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        return(
            <div className={style.divContainer}>
                <Total amount={this.state.total}/>
                {
                    numberArray.map((element, index) => {
                        return <NumberKey 
                            number={element} 
                            key={index}
                            click={() => { this.updateRunningNumber(element)}}
                        />
                    })
                }
                <Add click={this.add}/>
                <Equals click={this.equals}/>
            </div>
        );
    }
}

export default Calculator;