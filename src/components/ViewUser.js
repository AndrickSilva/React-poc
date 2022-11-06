import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ViewUser = () => {

    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: ""
    })

    useEffect(()=>{
        loadUser()
    });

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data);
    }
    return (
<div className='container-fluid bg-light pt-4 d-flex justify-content-center align-items-start' style={{minHeight : '110vh'}}>
            <div className="d-flex gap-3 card justify-content-center align-items-center p-4 rounded-0" style={{maxWidth: 'fit-content'}}>
                <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt='profile' className='rounded-pill' height="100px" width="100px"/>
                <div className="d-flex flex-column">
                    <h2 className='fw-bold'>{user.name}</h2>
                    <span className='text-secondary'> {user.username} </span>
                    <p className='text-primary mt-1'>{user.email}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
