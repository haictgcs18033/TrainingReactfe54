import React from 'react'

export default function DataBinding() {
    // Binding bien (doi tuong , cac bien co ban)
    const title = 'cybersoft';
    const imgSrc = 'https://picsum.photos/200/200';
    const sinhVien = {
        maSV: '0001',
        tenSinhVien: 'Nguyen Van An',
        hinhAnh: 'https://picsum.photos/200'
    }
    // Binding ham
    const renderImg = () => {
        // Gia tri phai tra ve 1 chuoi , so , jsx (1 doan code html duoc bao phu boi 1 the)
        return <div>
            <h3>Hinh anh</h3>
            <img src={sinhVien.hinhAnh} width="200" height="200"></img>
        </div>
    }
    return (
        <div className="container">
            <h3>Databinding</h3>
            <p id="title" className="display-4">Tieu de : {title}</p>
            <img src={imgSrc} width="200" height="200" alt="123.jpg" />
            <input className="form-control w-25" value={title}></input>
            <hr />
            <h3>Thong tin sinh vien</h3>
           
                <div className="card bg-primary " style={{ width: 200, height: 200 }}>
                    <img className="card-img-top" src={sinhVien.hinhAnh} alt />
                    <div className="card-body">
                        <h4 className="card-title">{sinhVien.tenSinhVien}</h4>
                        <p className="card-text">{sinhVien.maSV}</p>
                    </div>
                </div>
                <hr />
                <div className="mt-5">
                    {renderImg()}
                </div>
           
        </div>
    )
}
