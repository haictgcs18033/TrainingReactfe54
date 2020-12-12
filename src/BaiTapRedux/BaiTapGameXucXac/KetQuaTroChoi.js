import React, { Component } from 'react'
import { connect } from 'react-redux'

class KetQuaTroChoi extends Component {
    render() {
        return (
            <div className="container text-center">
              
                <h1 className="display-4"> Ban chon : <span className="display-4 text-success">
                    {this.props.datCuoc ? 'TAI' : 'XIU'}</span></h1>
                <h1 className="display-4"> So ban thang : <span className="display-4 text-danger">
                    {this.props.soBanThang}</span></h1>
                <h1 className="display-4"> So ban choi : <span className="display-4 text-warning">
                    {this.props.soBanChoi}</span></h1>
                    <button className="btn btn-success"
                    onClick={()=>{this.props.ketQua()}}>Play game</button>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        datCuoc: state.stateGameXucXac.datCuoc,
        soBanThang: state.stateGameXucXac.soBanThang,
        soBanChoi: state.stateGameXucXac.soBanChoi,
        diemXucXac:state.stateGameXucXac.diemXucXac,
    }
}
const mapDispatchToProps=dispatch=>{
    return{
      ketQua:()=>{
          dispatch({
              type:'KET_QUA'
          })
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(KetQuaTroChoi)
