import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEye, FaPen, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import DeleteImg from '../images/Inbox cleanup.gif'
// import { gsap } from 'gsap'

const Home = () => {

    const [users, setUsers] = useState([]);
    const [alert, setAlert] = useState(false);

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

    return (
        <div className='container'>
            {alert && <div class="alert alert-danger mt-2 alert rounded-1" role="alert">
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
                                    {/* Button trigger modal  */}
                                    <button type="button" class="btn btn-outline-danger rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                        <FaTrash />
                                    </button>

                                    {/* Modal  */}
                                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLabel"> Warning </h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                    <img src={DeleteImg} alt="Trash img" style={{ maxHeight: "40vh", maxWidth: "40vh", marginLeft: "auto", marginRight: "auto"}}/>

                                                    <h2>Are you sure ?</h2>
                                                    <p>Do you really want to delete these records? This process cannot be undone.</p>
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn rounded-0 px-3 btn-outline-secondary" data-bs-dismiss="modal">No</button>
                                                    <button type="button" class="btn rounded-0 px-3 btn-danger" data-bs-dismiss="modal" onClick={() => deleteUser(user.id)}>Yes</button>
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
