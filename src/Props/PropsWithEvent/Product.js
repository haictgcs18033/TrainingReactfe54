import React, { Component } from 'react'

export default class Product extends Component {
    render() {
        const{prop,onViewDetail,onAddToCart}=this.props;
        return (
            <div className="col-4" >
                <div className="card text-left">
                    <img className="card-img-top" src={prop.hinhAnh} height="300" alt />
                    <div className="card-body">
                        <h4 className="card-title">{prop.tenSP}</h4>
                        <button className="btn btn-success" onClick={() => onViewDetail(prop)}>Xem chi tiet</button>
                        <button className="btn btn-danger ml-3" onClick={()=>onAddToCart(prop)}>Them gio hang</button>
                    </div>
                </div>

            </div>

        )
    }
}
