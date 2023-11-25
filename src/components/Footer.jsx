import { AiTwotonePhone } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className=" max-w-[1640px] m-auto p-6 mt-4 bg-[#e5e7eb]  grid  md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 ">
      <div >
        <div className=" p-2">
            <div>
            <h2 className="   font-medium text-[#777] md:text-[22px] ">Best Eats</h2>
                  <span className=" text-[15px]  text-[#777]">your Taggline here</span>
            </div>
            <div className="my-[15px]">
              <h3 className="   text-[#f97316]  font-medium md:text-[20px]">About Us</h3>
              <p className=" text-[#777] text-[15px] max-w-[270px] leading-[1.4]">Lorem ipsum  consectetur adipisicing elit.</p>
            </div>
            <div>
              <h4 className="  text-[#f97316] font-medium text-[17px] mb-[10px]">Contact  Us</h4>
              <a href="/" className="flex gap-x-2  text-[#f97316] items-center cursor-pointer "><AiTwotonePhone /> <span className="text-[#777] text-[14px] ">+026567454</span>  </a>
              <a href="/" className="flex gap-x-2 text-[#f97316] items-center  cursor-pointer "><MdOutlineEmail /> <span className="text-[#777] text-[14px]">yourestorem.come </span></a>
            </div>
        </div>
          
      </div>
      <div className="top-[20px] relative p-2 ">
        <h3 className="   text-[#f97316]  font-medium md:text-[18px] ">information </h3>
        <ul className=" top-[10px] relative text-[#777] text-[15px] leading-[1.6]">
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/">About Us</a></li>
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/">More Search</a></li>
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/">Blog</a></li>
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/">Testimonals</a></li>
        </ul>
      </div>
      <div className="top-[20px] relative p-2">
        <h3 className="   text-[#f97316]  font-medium md:text-[18px] "> HelpFulLinks</h3>
        <ul className=" top-[10px] relative text-[#777] text-[15px] leading-[1.6]">
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/"> Services</a></li>
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/">Supports</a></li>
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/">Terms & Condition </a></li>
          <li><a  className=" hover:text-[#f97316]  transition-all  duration-300   hover:pl-2  "   href="/">Privacypolicy</a></li>
        </ul>
      </div>
      <div className="mt-[20px] flex flex-col  ">
        <h3 className="  font-medium  text-[#777] m-[10px]">SubScribe More info</h3>
          <form className=' flex flex-col  relative'>
            <MdOutlineEmail className=" absolute top-[12px] left-[10px]  text-[#777]   " />
            <input type="text" placeholder=" Enter your Email" className=" text-[15px] h-[40px] border-none focus:outline-none px-[30px]  rounded-[50px]" />
            <input type="submit"  className=" flex   items-center justify-center  w-[100px]  ml-[10px] cursor-pointer my-[10px] text-center bg-[#f97316] text-[#fff] rounded-[50px] text-[14px] p-[4px]"/>
          </form>

      </div>
    </footer>
  )
}

export default Footer
