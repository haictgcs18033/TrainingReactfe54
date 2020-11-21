import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import LaptopProduct from './LaptopProduct'
import ProductList from './ProductList'
import Slider from './Slider'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div>
               <Header></Header>
               <Slider></Slider>
               <ProductList> </ProductList>
               <LaptopProduct></LaptopProduct>
               <Footer></Footer>
            </div>
        )
    }
}
