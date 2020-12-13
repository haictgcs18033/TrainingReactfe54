// File quan li tat ca cac state cua ung dung (Thay vi dat tai component ta dat state tai store)
import { combineReducers, createStore } from 'redux';

import { GioHangReducer } from '../redux/GioHangReducer'
import { BaiTapGameXucXacReducer } from './BaiTapGameXucXacReducer';
import { QuanLiSinhVienReducer } from './QuanLiSinhVienReducer';

const rootReducer = combineReducers({
    //Cac state sau nay khai bao o day
    // stateGioHang: (state = stateGioHang, action) => {
    //     return state
    // }
    stateGioHang: GioHangReducer,
    stateGameXucXac: BaiTapGameXucXacReducer,
    QuanLiSinhVienReducer
})

//Tao ra store chua rootReducer (xem nhu state tong cua ung dung)
export const store = createStore(rootReducer);

