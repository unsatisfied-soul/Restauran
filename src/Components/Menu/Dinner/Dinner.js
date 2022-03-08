import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../../Store/actions';
import './Dinner.css'

const Dinner = () => {
    const[menus,setMenus] = useState([])
    const [peopleInfo, setPeopleInfo] = useState([]);
    const dispatch = useDispatch()
    useEffect(()=> {
        axios.get('https://fast-eyrie-92146.herokuapp.com/menu')
        .then(res=> setMenus(res.data))
        
    },[peopleInfo])
    const resultDinner = menus.filter(fastfoodMenu => fastfoodMenu.tag.includes('dinner'))
    
   
      return (
        <div className='fastfood-data grid gap-4 w-11/12 mx-auto py-8 text-left'>
          {
               resultDinner.map(menu=>
                
                        <label key ={menu._id} className='fastfood-menu-item  gap-2 px-3 py-3'>
                            <input className='menu-checked-input' onChange={(e) => {
                                    // add to list
                                    if (e.target.checked) {
                                        
                                        dispatch(actionCreators.addToList(
                                            ...peopleInfo,
                                            {
                                            id: menu._id,
                                            title: menu.title,
                                            price: menu.price,
                                            },
                                        ))
                                    
                                    }else{
                                        dispatch(actionCreators.removeItem(menu._id))
                                    }
                                }}
                                type="checkbox" 
                                name={menu.title} 
                                value={menu.title} />
                           
                                <div className="food-img rounded w-full">
                                    <img className='w-full' src={menu.foodImage} alt="" />
                                </div>
                                <div className="menu-desc px-2 text-center mt-2 flex  flex-col items-center py-2">
                                    <h3 className='font-[Redressed] text-2xl font-bold mb-2'>{menu.title}</h3>
                                    <h4 className='menu-price text-white font-bold py-1 text-md '>${menu.price}</h4>
                                </div>
                            </label>
                )
           }
        </div>
    );
};
export default Dinner;