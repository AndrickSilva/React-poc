import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'

const AddUser = () => {
    let navigate = useNavigate()
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:3001/users', user)
        navigate("/")
    }

    useEffect(() => {
        gsap.fromTo(".fade-up", { duration: 1, y: 550 }, {y: 150})
    }, [])


    return (
        <div className='fade-up container shadow my-5 p-4 bg-light rounded-1' style={{ maxWidth: "40em" }}>
            <h2 className='fw-bold text-center my-2'>Enter Details</h2>
            <form onSubmit={e => onSubmit(e)} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label d-flex fw-bolder fs-5">Name</label>
                    <input onChange={e => onInputChange(e)} value={user.name} type="text" className="form-control shadow-none rounded-0" name="name" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label d-flex fw-bolder fs-5">Username</label>
                    <input onChange={e => onInputChange(e)} value={user.username} type="text" className="form-control shadow-none rounded-0" name="username" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label d-flex fw-bolder fs-5">E-mail</label>
                    <input onChange={e => onInputChange(e)} value={user.email} type="email" className="form-control shadow-none rounded-0" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label d-flex fw-bolder fs-5">Phone number</label>
                    <input onChange={e => onInputChange(e)} value={user.phone} type="text" className="form-control shadow-none rounded-0" name="phone" required />
                </div>

                <button type="submit" className="btn btn-primary rounded-0 w-100 my-2">Submit</button>
            </form>
        </div>
    )
}

export default AddUser