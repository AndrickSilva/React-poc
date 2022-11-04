import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
    }, []);

    const getUsers = async () => {
        const data = await axios.get("http://localhost:3001/users")
        setUsers(data.data)
        console.log(data.data);
    }

    return (
        <div className='container'>
            <table className="my-4 table shadow">
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
                                    <button className="btn btn-primary  rounded-0">View</button>
                                    <button className="btn btn-success mx-2 rounded-0">Edit</button>
                                    <button className="btn btn-outline-danger rounded-0">Delete</button>
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
