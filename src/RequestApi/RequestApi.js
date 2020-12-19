import React, { Component } from 'react'
import Axios from 'axios'
export default class RequestApi extends Component {
    state = {
        mangPhim: [

        ]
    }
    renderPhim = async () => {
        //Click vao nut load danh sach phim =>goi api
        // const promise = Axios({
        //     url: `https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01`,
        //     method: 'GET'
        // });
        // promise.then(res => {
        //     this.setState({
        //         mangPhim: res.data
        //     })
        // })
        let result = await Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01`,
            method: 'GET'
        });
        this.setState({
            mangPhim: result.data
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.mangPhim.map((phim, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <div className="card text-left">
                                    <img className="card-img-top" src={phim.hinhAnh} alt />
                                    <div className="card-body">
                                        <h4 className="card-title">{phim.tenPhim}</h4>
                                        <p className="card-text">{phim.moTa}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    componentDidMount() {
        //Goi api tai componentDidMount
        this.renderPhim();
    }
}
