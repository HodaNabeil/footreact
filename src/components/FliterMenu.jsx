
import { BsCartPlus } from "react-icons/bs";
import { useState } from 'react'
import   {data}  from'../data/data.js'
function FliterMenu() {
  const [foodmenu, setFootmenu]=useState(data);

  // Filter Type 
  const fliterType =(category)=> {
    setFootmenu(data.filter((item ) => {
        return item.category === category 
      }
    )
    )
  };

  // Filter Price 
  const fliterPrice = (price)=> {
    setFootmenu(
      data.filter((item) => {
        return item.price === price
      })
    )
  }
  return (
    <div className=' max-w-[1640px] m-auto p-6'>
      <h2 className=' flex justify-center  mb-4 items-center m-auto text-[#f97316]  text-[25px] md:[35px] font-bold'>Top Rated Menu Items</h2>
        {/* Filter Type */}
        <div className='flex  flex-col md:flex-row  justify-between items-center ' >
          <div className='flex flex-col '>
            <h3 className='text-[19px] font-medium  text-gray-600 p-3'>Filter Type</h3>
            <div >
              <button  onClick={ ()=> setFootmenu(data)}   className=' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>All</button>
              <button  onClick={()=> {fliterType('burger')}} className=' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>Burgers</button>
              <button onClick={()=> {fliterType('pizza')}} className=' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>Pizza</button>
              <button onClick={()=> {fliterType('salad')}} className=' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>Salads</button>
              <button onClick={()=> {fliterType( 'chicken')}} className=' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>Chicken</button>
            </div>
          </div>
          {/*Filter Price */}
          <div>
          <h3 className='text-[19px] font-medium  text-gray-600 p-3'>Filter Price</h3>
          <div>
            <button  onClick={()=> { fliterPrice('$')}}  className= ' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>$</button>
            <button  onClick={()=> { fliterPrice('$$')}} className= ' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>$$</button>
            <button  onClick={()=> { fliterPrice('$$$')}} className=' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>$$$</button>
            <button  onClick={()=> { fliterPrice('$$$$')}} className=' mr-[12px] border-[#f97316] hover:bg-[#f97316] transition duration-300  hover:text-white  mb-2'>$$$$</button>
          </div>
          </div>
        </div>
        {/* Fliter Menu */}
        <div className=' grid  sm:grid-cols-2  gap-4  md:gap-4  w-full  md:grid-cols-3  lg:grid-cols-4 my-4  '>
          {
            foodmenu.map((foot)=> {
              return (
                <div key={foot.id} className=' shadow-lg   rounded-lg rounded-t-lg  relative '>
                    <BsCartPlus size={25} className=" absolute top-0 right-0 bg-orange-600  w-[30px] h-[30px]  rounded-l-lg  p-1 cursor-pointer  text-white" />
                    <img  className=' object-cover max-w-full h-[300px] w-full rounded-sm ' src={foot.image} alt={foot.name} />
                      <div className='flex justify-between items-center  p-2 mb-1'>
                        <p>{foot.name}</p>
                        <p>
                          <span className="bg-orange-600 rounded-lg text-white p-1 ">{foot.price} </span>
                        </p>
                      </div>
                      <button className="  text-[#f97316] m-[10px] border-[#f97316]   hover:text-[#fff] hover:bg-[#f97316]  transition duration-300">
                        Order
                      </button>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default FliterMenu
