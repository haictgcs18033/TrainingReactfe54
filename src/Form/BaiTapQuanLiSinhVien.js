import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien'
import TableSinhVien from './TableSinhVien'

export default class BaiTapQuanLiSinhVien extends Component {
    render() {
        return (
            <div className="container">
               <FormSinhVien></FormSinhVien>
               <TableSinhVien></TableSinhVien>
            </div>
        )
    }
}
