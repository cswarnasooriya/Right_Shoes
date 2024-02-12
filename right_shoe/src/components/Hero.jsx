import {useState, useEffect} from 'react'

const Hero = () => {
    const [imageUrl, setImageUrl] = useState('./shoe1.png');

    useEffect(()=>{
        setImageUrl(imageUrl)
    }, [imageUrl]);


  return (
    <div>
    <div id='home'>
        <section>
            <p>Our Summer Collections</p>
            <h1>
                <span>The New Arival</span>
                <span>Right Shoes</span>
            </h1>

            <p>
                Discover stylish Right shoe arrivals, quality comfort and innovation for your active life...
            </p>
        </section>
    </div>
      
    </div>
  )
}

export default Hero
