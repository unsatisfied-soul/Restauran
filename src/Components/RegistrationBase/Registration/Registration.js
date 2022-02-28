import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import './Registration.css'

const Registration = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [passwordError,setpasswordError] = useState('')
    const onSubmit = data => {
        if(data.userPassword !== data.userRetypePassword){
            setpasswordError('your password did not match');
            return
        }else{
            setpasswordError('')
        }
        axios.post('https://fast-eyrie-92146.herokuapp.com/users',data)
        .then(res=> {
            if(res.data.insertedId){
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Register Successfully!',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 6000
                  })
            }
        })
    };
    return (
        <div className='registrationForm mx-auto py-8 px-8 rounded-lg bg-white mt-12'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className='registration_data' placeholder="Name" {...register("userName", { required: true})} />
                <p className='text-red-600 font-bold'>{errors.userName && <span>This field is required</span>}</p>

                <input className='registration_data' placeholder="Email" type="email" {...register("userEmail", { required: true})} />
                <p className='text-red-600 font-bold'>{errors.userEmail && <span>This field is required</span>}</p>

                <input className='registration_data' placeholder="Password" type='password' {...register("userPassword", { required: true})} />
                <p className='text-red-600 font-bold'>{passwordError}</p>
                <p className='text-red-600 font-bold'>{errors.userPassword && <span>This field is required</span>}</p>

                <input className='registration_data' placeholder="Retype Password" type="password" {...register("userRetypePassword",{ required: true})} />
                <p className='text-red-600 font-bold'>{passwordError}</p>
                <p className='text-red-600 font-bold'>{errors.userRetypePassword && <span>This field is required</span>}</p>

                
                <input className='registration_btn mt-4 bg-[#ff2e1f] mx-auto px-12 py-3 rounded-lg text-white text-xl font-bold' type="submit" />
            </form>
        </div>
    );
};

export default Registration;