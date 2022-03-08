import React from 'react';
import Banner from '../Banner/Banner';
import AddMenuItem from '../Menu/AddMenuItem/AddMenuItem';
import Menu from '../Menu/Menu';
import Login from '../RegistrationBase/Login/Login';
import Registration from '../RegistrationBase/Registration/Registration';
import Shef from '../ShefDetails/Shef';
import UserOrder from '../UserOrder/UserOrder';
const Home = () => {
    return (
        <div>
            <Banner />
            <UserOrder />
            <Menu />
            <Shef />
            <AddMenuItem />
            <Registration />
            <Login />
        </div>
    );
};

export default Home;