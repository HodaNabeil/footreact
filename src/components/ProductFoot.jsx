
import {data} from '../data/data.js';

import { BsCartPlus } from "react-icons/bs";

function ProductFoot() {
  return (
    <div>
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
  )
}

export default ProductFoot
