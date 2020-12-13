import React, { Component } from 'react'

export default class ChildComponentLifeCycle extends Component {
    timeout=setInterval(() => {
        console.log(1);
    }, 1000);
    constructor(props){
        super(props);
        this.state={

        }
        console.log('child constructor');
    }
    static getDerivedStateFromProps(){
        console.log('child getDerivedStateFromProps');
    }
    render() {
        console.log('child render');
        return (
            <div>
                child component
            </div>
        )
    }
    componentDidMount(){
        console.log('child componentDidMount');
    }
    componentDidUpdate(){
        console.log('child componentDidUpdate');
    }
    componentWillUnmount(){
        clearInterval(this.timeout)
        console.log('child componentWillUnmount');
    }
}
