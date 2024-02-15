import React from 'react'

const About = () => {
  return (
    <>
    <div id='about-us' className="lg:py-24 py-12 lg:px-16 px-8">
    <main className="container mx-auto flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col">
            <h1 className="font-mono text-5xl leading-[58px] capitalize font-bold lg:max-w-lg">
                We Provide You
                <span className="text-[#FF6452]"> Super</span>
                <span className="text-[#FF6452]"> Quality</span> Shoes
            </h1>

            <p className="mt-4 lg:max-w-lg text-lg text-[#6d6d6d] leading-7">
                Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegence.
            </p>
            <p className="mt-4 lg:max-w-lg text-lg text-[#6d6d6d] leading-7">
                Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className='mt-11'>
                <button className="flex justify-center items-center gap-2 px-7 py-4 border-none text-lg leading-none rounded-full bg-[#ff6452] text-white hoverBtn">View Details</button>
            </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
            <img 
                src="/shoe-8.png" 
                alt="shoe-8"
                width="570"
                height="522"
                className="object-contain max-w-full h-auto"

             />
        </div>
    </main>
      
    </div>


    <div>

    </div>


    
    </>
  )
}

export default About
