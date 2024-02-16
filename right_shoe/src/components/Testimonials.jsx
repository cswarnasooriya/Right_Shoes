import React from 'react'

const Testimonials = () => {
  return (
    <div className="lg:py-24 py-12 lg:px-16 px-8 bg-[$f5f6ff]">
      <div className="container mx-auto">
        <h1 className="font-mono text-center text-5xl font-bold">
            What Our
            <span className="text-[#ff6452]"> Customers</span> Say?
        </h1>

        <p className="text-lg text-[#6d6d6d] leading-7 m-auto mt-4 max-w-lg text-center">
            Hear genuine stories from our satisfied customers about their exceptional experience with us.
        </p>

        <div>
            <div>
                <img src="/customer1.png" alt="customer-1" className="rounded-full object-cover w-[120px] h-[120px]" />
                <p>
                  The attention to detail and the quality of the product exceed my expections. Highly recomended.
                </p>

                <div>
                  <img src="/star.png" alt="star icon"
                  className="object-contain m-0"
                  height='24'
                  width='24'
                   />
                   <p>(4.3)</p>
                </div>
                <h1>Monarich Brown</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
