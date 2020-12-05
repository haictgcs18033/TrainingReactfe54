import React, { Component } from 'react'
import productList from "../data/ProductList.json"
import ModalSanPham from './ModalSanPham'
import Product from './Product'
import PropsWithEvent from './PropsWithEvent'


export default class ProductListEvent extends Component {
    state = {
        productDetail: productList[0],
        cart: [
         
        ]
    }
    renderProductList = () => {
        return productList.map((product, index) => {
            return <Product onViewDetail={this.viewDetail} onAddToCart={this.addToCart} prop={product} key={index}></Product>
        })

    }
    // renderProductList = () => {
    //     const arrProductList = this.productList.map((product, index) => {
    //         return <div className="col-4" key={index}>
    //             <div className="card text-left">
    //                 <img className="card-img-top" src="holder.js/100px180/" alt />
    //                 <div className="card-body">
    //                     <h4 className="card-title"></h4>
    //                     <p className="card-text"></p>
    //                 </div>
    //             </div>

    //         </div>
    //     })
    //     arrProductList
    // }
    viewDetail = (product) => {
        this.setState({
            productDetail: product
        })

    }
    addToCart = (product) => {
        const productUpdate = { ...product, soLuong: 1 };
        const index = this.state.cart.findIndex((product) => product.maSP ===
            productUpdate.maSP
        );
        if (index !== -1) {
            const newCart = [...this.state.cart];
            newCart[index].soLuong += 1;
            this.setState({
                cart: newCart
            });
        } else {
            const productUpdate = { ...product, soLuong: 1 };
            this.setState({
                cart: [...this.state.cart, productUpdate]
            })
        }
    };
    // Su kien xoa gio hang tai noi chua state gio hang
    deletedItem = (maSP) => {
        var gioHangDuocXoa = this.state.cart.filter(sp => sp.maSP !== maSP);
        this.setState(
            {
                cart: gioHangDuocXoa
            }
        )
    }
    // su kien tang giam
    tangGiam = (maSP, tangGiam) => {
        let gioHangCapNhat = [...this.state.cart];
        let index = gioHangCapNhat.findIndex(sp => sp.maSP === maSP);
        if (tangGiam) {
            gioHangCapNhat[index].soLuong += 1;
        } else {
            if (gioHangCapNhat[index].soLuong > 1) {
                gioHangCapNhat[index].soLuong -= 1;
            }
        }
        this.setState(
            {
                cart: gioHangCapNhat
            }
        )
    }
  
    render() {
      
        const { productDetail, cart } = this.state;
      
        return (
            <>
                <ModalSanPham cart={cart} deleteItem={this.deletedItem} tangGiam={this.tangGiam} />

                <div className="container">

                    <div className="row ">
                        {this.renderProductList()}
                    </div>
                    <div className="row mt-3">
                        <div className="col-6">
                            <h5>{productDetail.tenSP}</h5>
                            <img src={productDetail.hinhAnh} width="300"></img>
                        </div>
                        <div className="col-6">
                            <h5>Thong so ky thuat</h5>
                            <table className="table">
                                <tr>
                                    <th>Man hinh</th>
                                    <td>{productDetail.manHinh}</td>
                                </tr>
                                <tr>
                                    <th>He dieu hanh</th>
                                    <td>{productDetail.heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <th>Camera truoc</th>
                                    <td>{productDetail.cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <th>Camera sau</th>
                                    <td>{productDetail.cameraSau}</td>
                                </tr>
                                <tr>
                                    <th>Ram</th>
                                    <td>{productDetail.ram}</td>
                                </tr>
                                <tr>
                                    <th>Rom</th>
                                    <td>{productDetail.rom}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        )

        // <div className="container">
        //     return <div className="row">
        //         {/* {this.renderProductList()} */}
        //     </div>
        // </div>

    }
}
