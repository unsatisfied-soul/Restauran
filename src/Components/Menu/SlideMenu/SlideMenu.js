import React, { useState } from 'react';
import Dinner from '../Dinner/Dinner';
import Fastfood from '../FastFood/Fastfood';
import Lunch from '../Lunch/Lunch';
import SoftDrinks from '../SoftDrinks/SoftDrinks';
import './SlideMenu.css'

const SlideMenu = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
        <div className="containers w-10/12 mx-auto py-10">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        > 
          <div className="slider-details flex justify-center items-center gap-2">
            <div className="slider-icon">
              <img src="https://i.ibb.co/C5STnn6/3558095-food-noodle-shop-street-vender-icon.png" alt="" />
            </div>
            <h2 className='text-3xl font-bold font-[Redressed]'>FastFood</h2>
          </div>
          
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          <div className="slider-details flex justify-center items-center gap-2">
            <div className="slider-icon">
              <img src="https://i.ibb.co/X3CDqjs/3558110-bread-fast-food-hamburger-patty-icon.png" alt="" />
            </div>
            <h2 className='text-3xl font-bold font-[Redressed]'>SoftDrinks</h2>
          </div>
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          <div className="slider-details flex justify-center items-center gap-2">
            <div className="slider-icon">
              <img src="https://i.ibb.co/YT9Lmp0/3558106-cup-food-instant-noodles-precooked-icon.png" alt="" />
            </div>
            <h2 className='text-3xl font-bold font-[Redressed]'>Lunch</h2>
          </div>
          
        </button>
        <button
          className= {toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
           <div className="slider-details flex justify-center items-center gap-2">
            <div className="slider-icon">
              <img src="https://i.ibb.co/fMqGtwF/3558116-fast-food-french-fries-snacks-icon.png" alt="" />
            </div>
            <h2 className='text-3xl font-bold font-[Redressed]'>Dinner</h2>
          </div>
          
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
         <Fastfood />
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <SoftDrinks />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
           <Lunch />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
           <Dinner />
        </div>
      </div>
    </div>
    );
};

export default SlideMenu;