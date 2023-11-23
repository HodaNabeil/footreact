

import {AiOutlineMenu ,AiOutlineSearch} from 'react-icons/ai';

function Navbar() {
  return (
    <div className=' flex justify-between  m-auto  max-w-[1640px] items-center  p-4'>
      {/*Lifte */}
      <div className='flex  items-center'>
        <div >
            <AiOutlineMenu size={30}  className=' cursor-pointer'/>
        </div>
        <h1 className='  text-2xl sm:text-3xl  lg:text-4xl  px-2'>
        Best <span className=' font-bold '> Eats</span>
        </h1>
        <div className=' hidden md:flex  text-[14px] p-1 bg-gray-200 rounded-full text-sm  items-center'>
          <p className=' bg-black text-white p-2 rounded-full'>Delivery</p>
          <p  className=' p-2'>Pickup</p>
        </div>
      </div>
      {/* Input */}
      <div className='flex items-center bg-gray-200 rounded-full w-[200px] sm:w-[400px] lg:w-[500px] p-2'>
        <AiOutlineSearch size={40 } className='p-2' />
        <input  className=' bg-transparent  focus:outline-none '  type="text" placeholder='Search Foot' />

      </div>
    </div>
  )
}

export default Navbar
