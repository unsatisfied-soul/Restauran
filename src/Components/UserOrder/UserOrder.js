import { faAlignJustify, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import OrderTotal from './OrderTotal/OrderTotal';
import './UserOrder.css'
const UserOrder = () => {
    const [order,setOrder] = useState(false)
    const [quantity,setQuantity]= useState({})
    const items = useSelector(state => state);
    let initialPrice=0;

        const itemsvalue = items.items.map(item=> {
            console.log(item)
           return Number(item.price);
        })
        for (let i = 0; i < itemsvalue.length; i++) {
            initialPrice += itemsvalue[i];
        }
        let priceOrder;
        let userId;
    const quantityPrice = (id,quantity)=> {
       priceOrder= quantity;
       userId =id;
       const userFind= items.items.find(elem=> elem.id == userId)
       console.log(userFind)
       console.log(quantity)
    }
    
        
   
        return (
           items.items.length> 0 ? (
            <div className={order? "fixed w-96 order-toogle-close bg-[#fda988] top-24 z-40 py-4 px-3 ":"fixed order-toogle-open w-96 bg-[#fda988] top-24 z-40 py-4 px-3"}>
                <button className='mobile-nav text-right toogle-btn w-full px-4' 
                onClick={()=> setOrder(!order)}
                >
                    {order ? (<FontAwesomeIcon className='relative text-3xl top-2 text-[#fbfd87]' icon={faAlignJustify} ></FontAwesomeIcon>)
                     :  ( 
                        <FontAwesomeIcon className='relative  text-3xl top-2 text-[#fbfd87]' icon={faTimes} ></FontAwesomeIcon> )
                    }
                </button>
            <div className="block mb-4">
                <h2 className='text-4xl font-[Redressed] font-bold'>Your Order</h2>    
            </div>
            <div className="order-details mb-4">
                {
                    items.items.map((item,index)=>
                        <OrderTotal key= {item.id} index={index} item={item} quantity= {quantityPrice} />,
                        initialPrice
                    )
                }
            </div>
            <div className="total flex justify-between px-8 border-t-2 border-black">
                <h2 className='text-xl font-bold'>Total</h2>
                <h4 className='text-xl font-bold'>{initialPrice}</h4>
            </div>
             

            </div>
           ): (
               <></>
           )
        );
  
    
};

export default UserOrder;