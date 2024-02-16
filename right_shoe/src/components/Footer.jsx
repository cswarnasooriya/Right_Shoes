
import logo from '../assets/logo.png';
const Footer = () => {
  return (
    <footer className="bg-[#131313] lg:px-16 px-8 lg:pt-24 pt-12 pb-8">
      <section className="container mx-auto">
        <div className="flex justify-between items-start gap-20  flex-wrap max-lg:flex-col">
            <div className="flex flex-col items-start">
                <a href="/" >
                    <img
                        src={logo}
                        alt="footer logo"
                        width="50"
                        height="50"
                    />
                    <p className="font-mono leading-normal text-lg text-[#b2ab9f] no-underline">Right Shoe</p>
                </a>
                <p className="mt-6 text-base leading-7 text-[#fffc] sm:max-w-sm">
                    {" "}
                    Get shoes ready for the neww term at your nearest Right Shoe store. Find your perfect size in store. Get Rewards.
                </p>

                <div className="flex items-center gap-5 mt-8">
                    <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full hoverBtn cursor-pointer">
                        <img src="/facebook.png" alt="facebook logo"  width="24" height="24"/>
                    </div>
                    <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full hoverBtn cursor-pointer">
                        <img src="/twitter.png" alt="facebook logo" width="24" height="24"/>
                    </div>

                    <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full hoverBtn cursor-pointer">
                        <img src="/instagram.png" alt="facebook logo" width="24" height="24"/>
                    </div>
                    <div className="flex justify-center items-center w-10 h-10 bg-white rounded-full hoverBtn cursor-pointer">
                        <img src="/whatsapp.png" alt="facebook logo" width="24" height="24"/>
                    </div> 
                </div>
            </div>
            <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
                <div>
                    <h4 className="text-white text-2xl leading-normal font-medium mb-6">Products</h4>
                    <ul className="p-0">
                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Air Force 144</li>
                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Air Max 105</li>

                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Air Pro 34</li><li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Air Force 1</li>

                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Air Look 189</li>
                        

                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-2xl leading-normal font-medium mb-6">Help</h4>
                    <ul>
                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">About Us</li>
                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">FAQs</li>
                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">How it Works</li>
                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Privacy Policy</li>

                        <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Payment Policy</li>
                    
                    </ul>
                </div>

                <div>
                    <h4 className="text-white text-2xl leading-normal font-medium mb-6">Get in Touch</h4>
                    <ul>
                    <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Sandaruwan Warnasooriya</li>
                    <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">customer@rightshoe.lk</li>
                     <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">+94 7672985</li>
                     <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">Colombo-7</li>
                     <li className="mt-3 text-[#fffc] list-none text-base leading-normal hover:text-[#b2ab9f] cursor-pointer">copyright @2024</li>
                     

                    </ul>
                </div>
            </div>
            
            
        </div>

        <div className="flex justify-between text-[#fffc] mt-24 max-sm:flex-col max-sm:items-center">
                <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer">
                     <p>All Right Reserved</p>
                </div>
                <p className="cursor-pointer">Terms & Conditions</p>
            </div>
      </section>
    </footer>
  )
}

export default Footer
