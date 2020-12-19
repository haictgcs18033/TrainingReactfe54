import React, { Component } from 'react'

import PureComponentChild from './PureComponentChild'

export default class DemoPure extends Component {
    state={
        like:1,
        likeNumber:{
            number:1
        }
    }
    //Su dung pure component thi co the luu tru du lieu duoi dang thuoc tinh va phai truyen prop con su dung component thi  luu tru object ben trong state
    render() {
        return (
            <div className="container">
                <h3>{this.state.likeNumber.number} like</h3>
                <button onClick={()=>{
                    const newLikeNumber=this.state.likeNumber;
                    newLikeNumber.number+=1
                    this.setState({
                       likeNumber:{...newLikeNumber}
                    },()=>{
                        console.log(this.state.likeNumber);
                    }) 
                }}>Like</button>
               
                <PureComponentChild likeNumber ={this.state.likeNumber}></PureComponentChild>
            </div>
        )
    }
}
