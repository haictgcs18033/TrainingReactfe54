import React, { Component } from 'react'

export default class FormSinhVien extends Component {
    state = {
        value:{
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        },
        errors:{
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        }  
    }

    handleChangeInput=(event)=>{
        //event dai dien cho su kien xay ra tren the 
        let {value,name} = event.target;
        let typeInput = event.target.getAttribute('typeInput')//attribute la thuoc tinh nguoi dung tu them tren the
        console.log(typeInput);
        // this.setState({
        //     [name]:value
            // maSinhVien:value,
            // tenSinhVien:value
        // },()=>{
        //     console.log(this.state);
        // })
        //Xu li cap nhat value
        const newValues={...this.state.values};//luu giu cac gia tri truoc noi dung da nhap
        //Gan gia tri moi cho thuoc tinh dang nhap
        newValues[name]=value;
        //Xu li loi
        const newErrors={...this.state.errors};//Giu lai ca gia tri error cu
        //Neu value cua truong dang nhap bi rong thi gan loi cho truong do
        newErrors[name]=value.trim() === '' ?  name + ' Khong duoc bo trong !' : '';
        if(typeInput=== 'email'){
            const regexEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(value)){
                newErrors[name]=name +'Khong dung dinh dang';
            }
        }
        if(typeInput==='phone'){
            const regexNumber=/^[0-9]+$/
            if(!regexNumber.test(value)){
                newErrors[name]=name + 'Khong dung dinh dang ';
            }
        }
        //satState lai
        this.setState({
            values:newValues,
            errors:newErrors
        },()=>{
            console.log(this.state);
        })
    }
    handleSubmit = (event)=>{
        event.preventDefault();//Chan su kien submit cua browser khi nguoi dung submit=react form
        //Kiem tra du lieu nguoi dung hop le =>submit
        let valid =true;
        //Kiem tra tat ca cac thuoc tinh trong this.state.values
        for(let key in this.state.values){
            if(this.state.value[key].trim()===''){
                valid=false;
            }
        }
        //Kiem tra tat ca cac thuoc tinh cua this.state.errors
        for(let key in this.state.errors){
            if(this.state.errors[key]!==''){
                valid=false;
            }
        }
        if(!valid){
            alert ('Du lieu khong hop le !');
            return
        }
        //Xu li submit => api hoac redux (dispatch)...
    }
    render() {
        return (
            <div>
                <form className="card text-left" onSubmit={this.handleSubmit}>
                    <div className="card-header bg-dark text-white text-center font-weight-bold">Thong tin sinh vien</div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Ma sinh vien</h3>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput} />
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <h3>Ten sinh vien</h3>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput}/>
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Email</h3>
                                    <input typeInput="email" className="form-control" name="email" onChange={this.handleChangeInput}/>
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <h3>So dien thoai</h3>
                                    <input typeInput="phone" className="form-control" name="soDienThoai"  onChange={this.handleChangeInput}/>
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success">Them Sinh Vien</button>
                    </div>
                </form>
            </div>
        )
    }
}
