import React, { Component } from 'react'

import { connect } from 'react-redux'

class GioHang extends Component {
    render() {

        return (
            <div>
                <span className="text-center display-4">Gio Hang</span>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Ma sp</th>
                            <th>Ten sp</th>
                            <th>Hinh anh</th>
                            <th>So luong</th>
                            <th>Don gia</th>
                            <th>Thanh tien</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.gioHang.map((spGH, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{spGH.maSP}</td>
                                        <td>{spGH.tenSP}</td>
                                        <td>
                                            <img src={spGH.hinhAnh} width="50" height="50"></img>
                                        </td>
                                        <td>
                                            <button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,-1)}}>Giam so luong</button>
                                            {spGH.soLuong}
                                            <button onClick={()=>{this.props.tangGiamSoLuong(spGH.maSP,1)}}>Tang so Luong</button>
                                        </td>
                                        <td>{spGH.giaBan}</td>
                                        <td>{spGH.soLuong * spGH.giaBan}</td>
                                        <td><button className="btn btn-danger" onClick={() => this.props.xoaGioHang(spGH.maSP)}>Xoa</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}
//Dinh nghia ham lay state tu redux ve bien thanh props cua react Component
const mapStateToProps = (state) => {
    //state dai dien cho rootReducer
    return {
        gioHang: state.stateGioHang.gioHang
    }
}
// Ham tao ra 1 prop gui len redux store ( tat ca reducer)
const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            const action = {
                //Dua du lieu len redux store
                type: 'XOA_GIO_HANG',
                maSPXoa: maSPClick

            }
            //Dung ham dispatch gui action len reducer
            dispatch(action)
        },
        tangGiamSoLuong: (maSP,soLuong) => {
            const action = {
                type: 'TANG_GIAM',
                maSPClick: maSP,
                SoLuong:soLuong
            }
            dispatch(action);
        }
    }
}

// Ket noi react component voi redux store tao ra 1 component moi export ra ngoaif
export default connect(mapStateToProps, mapDispatchToProps)(GioHang)
