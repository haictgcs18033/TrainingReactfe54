import React, { Component } from 'react'
import {connect} from 'react-redux'
 class XucXac extends Component {
     renderXucXac=()=>{
         return this.props.mangXucXac.map((xucxac,index)=>{
             return (
                 <img key={index} src={xucxac.hinhAnh}width="50" height="50"></img>
             )
         })
     }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btn btn-danger p-5 "><span className="display-4">Tai</span></button>
                    </div>
                    <div className="col-4 ">
                        {/* Cach di hinh khong tu file public ma tu file scr */}
                      {this.renderXucXac()}
                    </div>
                    <div className="col-4">
                        <button className="btn btn-danger p-5 "><span className="display-4">Xiu</span></button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        mangXucXac:state.stateGameXucXac.mangXucXac
    }
}
export default connect(mapStateToProps)(XucXac);
