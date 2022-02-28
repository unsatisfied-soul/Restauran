import React, {useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

const UseloginData = () => {
    const [userToken,setUserToken] = useState({})
    useEffect(()=> {
        const token = localStorage.getItem('id_token')
        if(token){
            const user = jwtDecode(token)
            setUserToken(user)
        }
    },[])
    return{
        userToken
    }
};

export default UseloginData;