import axios from 'axios';
import { gsap } from 'gsap';
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

    useEffect(() => {
        loadUser();
        gsap.fromTo(".flip", { rotateY: -180, parseTransform: true, ease: "Power1.easeOut", scale: 0.5 }, { rotateY: 1, scale: 1 })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    // Get user details
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3001/users/${id}`)
        setUser(result.data);
    }
    
    return (
        <div className='container-fluid bg-light pt-4 d-flex justify-content-center align-items-start px-3' style={{ minHeight: '90vh' }}>
            <div className="flip d-flex gap-3 card-dark justify-content-center align-items-center p-4 rounded-1 card" style={{ maxWidth: 'fit-content' }}>
                <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt='profile' className='rounded-pill' height="100px" width="100px" />
                <div className="d-flex flex-column m-3">
                    <h2 className='fw-bold '>{user.name}</h2>
                    <span className='text-secondary'> {user.username} </span>
                    <p className='text-primary mt-1'>{user.email}</p>
                    <p className='fw-italic'>{user.phone}</p>
                </div>
            </div>
        </div>
    )
}

export default ViewUser
