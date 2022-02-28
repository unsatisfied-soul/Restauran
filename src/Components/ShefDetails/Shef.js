import React from 'react';
import { Link } from 'react-router-dom';
import './Shef.css'


export const schefs = [
    {
        chefImg: 'https://i.ibb.co/L0pfQyM/pexels-andrea-piacquadio-3771120.jpg',
        chefName: 'Panike Lassi',
        chefTitle: 'Chef Cook',
        chefLocation: 'NewGini',
        ChefDetails: 'Chef responsibilities include studying recipes, setting up menus and preparing high-quality dishes. You should be able to delegate tasks to kitchen staff to ensure meals are prepared in a timely manner. Also, you should be familiar with sanitation regulations. If you have experience with advanced cooking techniques and non-traditional ingredients, we’d like to meet you.Ultimately, you’ll prepare and deliver a complete menu that delights our guests.'
    },
    {
        chefImg: 'https://i.ibb.co/PC9dWKV/pexels-miquel-ferran-gomez-figueroa-3814446.jpg',
        chefName: 'Nadif Tanduri',
        chefTitle: 'Head Chef',
        chefLocation: 'Panana',
        ChefDetails: 'Chef responsibilities include studying recipes, setting up menus and preparing high-quality dishes. You should be able to delegate tasks to kitchen staff to ensure meals are prepared in a timely manner. Also, you should be familiar with sanitation regulations. If you have experience with advanced cooking techniques and non-traditional ingredients, we’d like to meet you.Ultimately, you’ll prepare and deliver a complete menu that delights our guests.'
    },

    {
        chefImg: 'https://i.ibb.co/KKrBHq6/pexels-cottonbro-4057693.jpg',
        chefName: 'Kala Vhuna',
        chefTitle: 'Ceo,Cooker',
        chefLocation: 'Atlantic Mohasagor',
        ChefDetails: 'Chef responsibilities include studying recipes, setting up menus and preparing high-quality dishes. You should be able to delegate tasks to kitchen staff to ensure meals are prepared in a timely manner. Also, you should be familiar with sanitation regulations. If you have experience with advanced cooking techniques and non-traditional ingredients, we’d like to meet you.Ultimately, you’ll prepare and deliver a complete menu that delights our guests.'
    },

    {
        chefImg: 'https://i.ibb.co/nCP9G32/pexels-denys-gromov-5113074.jpg',
        chefName: 'Kacchi Chap',
        chefTitle: 'Chef Cook',
        chefLocation: 'Nargis, Nodia',
        ChefDetails: 'Chef responsibilities include studying recipes, setting up menus and preparing high-quality dishes. You should be able to delegate tasks to kitchen staff to ensure meals are prepared in a timely manner. Also, you should be familiar with sanitation regulations. If you have experience with advanced cooking techniques and non-traditional ingredients, we’d like to meet you.Ultimately, you’ll prepare and deliver a complete menu that delights our guests.'
    }
]

const Shef = () => {
    return (
        <div className='py-12'>
            <div className="heading mb-12">
                <h4 className='font-[Nunito] text-medium font-bold'>Schef</h4>
                <h2 className="font-['Dancing_Script'] text-5xl font-bold text-[#ff2e1f]">Our Professional Schef</h2>
            </div>

            <div className="chefs-details grid w-10/12 mx-auto gap-5 ">
                {
                    schefs.map(chef => (
                        <div key={chef.chefName} className="chef-container rounded-md overflow-hidden ">
                            <div className="chef-img">
                                <img src={chef.chefImg} alt="" />
                            </div>
                            <div className="chef-desc py-4 bg-[#fee3b39c]">
                                <h2 className='font-[Redressed] text-2xl font-bold'>{chef.chefName}</h2>
                                <h4 className='leading-none text-sm font-[Nunito] font-semibold mb-2'>{chef.chefTitle}</h4>
                                <Link className='text-[#ff2e1f] font-bold' to={`/schef/:${chef.chefName}`}>Details Chef -&gt;</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Shef;