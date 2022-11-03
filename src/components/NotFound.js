import React from 'react'
import errorImg from '../images/ErrorImg.svg'

const NotFound = () => {
    return (
        <div style={{ minHeight: "39.3em", background: "#C6E7FF"}}>
            <h1>404 NOT FOUND</h1>
            <img src={errorImg} alt="error" className='img-fluid' style={{ height: "500px", pointerEvents: "none" }} />
        </div>
    )
}

export default NotFound