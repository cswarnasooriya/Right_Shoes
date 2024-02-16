import About from "../components/About"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Offer from "../components/Offer"
import Products from "../components/Products"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Products/>
      <About/>
      <Offer/>
    </div>
  )
}

export default Home
