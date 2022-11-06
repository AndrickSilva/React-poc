import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaEye, FaPen, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = async () => {
        const data = await axios.get("http://localhost:3001/users")
        setUsers(data.data.reverse())
        // console.log(data.data);
    }

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3001/users/${id}`)
        getUsers()
    }

    return (
        <div className='container'>
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
                                    <Link className="btn btn-outline-primary  rounded-0" to={`/User/${user.id}`} ><FaEye /></Link>
                                    <Link className="btn btn-outline-success mx-2 rounded-0" to={`/User/edit/${user.id}`} ><FaPen /></Link>
                                    <button className="btn btn-outline-danger rounded-0" onClick={() => deleteUser(user.id)} ><FaTrash /></button>
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
