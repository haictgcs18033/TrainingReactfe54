import React, { Component } from 'react'
import { connect } from 'react-redux'
class SanPham extends Component {
    render() {
        console.log(this.props);
        let { sanPham } = this.props
        return (
            <div className="card text-left">

                <img className="card-img-top" src={sanPham.hinhAnh} height="350" alt />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success" onClick={()=>{
                        this.props.themGioHang(sanPham);
                    }}>Them gio hang</button>
                </div>
            </div>

        )
    }
}
const mapDispatchToProps = (dispatch) => {
    //dispatch la tham so tu redux tra ra ( no la 1 ham dung de gui gia tri len store)
    return {
        themGioHang : (spClick)=>{
            //Gui du lieu len redux
            // Buoc 1 : Tao action
            const action ={
                type:'THEM_GIO_HANG', // type thuoc tinh bat buoc
                sanPhamClick :{...spClick,soLuong:1}
                //thuoc tinh thu 2 la gia tri gui len redux 
            }

            dispatch(action)
            //Buoc 2 : su dung phuong thuc dispatch de dua action len redux (reducer)
            console.log('spClick',spClick);
        }
    }
}
// Ket noi component voi store
//Tham so 1 cua connect : la mapStateToProps (neu khong lay du lieu nao tu store ve thi de null)
//Tham so thu 2 cua connect : la mapDispatchToProps ham nay se tao ra props la function dua du lieu len store 
export default connect(null,mapDispatchToProps)(SanPham)
