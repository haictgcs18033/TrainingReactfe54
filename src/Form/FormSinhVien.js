import React, { Component } from 'react'
import { connect } from 'react-redux'
class FormSinhVien extends Component {
    state = {
        values: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        },
        errors: {
            maSinhVien: '',
            tenSinhVien: '',
            email: '',
            soDienThoai: ''
        }

    }

    handleChangeInput = (event) => {
        //event đại diện cho sự kiện xảy ra trên thẻ
        let { value, name } = event.target;
        let typeInput = event.target.getAttribute('typeInput') //attribute là thuộc tính người dùng tự thêm trên thẻ
        console.log(typeInput);

        //Xử lý cập nhật values
        const newValues = { ...this.state.values }; //Lưu giữ lại các giá trị trước nd đã nhập
        newValues[name] = value; //Gán giá trị mới cho thuộc tính đang nhập

        //Xử lý errors 
        const newErrors = { ...this.state.errors }; //Giữ lại các giá trị errors cũ
        //Nếu value của trường đang nhập bị rổng thì gán lỗi cho trường đó
        newErrors[name] = value.trim() === '' ? name + ' không được bỏ trống !' : '';
        if (typeInput === 'email') {
            const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (!regexEmail.test(value)) {
                newErrors[name] = name + ' không đúng định dạng !';
            }
        }

        if (typeInput === 'phone') {
            const regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                newErrors[name] = name + ' không đúng định dạng !';
            }
        }

        //setState lại 
        this.setState({
            values: newValues,
            errors: newErrors
        }, () => {
            console.log(this.state)
        })


    }
    handleSubmit = (event) => {
        event.preventDefault(); //Chặn sự kiện submit của browser khi người dùng submit = reactform
        //Kiểm tra dữ liệu người dùng hợp lệ => submit
        let valid = true;
        //Kiểm tra tất cả các thuộc tính trong this.state.values 
        for (let key in this.state.values) {
            if (this.state.values[key].trim() === '') {
                valid = false;
            }
        }
        //Kiểm tra tất cả các thuộc tính của this.state.errors 
        for (let key in this.state.errors) {
            if (this.state.errors[key] !== '') {
                valid = false;
            }
        }
        if (!valid) {
            alert('Dữ liệu không hợp lệ !');
            return;
        }
        //Xử lý submit => api hoặc redux (dispatch) ...
        this.props.dispatch({
            type: 'THEM_SINH_VIEN',
            sinhVien: this.state.values
        })
    }
    componentWillReceiveProps(newProps){
        //Lay props tu redux gan vao state cua component
        this.setState({
            values:newProps.sinhVienSua
        });
        //Sau do binding gia tri nay len giao dien tu state
    }
    render() {
        //Boc tach phan tu es6  tu this.props.sinhVienSua
        let { maSinhVien, tenSinhVien, email, soDienThoai } = this.state.values;
        return (
            <div>
                <form className="card text-left" onSubmit={this.handleSubmit}>
                    <div className="card-header bg-dark text-white text-center font-weight-bold">Thong tin sinh vien</div>

                    <div className="card-body">
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Ma sinh vien</h3>
                                    <input className="form-control" name="maSinhVien" onChange={this.handleChangeInput}
                                        value={maSinhVien} />
                                    <p className="text-danger">{this.state.errors.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <h3>Ten sinh vien</h3>
                                    <input className="form-control" name="tenSinhVien" onChange={this.handleChangeInput}
                                        value={tenSinhVien} />
                                    <p className="text-danger">{this.state.errors.tenSinhVien}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <h3>Email</h3>
                                    <input typeInput="email" className="form-control" name="email" onChange={this.handleChangeInput}
                                        value={email} />
                                    <p className="text-danger">{this.state.errors.email}</p>
                                </div>
                                <div className="form-group">
                                    <h3>So dien thoai</h3>
                                    <input typeInput="phone" className="form-control" name="soDienThoai" onChange={this.handleChangeInput}
                                        value={soDienThoai} />
                                    <p className="text-danger">{this.state.errors.soDienThoai}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="card-footer">
                        <button className="btn btn-success">Them Sinh Vien</button>
                        <button className="btn btn-warning" type="button"
                        onClick={()=>{
                            
                        }}>Cap nhat sinh vien</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        sinhVienSua: state.QuanLiSinhVienReducer.sinhVienSua
    }
}
export default connect(mapStateToProps)(FormSinhVien)