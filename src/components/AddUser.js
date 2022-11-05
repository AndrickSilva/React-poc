import axios  from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    return (
        <div className='container shadow my-5 p-4 bg-light rounded-4' style={{ maxWidth: "40em" }}>
            <form onSubmit={e => onSubmit(e)}  className="">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label d-flex fw-bolder fs-5">Name</label>
                    <input onChange={e => onInputChange(e)} value={user.name} type="text" className="form-control shadow-none rounded-0" name="name" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label d-flex fw-bolder fs-5">Username</label>
                    <input onChange={e => onInputChange(e)} value={user.username} type="text" className="form-control shadow-none rounded-0" name="username" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label d-flex fw-bolder fs-5">E-mail</label>
                    <input onChange={e => onInputChange(e)} value={user.email} type="email" className="form-control shadow-none rounded-0" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label d-flex fw-bolder fs-5">Phone number</label>
                    <input onChange={e => onInputChange(e)} value={user.phone} type="text" className="form-control shadow-none rounded-0" name="phone" />
                </div>

                <button type="submit" className="btn btn-primary rounded-0 w-100 my-2">Submit</button>
            </form>
        </div>
    )
}

export default AddUser