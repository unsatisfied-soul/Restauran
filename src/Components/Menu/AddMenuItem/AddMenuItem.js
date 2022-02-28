import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddMenuItem.css'
import Swal from 'sweetalert2';

const AddMenuItem = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    
    const onSubmit = data => {
        axios.post('https://fast-eyrie-92146.herokuapp.com/menu', data)
        .then(res=> {
            if(res.data.insertedId){
                Swal.fire({
                    position: 'middle',
                    icon: 'success',
                    title: 'Your Menu Add sucessfully!',
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 6000
                  })
            }
        })
    };
    return (
        <div className='addMenu mx-auto py-8 px-8 rounded-lg bg-white'>
            <h2 className="font-['Dancing_Script'] text-4xl font-bold text-[#ff2e1f] mb-6">Add Menu</h2>
            <form className='flex flex-col ' onSubmit={handleSubmit(onSubmit)}>
                <input className='menu_input' placeholder="Add Foody Image Link" {...register("foodImage", { required: true})} />
                <p className='text-red-600 font-bold'>{errors.foodImage && <span>This field is required</span>}</p>
                <input className='menu_input' placeholder="Prices" type="number" {...register("price", { required: true})} />
                <p className='text-red-600 font-bold'>{errors.price && <span>This field is required</span>}</p>
                <input className='menu_input' placeholder="Title"  {...register("title", { required: true})} />
                <p className='text-red-600 font-bold'>{errors.title && <span>This field is required</span>}</p>
                <input className='menu_input' placeholder="description"  {...register("desc")} />
                <select className='menu_input' id='menu-tag'  {...register("tag", { required: true})}>
                    <option value="fastfood">FastFood</option>
                    <option value="lunch">Lunch</option>
                    <option value="drinks">Drinks</option>
                    <option value="dinner">Dinner</option>
                </select>
                <input className='addMenuBtn mt-4 bg-[#ff2e1f] mx-auto px-12 py-3 rounded-lg text-white text-xl font-bold' type="submit" />
            </form>
        </div>
    );
};

export default AddMenuItem;