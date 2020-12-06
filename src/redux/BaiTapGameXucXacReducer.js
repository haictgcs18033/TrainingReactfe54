const stateDefault ={
    datCuoc:true, //True tai , false xiu
    soBanThang:0,
    soBanChoi:0,
    mangXucXac: [
        {hinhAnh :'./img/video_19_game_xuc_xac/6.png',diem:6},
        {hinhAnh :'./img/video_19_game_xuc_xac/6.png',diem:6},
        {hinhAnh :'./img/video_19_game_xuc_xac/6.png',diem:6}
    ]
};

export const BaiTapGameXucXacReducer = (state=stateDefault,action)=>{
    return {...state};
}
