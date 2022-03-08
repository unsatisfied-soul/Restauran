import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import './Login.css'
import { useDispatch } from 'react-redux';

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const dispatch = useDispatch()
    const[user,setUser]=useState({})
    const onSubmit = data => {
        axios.post('https://fast-eyrie-92146.herokuapp.com/login',data)
        .then(res => {
            if(res.data.user){
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Login Successfully!',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 6000
                  })
                  setUser(res.data)
            }else{
                console.log(res.data)
            }
            localStorage.setItem('id_token',res.data.user)
        })
    };
    return (
        <div className='liginForm mx-auto py-8 px-8 rounded-lg bg-white mt-12'>
            <h2>{user.name}</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='login_data' placeholder="Email" type="email" {...register("email", { required: true})} />
                <p className='text-red-600 font-bold'>{errors.email && <span>This field is required</span>}</p>

                <input className='login_data' placeholder="Password" type='password' {...register("password", { required: true})} />
                <p className='text-red-600 font-bold'>{errors.password && <span>This field is required</span>}</p>
                
                <input className='login_btn mt-4 bg-[#ff2e1f] mx-auto px-12 py-3 rounded-lg text-white text-xl font-bold' type="submit" />
            </form>
        </div>
    );
};

export default Login;