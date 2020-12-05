import React, { Component } from 'react'

export default class ModalSanPham extends Component {
    render() {
      
        
        return (
            <div>
                {/* Modal */}
                <button className="btn btn-outline-success mb-3" data-toggle="modal" data-target="#modelId">
                       Gio Hang 
                </button>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal title</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table">
                                    <tr>
                                        <th>Ma SP</th>
                                        <th>Hinh anh</th>
                                        <th>Ten san pham</th>
                                        <th>So luong</th>
                                        <th>Don gia</th>
                                        <th>Thanh tien</th>
                                        <th></th>
                                    </tr>
                                    {this.props.cart.map((product, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{product.maSP}</td>
                                                <td >
                                                    <img src={product.hinhAnh} width="50" height="50"></img>
                                                </td>
                                                <td>{product.tenSP}</td>
                                                <td>
                                                    <button onClick={() => this.props.tangGiam(product.maSP, true)}>Xu li tang</button>
                                                    {product.soLuong}
                                                    <button onClick={() => this.props.tangGiam(product.maSP, false)}>Xu li giam</button>
                                                </td>
                                                <td>{product.giaBan}</td>
                                                <td>{product.soLuong * product.giaBan}</td>
                                                <td><button onClick={() => { this.props.deleteItem(product.maSP) }}>Xoa</button></td>
                                            </tr>
                                        )
                                    }
                                    )}
                                </table>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
