import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import './FastFood.css'

const Fastfood = () => {
    const[menus,setMenus] = useState([])
    const [peopleInfo, setPeopleInfo] = useState([]);
    useEffect(()=> {
        axios.get('https://fast-eyrie-92146.herokuapp.com/menu')
        .then(res=> setMenus(res.data))
    },[])
       
        sessionStorage.setItem('order',JSON.stringify(peopleInfo))
        console.log(peopleInfo)
    //   console.log(sessionStorage.getItem('order'))
        
      return (
        <div className='fastfood-data grid gap-4 w-11/12 mx-auto py-8 text-left'>
          {
               menus.map(menu=>
                
                        <label className='flex fastfood-menu-item  gap-2 px-3 py-3'>
                            <input className='menu-checked-input' onChange={(e) => {
                                    // add to list
                                    if (e.target.checked) {
                                    setPeopleInfo([
                                        ...peopleInfo,
                                        {
                                        id: menu._id,
                                        title: menu.title,
                                        price: menu.price,
                                        },
                                    ]);
                                    
                                    } else {
                                    // remove from list
                                    setPeopleInfo(
                                        peopleInfo.filter((people) => people.id !== menu._id),
                                    );
                                    }
                                }}
                                type="checkbox" checked={peopleInfo[menu._id]} 
                                name={menu.title} 
                                value={menu.title} />
                           
                                <div className="food-img rounded">
                                    <img className='' src={menu.foodImage} alt="" />
                                </div>
                                <div className="menu-desc px-2">
                                    <h3 className='font-[Redressed] text-xl font-bold mb-2'>{menu.title}</h3>
                                    <h4 className='menu-price text-center text-white font-bold py-1 text-md'>${menu.price}</h4>
                                </div>
                            </label>
                )
           }
        </div>
    );
};
export default Fastfood;