import React from 'react'

export default function ProductRFC(props) {
    // Su dung prop phai them tham so props vao rfc component va muon su dung phai khai bao nhu sau {props.giatrithuoctinh trong component cha truyen sang component con}
//    Boc tach phan tu 
let{name,gia}=props;
    return (
        <div className="card text-left ">
            <img className="card-img-top " src="https://picsum.photos/200/200" alt />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{gia}</p>
            </div>
        </div>

    )
}
