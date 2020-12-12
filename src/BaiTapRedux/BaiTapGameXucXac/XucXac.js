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
     hienThiTongDiem=()=>{
         const tongDiem=this.props.mangXucXac.reduce((tongDiem,xucXac,index)=>{
               return tongDiem+=xucXac.diem
         },0)
         return tongDiem >10 ? `${tongDiem}-Xiu`:`${tongDiem}-Tai`
     }
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h1 className="display-4 text-primary">{this.hienThiTongDiem()}</h1>
                    </div>
                    <div className="col-4">
                        <button onClick={()=>{this.props.datCuoc(true)}} 
                        className="btn btn-success p-5 "><span className="display-4">Tai</span></button>
                    </div>
                    <div className="col-4 ">
                        {/* Cach di hinh khong tu file public ma tu file scr */}
                      {this.renderXucXac()}
                    </div>
                    <div className="col-4">
                        <button onClick={()=>{this.props.datCuoc(false)}} 
                        className="btn btn-danger p-5 "><span className="display-4">Xiu</span></button>
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
const mapDispatchToProps=dispatch=>{
    return{
     datCuoc: (datCuoc)=>{
         dispatch({
             type:'DAT_CUOC',
             datCuoc
         })
     }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(XucXac);
