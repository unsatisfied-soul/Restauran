import React from 'react';
import useAuth from '../../Hooks/useAuth';
import SlideMenu from './SlideMenu/SlideMenu';

const Menu = () => {
    const{userToken}=useAuth()
    return (
        <div className='bg-[#fee2b3] py-24'>
            <div className="heading mb-6">
                <h4 className='font-[Nunito] text-medium font-bold'>Take Order</h4>
                <h2 className="font-['Dancing_Script'] text-5xl font-bold text-[#ff2e1f]">Our Favourite Menu</h2>
            </div>
            <SlideMenu />
        </div>
    );
};

export default Menu;