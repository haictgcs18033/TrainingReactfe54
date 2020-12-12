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
    switch(action.type){
        case 'DAT_CUOC':{
            state.datCuoc=action.datCuoc;
            return{...state}
        }
        case 'KET_QUA':{
            let mangXucXacNgauNhien=[];
            for(let i=0;i<state.mangXucXac.length;i++){
                let soNgauNhien=Math.floor(Math.random()*6)+1;
                let xucXacNgauNhien=   {hinhAnh :`./img/video_19_game_xuc_xac/${soNgauNhien}.png`,diem:soNgauNhien}
                mangXucXacNgauNhien.push(xucXacNgauNhien)
            }
            state.mangXucXac=mangXucXacNgauNhien;
            state.soBanChoi+=1;
            let tongSoDiem=mangXucXacNgauNhien.reduce((tongSoDiem,xucxac,index)=>{
                return tongSoDiem+=xucxac.diem
            },0);
           
            if((tongSoDiem<=11 && state.datCuoc===true) || (tongSoDiem>11 && state.datCuoc===false)){
                 state.soBanThang+=1;
            }
            return{...state};
        }
    }
    return {...state};
}
