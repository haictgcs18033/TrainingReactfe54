import React, { Component } from 'react'
import Product from '../Components/BaiTapLayout/Product'

export default class RenderWithMap extends Component {
    products = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'iphone X', price: 2000 },
        { id: 3, name: 'iphone XS', price: 3000 }
    ]
    // renderProduct = () => {
    //     let arrJSX = [];
    //     for (let index in this.products) {
    //         // Moi lan duyet lay ra 1 doi tuong san pham
    //         let product = this.products[index];
    //         // Tu doi tuong san pham tao ra doi tuong jsx
    //         let jsxProduct = <div className="col-4">
    //             <div className="card ">
    //                 <img className="card-img-top" src="https://picsum.photos/200" alt />
    //                 <div className="card-body">
    //                     <h4 className="card-title">{product.name}</h4>
    //                     <p className="card-text">{product.price}</p>
    //                 </div>
    //             </div>

    //         </div>;
    //         arrJSX.push(jsxProduct);
    //     }
    //     return arrJSX;
    // }
    renderProductWithMap = () => {
        const arrJSX = this.products.map((product, index) => {
            return <div className="col-4" key={index}>
                <div className="card ">
                    <img className="card-img-top" src="https://picsum.photos/200" alt />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>

            </div>;
        });
        return arrJSX;
    }
    renderTable = () => {
        return this.products.map((product, index) => {
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {/* {this.renderProduct()} */}
                    {this.renderProductWithMap()}
                </div>
                <div class="row">
                    <table className="table">
                        <thead>
                            <th>id</th>
                            <th>name</th>
                            <th>price</th>
                        </thead>
                        <tbody>
                            {this.renderTable()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
