import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import styleGame from '../BaiTapGameXucXac/BaiTapGameXucXac.module.css'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className={`${styleGame['bgGame']}`}>
                <h1 className="display-4 text-center mt-5">Bai tap game xuc sac</h1>
              <XucXac></XucXac>
              <KetQuaTroChoi></KetQuaTroChoi>
            </div>
        )
    }
}
