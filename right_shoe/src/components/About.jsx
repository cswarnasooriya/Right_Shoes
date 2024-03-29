import React from 'react'

const About = () => {

    const Card =({img, title,text}) => {
        return(
            <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 hoverBtn" >
                <div className="w-11 h-11 justify-center items-center text-white bg-[#ff6452] rounded-full">
                    <img 
                        src={img} 
                        alt="card"
                        width='35'
                        height='35'

                    />
                </div>
                <h1 className="mt-5 font-mono text-3xl leading-normal font-bold">
                    {title}
                </h1>

                <p className="mt-3 break-words text-lg leading-normal text-[slate-gray]">
                    {text}
                </p>
            </div>
        )
    }
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


    <div className="lg:px-16 px-8 py-10">
        <div className=" cursor-pointer justify-center flex flex-wrap gap-9">
            <Card img='/truck.png' text='Enjoy seamless shopping with our comlimentary shipping service.' title='Free Shipping' />
            <Card img='/sheid.png' text='Experience worry-free transactions with our secure payment options.' title='Secure Payment'/>
            <Card img='/sup.png' text='Our dedicated team is here to assist you every step of the way.' title='Love to help you'/>
        </div>
    </div>



    </>
  )
}

export default About
