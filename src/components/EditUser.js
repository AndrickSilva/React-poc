import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { gsap } from 'gsap'

const EditUser = () => {
    let navigate = useNavigate()
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    // Set the new values
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.value);
    }

    useEffect(() => {
        loadUser();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // function to Submit the data
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3001/users/${id}`, user)
        navigate("/")
    }

    // Get user details
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data);
    }

    // Animation
    useEffect(() => {
        gsap.fromTo(".fade-up", { duration: 1.5, y: 250 }, { y: -20 })
    }, [])

    return (
        <div className='fade-up container shadow my-5 p-4 bg-light rounded-1' style={{ maxWidth: "40em" }}>
            <h2 className='fw-bold text-center my-2'>Enter Details</h2>
            <form onSubmit={e => onSubmit(e)} className="">
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

                <button type="submit" className="btn btn-warning fw-bold rounded-0 w-100 my-2">Update</button>
            </form>
        </div>
    )
}

export default EditUser