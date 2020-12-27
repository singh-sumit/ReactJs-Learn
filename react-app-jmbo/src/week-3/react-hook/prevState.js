import React,{Component} from 'react';

export default class CounterApp extends Component{
    constructor(props){
        super(props);
        this.state ={
            counter : 0
        }
    }
    handleIncrement=()=>{
        this.setState(prevstate=>({
            counter : prevstate.counter +1
        }))
    }
    render(){
        return (
            <div>
                <p>Counter Value :{this.state.counter}</p>
                <button onClick={this.handleIncrement}>Click</button>
            </div>
        )
    }
}