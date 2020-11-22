import React, { Component } from 'react'

export default class DemoState extends Component {
    // State : La thuoc tinh co san cua component => dung de quan li nguon du lieu thay doi tren giao dien khi nguoi dung thao tac(click,change,blur...);
state={
    isLogin:false
}
    isLogin=false;
userName='Hai';
renderContent =()=>{
    if(this.state.isLogin){
        return <p>Hello ! {this.userName}</p>
    }
    // ham trong onClick chi mang tinh chat thay doi gia tri chu khong mang tinh chat render.
    return <button onClick={()=>{this.handleLogin()}}className="btn btn-success">Dang nhap</button>
}
handleLogin=()=>{
    // Khong duoc thay doi state truc tiep ma phai thong qua phuong thuc this.setState
    // setState():la phuong thuc co san cua lop doi tuong COmponent => dung de thay doi gia tri trong this.state dong thoi goi lai ham render
//    this.state.isLogin=true;
//    console.log('isLogin',this.state.isLogin);
// Cach 1
// const newState={
//     isLogin:true
// }
// this.setState(newState);
// Cach 2 :
this.setState({
    isLogin:true
});
}
    render() {
        return (
            <div className="container">
                <h3>If else react</h3>
                {/* Cach 1 */}
                {/* Cach chi tiet */}
        {/* {this.isLogin===true ? <p>Hello {this.userName}</p>:<button>Dang nhap</button>} */}
        {/* Cach ngan gon */}
        {/* Neu dung se render phan ben trai dau hai cham neu sai se render ra phan ben phai dau hai cham */}
        {/* {this.isLogin ? <p>Hello {this.userName}</p>:<button>Dang nhap</button>} */}
        {/* Cach 2 */}
        {this.renderContent()}
            </div>
        )
    }
}
