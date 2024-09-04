import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const Protected: React.FC = () => {
    const [data, setData] = useState<string | null>(null)
    const nav = useNavigate();

    const logOut = () => {
        Cookies.remove('authorization');
        nav('/login');
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!data) {
                try {
                const response = await axios.get('http://localhost:3001/protected', {
                  headers: { Authorization: `Bearer ${Cookies.get('authorization')}` }
                });
                setData(response.data);
                console.log(response);
                
              } catch (err) {
                console.error(err)
                nav('/login');
              }
            }
        }

        fetchData();
    })

    return (
        <div>
            <h1>{ data }</h1>
            <button onClick={logOut}>log out</button>
        </div>
    )
}

export default Protected;