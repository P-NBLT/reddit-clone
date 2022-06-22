import React from 'react'
import Card from './SearchCard'
import ReactDOM from 'react-dom'

export default function Modal({onClose,open},children) {

    return ReactDOM.createPortal(
        <>
            <div />
            {/* <div><Card onClose={onClose} Open={open}/></div> */}
            <p>YIKESSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</p>
        </>,document.getElementById('portal')
    )
}
