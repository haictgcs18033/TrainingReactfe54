import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {
    state = {
        imgSrc: './Bai tap chon mau xe/img/car/products/red-car.jpg' //Gia tri mac dinh cua state
    }
    changeColor=(newColor)=>{
        this.setState({
            imgSrc:`./Bai tap chon mau xe/img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6">
                        {/* Hinh anh cua xe */}
                        {/* Trong react de lay duoc hinh can tuong tuong minh dang o tap tin public roi dan vao tung file */}
                        <img className="w-100" src={this.state.imgSrc}></img>
                    </div>
                    <div className="col-6">
                        {/* Button chon mau xe */}
                        <div className="card text-white">

                            <div className="card-header bg-dark text-white">Exterior color</div>
                            <div className="card-body">
                                <div class="row p-2 border border-danger">
                                    <div className="col-2">
                                        <img style={{ cursor: 'pointer' }} onClick={() => {
                                           this.changeColor('black');
                                        }} src="./Bai tap chon mau xe/img/car/icons/icon-black.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10 text-dark">
                                        <h3 className>Black color</h3>
                                    </div>
                                </div>
                                <div class="row mt-3  p-2 border border-danger">
                                    <div className="col-2">
                                        <img style={{cursor:'pointer'}} onClick={()=>{
                                           this.changeColor('silver');
                                        }}
                                        src="./Bai tap chon mau xe/img/car/icons/icon-silver.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10 text-dark">
                                        <h3 className>Silver color</h3>
                                    </div>
                                </div>
                                <div class="row mt-3 p-2 border border-danger">
                                    <div className="col-2">
                                        <img style={{cursor:'pointer'}} onClick={()=>{
                                           this.changeColor('red');
                                        }}
                                        src="./Bai tap chon mau xe/img/car/icons/icon-red.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10 text-dark">
                                        <h3 className>Red color</h3>
                                    </div>
                                </div>
                                <div class="row mt-3 p-2 border border-danger">
                                    <div className="col-2">
                                        <img style={{cursor:'pointer'}} onClick={()=>{
                                           this.changeColor('steel');
                                        }}
                                        src="./Bai tap chon mau xe/img/car/icons/icon-steel.jpg" className="w-100"></img>
                                    </div>
                                    <div className="col-10 text-dark">
                                        <h3 className>Steel color</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
