import React from 'react';

import NumberKey from '../NumberKey';
import Total from '../Total';
import Add from '../Add';
import Equals from '../Equals';

class Calculator extends React.Component {
    state = {
        total: 0,
        runningNumber: []
    }

    add = () => {
        this.setState({ 
            total: parseInt(this.state.runningNumber.join('')),
            runningNumber: []
        })
    }

    equals = () => {
        this.setState({
            total: this.state.total + parseInt(this.state.runningNumber.join(''))
        })
    }

    updateRunningNumber = (number) => {
        const runningNumber = [...this.state.runningNumber];
        runningNumber.push(number);
        this.setState({ runningNumber });
    }

    render() {
        const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

        return(
            <div>
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