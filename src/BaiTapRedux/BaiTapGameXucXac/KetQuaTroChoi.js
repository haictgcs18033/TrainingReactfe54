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
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        datCuoc: state.stateGameXucXac.datCuoc,
        soBanThang: state.stateGameXucXac.soBanThang,
        soBanChoi: state.stateGameXucXac.soBanChoi
    }
}
export default connect(mapStateToProps)(KetQuaTroChoi)
