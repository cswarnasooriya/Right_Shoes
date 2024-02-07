import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import logo from '../assets/logo.png';



const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);

    const showDropdown = () =>{
        setDropdown(!dropdown);
    };

  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center lg:bg-transparent bg-white lg:absolute fixed z-20">
      <div className="container mx-auto lg:px-6">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between xl:items-baseline items-center text-[#12222E]">
            <div className="flex flex-col gap-y-4">
                <span onClick={()=>(window.location = "/")} className="flex items-center gap-x-2 font-bold text-xl cursor-pointer">
                    <img src={logo} alt="Main Logo" className="w-[100px] mt-4" />
                    <p className="text-xl pl-0"><span className="text-3xl text-purple-800">The</span> Right</p>
                </span>
            </div>

            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">

                <a href="#home" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">Home</a>
                <a href="#about-us" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">About Us</a>
                <a href="#products" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">Products</a>
                <a href="#contact-us" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">Contact Us</a>

            </ul>

            {dropdown ? (
                <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black" >
                    <IoIosCloseCircleOutline/>
                </div>
            ): (
                <div onClick={showDropdown} className="lg:hidden text-[22px] cursor-pointer text-black">
                    <IoMenu />
                </div>

            )}
        </div>

        {dropdown ? (
            <div onClick={showDropdown} 
            className="lg:hidden w-full h-[100vh] fixed top-24 bg-white transition ease-in-out duration-300">
                    <div className="w-full h-[320px] flex flex-col items-baseline pt-8 gap-4 text-[#12222E]">
                        <ul className="text-center p-0 flex flex-col justify-center w-full gap-y-8">
                            <a href="#home" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">Home</a>
                            <a href="#about-us" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">About Us</a>
                            <a href="#products" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">Products</a>
                            <a href="#contact-us" className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">Contact Us</a> 
                        </ul>
                    </div>

            </div>
        ):
        null}

      </div>
    </nav>
  )
}

export default Navbar
