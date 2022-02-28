import React from 'react';
import TweenOne from "rc-tween-one";
import BannerAnim, { Element } from "rc-banner-anim";

import "rc-banner-anim/assets/index.css";

import './Banner.css'
import { Link } from 'react-router-dom';
const BgElement = Element.BgElement;
const bannerData = [
    {
        bannerBg: 'https://i.ibb.co/rpzPwJK/pexels-fwstudio-172285-1-1.jpg',
        title: 'Welcome to our Restaurante',
        bannerLeftImg: '',
        bannerLeftImg: '',
        desc: 'Here we provided you special type of food, like sea food, kauwa Biriyani etc'
    },
    {
        bannerBg: 'https://i.ibb.co/rpzPwJK/pexels-fwstudio-172285-1-1.jpg',
        title: 'Eat Drink Visit',
        desc: 'We are focus best food serve thats the client satisfition'
    },
    {
        bannerBg: 'https://i.ibb.co/rpzPwJK/pexels-fwstudio-172285-1-1.jpg',
        title: 'Indulge Yourself',
        desc: 'The best place to kick off your day or just take a brak and enjoy here.'
    },
]

const Banner = () => {
  return (
    <BannerAnim prefixCls="banner-user" 
      autoPlay
      autoPlaySpeed={1000}
      duration={700}
      delay={3000}
      autoPlayEffect={false}
    >
    <Element prefixCls="banner-user-elem items-center" className='banner-user flex items-center' key="0">
      <BgElement
        key="bg"
        className="bg"
        style={{
          backgroundImage: 'url(https://i.ibb.co/rpzPwJK/pexels-fwstudio-172285-1-1.jpg)'
        }}
      />
      <TweenOne
        className="banner-details w-11/12 mx-auto flex  justify-center items-center gap-5 pt-36"
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <div className="banner-left-img -rotate-2">
          <img src="https://i.ibb.co/wLTpv0j/pexels-julie-aagaard-2097090.jpg" alt="" />
        </div>
        <div className="banner-desc">
          <h2 className="text-6xl font-['Dancing_Script'] font-medium mb-2">Welcome to our Restaurante</h2>
          <p className='text-xl text-gray-300 mb-5'>Here we provided you special type of food, like sea food, kauwa Biriyani etc</p>
          <Link className='' to="/order-table"><button className='bg-[#f42f2c] py-3 px-7 text-xl font-bold'>Take Order</button></Link>
        </div>
        <div className="banner-right-img rotate-2">
          <img src="https://i.ibb.co/LCPTTjG/pexels-dzenina-lukac-1583884.jpg" alt="" />
        </div>
      </TweenOne>
    
    </Element>
    <Element prefixCls="banner-user-elem" key="1">
      <BgElement
        key="bg"
        className="bg"
        style={{
          backgroundImage: 'url(https://i.ibb.co/3h05YDL/white-and-brown-cooked-dish-on-white-ceramic-bowls-958545-1.jpg)'
        }}
      />
      <TweenOne
        className="banner-details w-11/12 mx-auto flex  justify-center items-center gap-5 pt-36"
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <div className="banner-left-img -rotate-2">
          <img src="https://i.ibb.co/dBPGBWg/pexels-william-choquette-2641886.jpg" alt="" />
        </div>
        <div className="banner-desc">
          <h2 className="text-6xl font-['Dancing_Script'] font-medium mb-2">Eat Drink Visit</h2>
          <p className='text-xl text-gray-300 mb-5'>We are focus best food serve thats the client satisfition</p>
          <Link className='/order-table' to="/order-table"><button className='bg-[#f42f2c] py-3 px-7 text-xl font-bold'>Take Order</button></Link>
        </div>
        <div className="banner-right-img rotate-2">
          <img src="https://i.ibb.co/cDmZ2CC/pexels-labskiii-10065179.jpg" alt="" />
        </div>
      </TweenOne>
      
    </Element>
    <Element prefixCls="banner-user-elem" key="2">
      <BgElement
        key="bg"
        className="bg"
        style={{
          backgroundImage: 'url(https://i.ibb.co/qy41WRJ/abstract-background-carpentry-construction-268976.jpg)'
        }}
      />
     <TweenOne
        className="banner-details w-11/12 mx-auto flex  justify-center items-center gap-5 pt-36"
        animation={{ y: 30, opacity: 0, type: "from" }}
      >
        <div className="banner-left-img -rotate-2">
          <img src="https://i.ibb.co/MGFgbWP/pexels-valeria-boltneva-1247677.jpg" alt="" />
        </div>
        <div className="banner-desc">
          <h2 className="text-6xl font-['Dancing_Script'] font-medium mb-2">Indulge Yourself</h2>
          <p className='text-xl text-gray-300 mb-5'>The best place to kick off your day or just take a brak and enjoy here.</p>
          <Link className='/order-table' to="/order-table"><button className='bg-[#f42f2c] py-3 px-7 text-xl font-bold'>Take Order</button></Link>
        </div>
        <div className="banner-right-img rotate-2">
          <img src="https://i.ibb.co/pK7SbjB/pexels-budhaditya-bose-432072.jpg" alt="" />
        </div>
      </TweenOne>
    </Element>
  </BannerAnim>
  );
};

export default Banner;