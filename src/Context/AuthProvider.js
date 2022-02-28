import React, { createContext } from 'react';
import Fastfood from '../Components/Menu/FastFood/Fastfood';
import UseloginData from '../Hooks/UseloginData';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allUser = UseloginData()
    const fastFood = Fastfood()
    return (
        <AuthContext.Provider value={allUser}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;