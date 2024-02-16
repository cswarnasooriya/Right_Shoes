

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

        <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            <div className="flex justify-center items-center flex-col">
                <img src="/customer-1.png" alt="customer-1" className="rounded-full object-cover w-[120px] h-[120px]" />
                <p className="mt-6 max-w-sm text-center text-lg text-[#6d6d6d] leading-7">
                  The attention to detail and the quality of the product exceed my expections. Highly recomended.
                </p>

                <div className="mt-3 flex juce items-center gap-2.5">
                  <img src="/star.png" alt="star icon"
                  className="object-contain m-0"
                  height='24'
                  width='24'
                   />
                   <p className="text-xl text-[#6d6d6d]">(4.3)</p>
                </div>
                <h1 className="mt-1 font-mono text-3xl text-center font-bold">Monarich Brown</h1>
            </div>

            <div className="flex justify-center items-center flex-col">
                <img src="/customer-1.png" alt="customer-1" className="rounded-full object-cover w-[120px] h-[120px]" />
                <p className="mt-6 max-w-sm text-center text-lg text-[#6d6d6d] leading-7">
                  The attention to detail and the quality of the product exceed my expections. Highly recomended.
                </p>

                <div className="mt-3 flex juce items-center gap-2.5">
                  <img src="/star.png" alt="star icon"
                  className="object-contain m-0"
                  height='24'
                  width='24'
                   />
                   <p className="text-xl text-[#6d6d6d]">(4.4 )</p>
                </div>
                <h1 className="mt-1 font-mono text-3xl text-center font-bold">Wint Arnold</h1>
            </div>

            <div className="flex justify-center items-center flex-col">
                <img src="/customer-1.png" alt="customer-1" className="rounded-full object-cover w-[120px] h-[120px]" />
                <p className="mt-6 max-w-sm text-center text-lg text-[#6d6d6d] leading-7">
                  The attention to detail and the quality of the product exceed my expections. Highly recomended.
                </p>

                <div className="mt-3 flex juce items-center gap-2.5">
                  <img src="/star.png" alt="star icon"
                  className="object-contain m-0"
                  height='24'
                  width='24'
                   />
                   <p className="text-xl text-[#6d6d6d]">(4.6)</p>
                </div>
                <h1 className="mt-1 font-mono text-3xl text-center font-bold">Raj Singh</h1>
            </div>

            <div className="flex justify-center items-center flex-col">
                <img src="/customer-1.png" alt="customer-1" className="rounded-full object-cover w-[120px] h-[120px]" />
                <p className="mt-6 max-w-sm text-center text-lg text-[#6d6d6d] leading-7">
                  The attention to detail and the quality of the product exceed my expections. Highly recomended.
                </p>

                <div className="mt-3 flex juce items-center gap-2.5">
                  <img src="/star.png" alt="star icon"
                  className="object-contain m-0"
                  height='24'
                  width='24'
                   />
                   <p className="text-xl text-[#6d6d6d]">(4.5)</p>
                </div>
                <h1 className="mt-1 font-mono text-3xl text-center font-bold">Calibri Untoose</h1>
            </div>


            <div className="flex justify-center items-center flex-col">
                <img src="/customer-1.png" alt="customer-1" className="rounded-full object-cover w-[120px] h-[120px]" />
                <p className="mt-6 max-w-sm text-center text-lg text-[#6d6d6d] leading-7">
                  The attention to detail and the quality of the product exceed my expections. Highly recomended.
                </p>

                <div className="mt-3 flex juce items-center gap-2.5">
                  <img src="/star.png" alt="star icon"
                  className="object-contain m-0"
                  height='24'
                  width='24'
                   />
                   <p className="text-xl text-[#6d6d6d]">(4.7)</p>
                </div>
                <h1 className="mt-1 font-mono text-3xl text-center font-bold">Loise Madone</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
