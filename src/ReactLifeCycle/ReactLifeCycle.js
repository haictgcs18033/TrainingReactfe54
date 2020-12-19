import React, { Component } from 'react'
import ChildComponentLifeCycle from './ChildComponentLifeCycle';

export default class ReactLifeCycle extends Component {
    //Lifecycle la cac ham co san cua react
    constructor (props){
      super(props);
      this.state={
          number:1
      }
      console.log('constructor');
    }
    static getDerivedStateFromProps (){
        console.log('getDerivedStateFromProps');
        return null
    }
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    render() {
         console.log('render');
        return (
            <div className="container">
                <h1>{this.state.number}</h1>
               
               <button className="btn btn-success" onClick={()=>{
                   this.setState({
                       number:this.state.number+1
                   })
               }}>+</button>
               {this.state.number<2 ?  <ChildComponentLifeCycle></ChildComponentLifeCycle> : ''} 
            </div>
        )
    }
  
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}
