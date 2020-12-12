const stateGioHang = {
    gioHang: [
        // {
        //     maSP:1,
        //     tenSP : "IphoneX",
        //     hinhAnh:'./img/sp_iphoneX.png',
        //     giaBan:1000,
        //     soLuong:5
        // }
    ]
}
export const GioHangReducer = (state = stateGioHang, action) => {
    switch (action.type) {
        case 'THEM_GIO_HANG': {
            // Xu li cap nhat state.gioHang
            const gioHangCapNhat = [...state.gioHang]
            //Tim trong gio hang co san pham nao co ma === sp click hay khong
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === action.sanPhamClick.maSP);
            if (spGioHang) {
                //Tim thay => tang so luong
                spGioHang.soLuong += 1;
            } else {
                gioHangCapNhat.push(action.sanPhamClick)
            }
            //Cap nhat lai state
            state.gioHang = gioHangCapNhat;
            console.log(state);
            //immutable  tinh bat bien cua redux : gia tri state moi tra ve phai khac state cu
            return { ...state };

        }
        case 'XOA_GIO_HANG': {
            let gioHangCapNhat = [...state.gioHang]
            //Tim trong gio hang co san pham do khong
            //    let index = gioHangCapNhat.find(sp=>sp.maSP===action.maSPXoa)
            //    if(index !==-1){
            //        gioHangCapNhat.splice(index,1);
            //    }
            gioHangCapNhat = gioHangCapNhat.filter(sp => sp.maSP !== action.maSPXoa);
            //Cao nhat lai state
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
        case 'TANG_GIAM': {
            const gioHangCapNhat = [...state.gioHang];
            let spGioHang = gioHangCapNhat.find(sp => sp.maSP === action.maSPClick)
            if (spGioHang) {
                if (action.SoLuong === -1 && spGioHang.soLuong <= 1) {
                    return { ...state };
                }
                spGioHang.soLuong += action.SoLuong;
            }
            //    if(spGioHang.soLuong>0)
            state.gioHang = gioHangCapNhat;
            return { ...state };
        }
    }
    return state;
}