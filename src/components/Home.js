import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Home = () => {

    const [users , setUsers] = useState([]);

    useEffect(()=>{
        getUsers()
    })

    const getUsers = async () =>{
        const data = await axios.get("http://localhost:3001/users")
        console.log(data);
    }

    return (
        <div>
            Im home
        </div>
    )
}

export default Home
