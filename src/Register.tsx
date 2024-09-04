import React, { useEffect, useState } from 'react'
import './style.css'
import axios, {  AxiosResponse } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

interface IFormInput {
    name: string;
    email: string;
    password: string;
}

const Reg: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
    const nav = useNavigate();
    const [data, setData] = useState<IFormInput>({ name: '', email: '', password: '' })
    
    const onSubmit: SubmitHandler<IFormInput> = (input) => {
        setData(input);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (data.email !== '') {   
                    const response: AxiosResponse = await axios.post<IFormInput>('http://localhost:3001/register', data)
                    console.log(response);
                    nav('/login');
                }
            }
            catch (error) {
                nav('/login');
                console.error('Шпак недоволен регистрацией: ', error);
            }
        }

        fetchData().then(r => console.log(r));
    }, [data, nav])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
         <div>
            {/* сделать как отдельный элемент */}
           <label htmlFor="name">name</label>
           <input id="name" {...register('name', { required: true })} />
           {errors.name && <span>This field is required</span>}
         </div>
         <div>
           <label htmlFor="email">email</label>
           <input id="email" {...register('email', { required: true })} />
           {errors.email && <span>This field is required</span>}
         </div>
         <div>
           <label htmlFor="password">password</label>
           <input id="password" type='password' {...register('password', { required: true })} />
           {errors.password && <span>This field is required</span>}
         </div>
         <input type="submit" />
       </form>
    )
}

export default Reg;