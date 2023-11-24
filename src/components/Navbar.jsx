
// import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill,BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa';
import {MdFavorite, MdHelp} from 'react-icons/md';

import { useState } from 'react';
function Navbar() {
  const [nav, setNav] =useState(true)
  return (
    <div className=' flex justify-between  m-auto  max-w-[1640px] items-center  p-4'>
      {/*Lifte */}
      <div className='flex  items-center'>
        <div  onClick={()=> {setNav(!nav) }}>
            <AiOutlineMenu size={30}  className=' cursor-pointer'/>
        </div>
        <h1 className='  top-[20px] text-[30px] md:top-[50px]   lg:text-4xl  px-2'>
        Best <span className=' font-bold '> Eats</span>
        </h1>
        <div className=' hidden md:flex  text-[14px] p-1 bg-gray-200 rounded-full text-sm  items-center'>
          <p className=' bg-black text-white p-2 rounded-full'>Delivery</p>
          <p  className=' p-2'>Pickup</p>
        </div>
      </div>
      {/* Input */}
      <div className='flex items-center bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px] p-2'>
        <AiOutlineSearch size={35} className='p-2' />
        <input  className=' bg-transparent  focus:outline-none  w-full'  type="text" placeholder='Search Foot' />
      </div>
      {/* Card */}
      <button className=' bg-black text-white hidden md:flex items-center py-2 rounded-full '>
        <BsFillCartFill size={20} className='mr-2' /> Card
      </button>
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
                    <li className='text-xl py-4 flex   cursor-pointer  hover:text-[#f97316]   transition'><TbTruckDelivery size={25} className='mr-4 cursor-pointer' /> <a href="/">Orders</a></li>
                    <li className='text-xl py-4 flex   cursor-pointer  hover:text-[#f97316]   transition'><MdFavorite size={25} className='mr-4 cursor-pointer' /> <a href="/">Favorites</a></li>
                    <li className='text-xl py-4 flex   cursor-pointer  hover:text-[#f97316]   transition'><FaWallet size={25} className='mr-4 cursor-pointer' /><a href="/"> Wallet</a></li>
                    <li className='text-xl py-4 flex   cursor-pointer  hover:text-[#f97316]   transition'><MdHelp size={25} className='mr-4 cursor-pointer' /> Help</li>
                    <li className='text-xl py-4 flex   cursor-pointer  hover:text-[#f97316]   transition'><AiFillTag size={25} className='mr-4 cursor-pointer' /> Promotions</li>
                    <li className='text-xl py-4 flex   cursor-pointer  hover:text-[#f97316]   transition'><BsFillSaveFill size={25} className='mr-4 cursor-pointer' /> Best Ones</li>
                    <li className='text-xl py-4 flex   cursor-pointer  hover:text-[#f97316]   transition'><FaUserFriends size={25} className='mr-4 cursor-pointer' /> Invite Friends</li>
                </ul>
            </nav>
    </div>
    </div>
  )
}

export default Navbar
