import React, { Component } from 'react'

export default class DataBindingClassComponent extends Component {
    sinhVien = {
        ma: '0001',
        ten: 'Nguyen Van A',
        hinhAnh: 'https://picsum.photos/200'
    }
    renderPicture= () =>{
       return <img src={this.sinhVien.hinhAnh} width="300" height="300" alt="321"/>
    }
    render() {
        const title = "Front end";
        const renderContent = () => {
            return <p class="text-danger">Arrow Function</p>
        }
        return (
            <div className="container">
                <h3>React binding class component</h3>
                <p>Tieu de : {title}</p>
                <p>Binding Function :</p>
                {renderContent()}
                <h3>Thong tin sinh vien</h3>
            {/* Bien ton tai trong phuong thuc render khi rang buoc du lieu khong can con tro this*/}
                {/*Nhung bien va phuong thuc nam ngoai ham render() phai dung con tro this */}
                <ul>
                    <li>Ma sinh vien:{this.sinhVien.ma}</li>
                    <li>Ten sinh vien :{this.sinhVien.ten}</li>
                    <li><img src={this.sinhVien.hinhAnh} width="200" height="200"></img></li>
                    <li>{this.renderPicture()}</li>
                </ul>
            </div>
        )
    }
}
