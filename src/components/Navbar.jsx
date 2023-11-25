
// import React, {useState} from 'react';
import { AiOutlineMenu,  AiOutlineClose} from 'react-icons/ai';
import { BsFillCartFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import { FaWallet} from 'react-icons/fa';
import {MdFavorite} from 'react-icons/md';
import{NavLink } from 'react-router-dom';
import { useState } from 'react';



function Navbar() {
  const [nav, setNav] =useState(true);
  const activeLink = ' text-[#f97316]  border-b-2  border-[#f97316]  border-solid        hidden    md:block  font-medium sm:text-[17px] md:text-[20px]    ';
  const normalLink = 'text-[#777] hidden    md:block  font-medium sm:text-[17px] md:text-[20px]   ' ;

  return (
    <div className=' flex justify-between  m-auto  max-w-[1640px] items-center  p-4'>
      {/*Lifte */}
      <div className='flex  items-center'>
        <div  onClick={()=> {setNav(!nav) }}>
            <AiOutlineMenu size={30}  className=' cursor-pointer'/>
        </div>
        <h1 className='  top-[10px] text-[22px]   md:text-[30px] md:top-[50px]   lg:text-4xl  px-2'>
        Best <span className=' font-bold '> Eats</span>
        </h1>
        <div className=' hidden md:flex  text-[14px] p-1 bg-gray-200 rounded-full text-sm  items-center'>
          <p className=' bg-black text-white p-2 rounded-full'>Delivery</p>
          <p  className=' p-2'>Pickup</p>
        </div>
      </div>
      {/* Links*/}
      <div className='flex  justify-between items-center  gap-[50px] nav_links'>
        <NavLink to="/"              className= {({isActive}) => isActive  ? activeLink : normalLink}>Home</NavLink>
        <NavLink to="/servies"       className= {({isActive}) => isActive  ? activeLink : normalLink}> Services</NavLink>
        <NavLink to="/about"         className= {({isActive}) => isActive  ? activeLink : normalLink}s> About</NavLink>
        {/* Card */} 
          <button className=' bg-black text-white  flex items-center py-2 rounded-full '>
          <BsFillCartFill size={20} className='mr-2' /> Card
      </button>
      </div>
      {/* OverLay */}
      {nav ?  <div className=' bg-black/80 top-0   left-0 z-10   absolute h-screen  w-full '> </div> :  " " }
      {/* Side drawer menu */}
      <div className= {
        nav ? 'fixed top-0 left-0 w-[250px] h-screen bg-white z-10 duration-300'
          :
        'fixed top-0 left-[-100%] w-[250px] h-screen bg-white z-10 duration-300'
      }>
        <AiOutlineClose onClick={()=> {
              setNav(!nav)
          }}
            className=' text-[30px] absolute left-[215px] top-5 cursor-pointer z-30 '/>
            
          <h2 className='text-2xl p-4'>
            Best <span className='font-bold'>Eats</span>
          </h2>
          {/* Menu */}
          <nav>
                <ul className='flex flex-col p-4 text-gray-800'>
                    <li className='text-xl py-4 flex   cursor-pointer      transition'><TbTruckDelivery size={25} className='mr-4 cursor-pointer' /> <NavLink to="/">Home</NavLink></li>
                    <li className='text-xl py-4 flex   cursor-pointer    transition'><MdFavorite size={25} className='mr-4 cursor-pointer' /> <NavLink to="/servies">Services</NavLink></li>
                    <li className='text-xl py-4 flex   cursor-pointer    transition'><FaWallet size={25} className='mr-4 cursor-pointer' /><NavLink  to="/about"> About</NavLink></li>
                </ul>
            </nav>
    </div>
    </div>
  )
}

export default Navbar
