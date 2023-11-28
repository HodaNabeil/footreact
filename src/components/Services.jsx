
import  hero from '../Img/ser.jpg'
import {data} from '../rtk/Slices/data/data.js'
import { BsCartPlus } from "react-icons/bs";

import Footer from './Footer.jsx'
import ScrollTopButton from './ScrollTopButton.jsx';

function Services() {
  return (
    <section className=" max-w-[1640px] m-auto p-4 pb-[0] relative overflow-hidden">
        <div className=' relative'>
          <img  className=' object-cover w-full h-[500px]' src= {hero} alt="hero_img" />
            <div className='servies   absolute  top-[35%] left-[20%]'>
            <h2 className='flex  justify-center  text-[#000] items-center text-[50px]  sm:text-[70px] md:text-[100px]  '>
                delicious food
              </h2>
            </div>
        </div>
        {/*  Our Services */}
        <div>
          <h3 className='text-[50px] text-[#f97316] flex  justify-center items-center m-[30px]  text-center'>Services</h3>
          <div className='  grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
              data.map((foot)=> {
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
        {/* Footer */}
        <ScrollTopButton/>
        <Footer/>
    </section>
  )
}

export default Services
