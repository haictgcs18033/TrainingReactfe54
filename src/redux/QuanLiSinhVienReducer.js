const stateDefault = {
    mangSinhVien: [
        { maSinhVien: '1', tenSinhVien: 'Nguyen Van A', email: 'nguyenvana@gmail.com', soDienThoai: 123456 },
        { maSinhVien: '2', tenSinhVien: 'Nguyen Van B', email: 'nguyenvanb@gmail.com', soDienThoai: 12121212 },
    ],
    sinhVienSua: {
        maSinhVien: '1',
        tenSinhVien: 'a',
        email: '',
        soDienThoai: ''
    },
    sinhVienRedux: {
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
}
export const QuanLiSinhVienReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'THEM_SINH_VIEN': {
            // const mangSinhVienCapNhat = [...state.mangSinhVien, action.sinhVien];
            //Cach thong thuong : mangSinhVienCapNhat.push(action.sinhVien); thi nguoi ta khai vao thang vao trong buoc sao chep mang de lam code ngan gon hon

            //Tuong tu nhu tren ta cung co the su dung trong buoc cap nhat lai state (Cach thong thuong : state.mangSinhVien=mangSinhVienCapNhat ; return {...state})
            //Cach rut gon
            // return { ...state, mangSinhVien: mangSinhVienCapNhat }
            const mangSinhVienCapNhat = [...state.mangSinhVien, state.sinhVienRedux.values];
            return { ...state, mangSinhVien: mangSinhVienCapNhat }
        }
        case 'CAP_NHAT_SINH_VIEN': {
            const mangSinhVienCapNhat = [...state.mangSinhVien];
            let svUpdate = mangSinhVienCapNhat.find(sv => sv.maSinhVien === state.sinhVienRedux.values.maSinhVien);
            if (svUpdate) {
                svUpdate.tenSinhVien = state.sinhVienRedux.values.tenSinhVien;
                svUpdate.email=state.sinhVienRedux.values.email;
                svUpdate.soDienThoai=state.sinhVienRedux.values.soDienThoai;
            }
           
            state.mangSinhVien = mangSinhVienCapNhat;
            return { ...state };
        }
        case 'SUA_SINH_VIEN': {
            //Cap nhat lai state
            state.sinhVienSua = { ...action.sinhVienSua };
            //Cap nhat lai state cua formredux
            let newSinhVienRedux = { ...state.sinhVienRedux };
            newSinhVienRedux.values = { ...action.sinhVienSua };

            return { ...state, sinhVienRedux: newSinhVienRedux };
        }
        case 'SET_SV_REDUX': {
            state.sinhVienRedux = action.sinhVienRedux;
            return { ...state }
        }

    }
    return { ...state }
}