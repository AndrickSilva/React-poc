import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEye, FaPen, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import DeleteImg from '../images/Inbox cleanup.gif'
// import { gsap } from 'gsap'

const Home = () => {

    const [users, setUsers] = useState([]);
    const [alert, setAlert] = useState(false);
    const [id, setId] = useState(-1);

    useEffect(() => {
        getUsers()

    }, []);

    // useEffect(()=>{
    // Animation
    // gsap.fromTo(".animate", { duration: 1.5, x: 150, stagger: 1, once: true }, { x: -30 })
    // })

    // Get user details
    const getUsers = async () => {
        const data = await axios.get("http://localhost:3001/users")
        setUsers(data.data.reverse())
    }
    // Delete user and show alert
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`)
        getUsers()
        setAlert(true)

        setTimeout(() => {
            setAlert(false)
        }, 1500);
    }

    const getUser = (id) => {
        setId(id)
    }

    return (
        <div className='container'>
            {alert && <div className="alert alert-danger mt-2 alert rounded-1" role="alert">
                User deleted successfully!
            </div>}

            <table className="my-4 table table-secondary shadow">
                <thead className='table-dark'>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <th scope="row" >{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link className="animate btn btn-outline-primary  rounded-0 " to={`/User/${user.id}`} ><FaEye /></Link>
                                    <Link className="animate btn btn-outline-success mx-2 rounded-0 " to={`/User/edit/${user.id}`} ><FaPen /></Link>

                                    <button type="button" className="btn btn-outline-danger rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getUser(user.id)}>
                                        <FaTrash />
                                    </button>

                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content rounded-1">
                                                <button type="button" className="btn-close mt-3 ms-3" data-bs-dismiss="modal" aria-label="Close"></button>
                                                <div className="modal-body" style={{ padding: "0 1em" }}>
                                                    <img src={DeleteImg} alt="Trash img" style={{ maxHeight: "40vh", maxWidth: "40vh", margin: "0 auto", display: "block" }} />
                                                    <h2>Are you sure ?</h2>
                                                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn rounded-0 px-3 btn-outline-secondary" data-bs-dismiss="modal">No</button>
                                                    <button type="button" className="btn rounded-0 px-3 btn-danger" data-bs-dismiss="modal" onClick={() => deleteUser(id)}>Yes</button>
                                                    {console.log(user.id)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Home
