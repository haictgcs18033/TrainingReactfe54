import React, { Component } from 'react'

export default class ProductRCC extends Component {
    render() {
        // this.props: la thuoc tinh co san cua react class component dung de nhan gia tri tu component cha truyen vao
        // this.props thuoc tinh khong duoc gan lai gia tri moi
        // this.props.sanPham={};
        let {sanPham}=this.props;
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={ sanPham.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.tenSP}</h4>
                        <p className="card-text">Body</p>
                    </div>
                </div>
            </div>
        )
    }
}
