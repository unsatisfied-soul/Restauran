import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../../Store/actions';

const OrderTotal = (props) => {
    let [num,setNum] = useState(1)
    let [dataPush,setPush] = useState([])
    let [inprice,setPrice]= useState(0)
    const dispatch = useDispatch()
    let arr = 0
    const {id,title,price}=props.item
    const index = props.index
    const {quantity}= props
    quantity(id,num)
    let incNum =()=>{
        if(num<100)
        {
        setNum(Number(num)+1);
        }
      };
    let Decum = ()=> {
        if(num> 1){
            setNum(num-1)
        }
    }
    let handleChange = e => {
        setNum(e.target.value)
    }
    let quantityPrice = Number(price) * num;
    
    return (
        <div className="userOrder flex justify-around py-1" >
                <h3 className='text-xl font-bold'>0{index+1}</h3>
                <h3 className='text-xl font-bold'>{title}</h3>
                <div className="quantity flex gap-2 text-2xl text-white font-bold px-2 bg-[#d64207]">
                    <h3 className="cursor-pointer" onClick={Decum}>-</h3>
                    <h2 onChange={handleChange}>{num}</h2>
                    <h4 className="cursor-pointer" onClick={incNum}>+</h4>
                </div>
                <h4 className='text-xl font-bold'>{quantityPrice}</h4>
            
        </div>
    );
};

export default OrderTotal;