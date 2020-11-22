import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        alert('Hello cybersoft front-end 54')
    }
    showInfo=(info)=>{
        alert(info);
    }
    render() {
        const title='super cybersoft';
        return (
            <div className="container">
                <h3>Handle Event</h3>
                {/* Xu li su kien cach 1 */}
                {/* Khong nen them dau () vao su kien onclick cua nut button */}
                <button onClick={this.showMess}>Click me</button>
                {/* Xu li su kien cach 2 */}
                <button onClick={() => {
                    alert(`Hello ${title} front-end 54`)
                }}>SHow message</button>
                {/* Xu li su kien cach 3 */}
                <button onClick={()=>{this.showInfo('hello fe54')}}>Show info</button>
                {/* Cach su dung ham bind - it dung */}
                <button onClick={this.showInfo.bind(this,'hello')}>Show info</button>
            </div>
        )
    }
}
