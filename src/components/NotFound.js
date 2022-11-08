import React from 'react'
import errorImg from '../images/ErrorImg.svg'

const NotFound = () => {
    return (
        <div className='d-flex justify-content-center flex-column align-items-center' style={{ minHeight: "100vh", background: "#C6E7FF"}}>
            <h1 className='fs-1 fw-bold'>PAGE NOT FOUND</h1>
            <img src={errorImg} alt="error" className='img-fluid' style={{ height: "500px", pointerEvents: "none" }} />
        </div>
    )
}

export default NotFound