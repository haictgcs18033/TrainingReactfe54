import React, { Component } from 'react'
import ProductRFC from './ProductRFC'


export default class DemoProp extends Component {
    render() {
        return (
           <div className="container">
               <h3 className="text-center">Danh sach san pham</h3>
               <div className="row">
                   <div className="col-3">
                       <ProductRFC name="iphone" gia="1000$"></ProductRFC>
                   </div>
                   <div className="col-3">
                       <ProductRFC name="samsung"  gia="1100$"></ProductRFC>
                   </div>
                   <div className="col-3">
                       <ProductRFC name="sony"  gia="1200$"></ProductRFC>
                   </div>
                   <div className="col-3">
                       <ProductRFC name="xiaomi"  gia="1300$"></ProductRFC>
                   </div>
               </div>
           </div>
        )
    }
}
