import React, { Component } from 'react'
import {connect} from 'react-redux'
 class TableSinhVien extends Component {
    renderSinhVien=()=>{
           return this.props.mangSinhVien.map((sv,index)=>{
               return <tr key={index}>
                   <td>{sv.maSinhVien}</td>
                   <td>{sv.tenSinhVien}</td>
                   <td>{sv.email}</td>
                   <td>{sv.soDienThoai}</td>
                   <td><button className="btn btn-danger">Xoa</button></td>
                   <td><button className="btn btn-primary"
                   onClick={()=>{
                       this.props.dispatch({
                           type:'SUA_SINH_VIEN',
                           sinhVienSua:sv
                       })
                   }}>Sua</button></td>
               </tr>
           })
    }
    render() {
        return (
            <div>
                <table className="table mt-4 table-striped">
                    <thead className=" bg-primary text-light">
                        <tr>
                            <th>Ma sinh vien</th>
                            <th>Ten sinh vien</th>
                            <th>Email</th>
                            <th>So dien thoai</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}
// Cach viet van tat hi chi co mot lenh return duy nhat
//Vi du : ()=>{return{}} <=> ()=>({})
//Vi du : ()=>{return <div></div>} <=>()=>(<div></div>)
const mapStateToProps=state=>({
    
        mangSinhVien:state.QuanLiSinhVienReducer.mangSinhVien
    
})

export default connect(mapStateToProps)(TableSinhVien)