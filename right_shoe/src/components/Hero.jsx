import {useState, useEffect} from 'react'
import { FaArrowCircleRight } from "react-icons/fa";


const Hero = () => {
    const [imageUrl, setImageUrl] = useState('./shoe1.png');

    useEffect(()=>{
        setImageUrl(imageUrl)
    }, [imageUrl]);


  return (
    <div>
    <div id='home' className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-y-10 container mx-auto">
        <section className="relative z-10 xl:w-2/5 flex flex-col justify-center items-start px-8 pt-28">
            <p className="text-xl text-[#ff6452]">Our Summer Collections</p>
            <h1 className="mt-10 font-palanquin text-black text-8xl max-sm:text-[72px] leading-[106px] max-sm:leading-[82px] font-bold">
                <span className="bg-white relative z-10 pr-10 lg:text-8xl font-palanquin xl:whitespace-nowrap">The New Arival</span>{" "}
                <br />
                <span className="text-[#ff6452] inline-block mt-3">Right Shoes</span>
            </h1>

            <p className="text-[#6D6D6D] text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
                Discover stylish Right shoe arrivals, quality comfort and innovation for your active life...
            </p>

            <button className=" flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#FF6452] text-white hoverBtn">
                Shop Now
                <FaArrowCircleRight className="ml-2 rounded-full text-2xl" />
            </button>

            <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                <div>
                    <p className="text-5xl font-mono font-bold text-black">1k+</p>
                    <p className="leading-7 font-mono text-[#6D6D6D] font-bold">Brands</p>
                </div>
                <div>
                    <p className="text-5xl font-mono font-bold text-black">200+</p>
                    <p className="leading-7font-mono text-[#6D6D6D] font-bold">Shops</p>
                </div>
                <div>
                    <p className="text-5xl font-mono font-bold text-black">450k+</p>
                    <p className="leading-7 font-mono text-[#6D6D6D] font-bold">Customers</p>
                </div>
            </div>
        </section>
    </div>
      
    </div>
  )
}

export default Hero
