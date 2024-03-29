import About from "../components/About"
import Contact_us from "../components/Contact_us"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Offer from "../components/Offer"
import Products from "../components/Products"
import Testimonials from "../components/Testimonials"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <About/>
      <Offer/>
      <Testimonials/>
      <Contact_us/>
      <Footer/>
    </div>
  )
}

export default Home
