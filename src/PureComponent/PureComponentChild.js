import React, { Component ,PureComponent} from 'react'

export default class PureComponentChild extends Component {
    
    static getDerivedStateFromProps(newProps,currentState){
        console.log('getDerivedStateFromProps');
        return currentState;
    }
    render() {
        console.log('render comment');
        return (
          
            <div>
                <p>{this.props.likeNumber.number}</p>
                <div className="bg-dark p-5 mt-2">
                    <p className="text-primary font-weight-bold">HaiCao</p>
                    <p className="text-light">like</p>
                </div>
            </div>
        )
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
}
