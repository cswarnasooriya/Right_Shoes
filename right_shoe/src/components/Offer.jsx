import { FaArrowCircleRight } from "react-icons/fa";


const Offer = () => {
  return (
    <div className="lg:py-24 py-12 lg:px-16 px-8">
      <div className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
        <div className="flex-1">
            <img src="/banner.png" 
                alt="offers"
                width='50' 
                height='50'
                className="object-contain w-full max-w-full h-auto"
             />
        </div>


        <div className="flex flex-col flex-1">
            <h1 className="font-mono text-5xl capitalize font-bold lg:max-w-lg">
                <span className="text-[#ff6452] ">Special</span> Offer
            </h1>

            <p className="mt-4 lg:max-w-lg text-[#6d6d6d] text-lg leading-7">
              Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selection to incredible savings, we offer unparalleled value that sets us apart.

            </p>

            <p className="mt-6 lg:max-w-lg text-[#6d6d6d] text-lg leading-7">
              Navigate a realm of possibilites designed to fulfill your unique dsires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
            </p>

            <div className="mt-11 flex flex-wrap gap-4">
                <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#ff6452] text-white hoverBtn ">Shop Now
                <FaArrowCircleRight className="ml-2 rounded-full text-2xl"/></button>
                <button className="flex justify-center items-center gap-2 px-7 py-4  text-lg leading-none rounded-full bg-white border-[#6d6d6d] border border-solid text-[#6d6d6d] hoverBtn ">Learn More</button>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Offer
