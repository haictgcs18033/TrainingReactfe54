import React, { Component } from 'react'
import SanPham from './SanPham'
import dsSanPham from '../../Props/data/ProductList.json'

export default class DanhSachSanPham extends Component {
    renderSanPham =()=>{
        return dsSanPham.map((sp, index) => {
            return (
                <div className="col-4" key={index}>
                    <SanPham sanPham={sp}></SanPham>
                </div>
            )
        })
    } 


render() {
    return (
        <div className="container">
            <h1 className="text-center">Danh sach san pham</h1>
            <div className="row">
                {/* <div className="col-4">
                    <SanPham></SanPham>
                </div>
                <div className="col-4">
                    <SanPham></SanPham>
                </div>
                <div className="col-4">
                    <SanPham></SanPham>
                </div> */}
                {this.renderSanPham()}
            </div>
        </div>
    )
}
}
