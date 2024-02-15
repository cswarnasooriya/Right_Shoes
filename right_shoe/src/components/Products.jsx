

const Products = () => {
    //create a card to add item details

    const Card = ({img, title, rating, price}) => {
        return(
            <div className="flex flex-1 flex-col w-full max-sm:w-full bg-gray-200 border-2 rounded-md cursor-pointer hoverBtn">
                <img src={img} alt=""  className="w-[280px] max-w-full ]"/>
                <div className="mt-8 flex justify-start gap-2.5">
                    <img src="/star.png" alt="ratings"
                    width='24' height='24' />
                    <p className="text-xl leading-normal text-[#6d6d6d] ">
                        ({rating})
                    </p>
                </div>
                <h1 className="mt-2 text-2xl leading-normal font-semibold font-sans">
                    {title}
                </h1>

                <p className="mt-2 font-semibold text-[#ff6452] text-2xl leading-normal">
                    LKR{price}
                </p>
            </div>
        )
    }
  return (
    <div className="lg:py-24 py-12 lg:px-16 px-8" id="products">
      <main className="container mx-auto max-sm:mt-12">
        <div className="flex flex-col justify-start gap-5">
            <h2 className="text-5xl font-serif font-bold">
                <span className="text-[#ff6452]">Popular</span> Products
            </h2>

            <p className="lg:max-w-lg text-[#6d6d6d] leading-7">
                Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design and value.
            </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14 mt-16 bg-[url('./bg.png)]">
            <Card img='/s1.png' price=' 6850.50' rating='4.3' title='Nike Air Jordan - 01' className="hoverBtn"/>
            <Card img='/s2.png' price=' 4990.50' rating='4.7' title='Nike Air Jordan - 10'/>
            <Card img='/s1.png' price=' 5580.50' rating='4.4' title='Nike Air Jordan - 150'/>
            <Card img='/s2.png' price=' 6250.50' rating='4.5' title='Nike Air Jordan - 001'/>
            <Card img='/s1.png' price=' 6850.50' rating='4.3' title='Nike Air Jordan - 01' className="hoverBtn"/>
            <Card img='/s2.png' price=' 4990.50' rating='4.7' title='Nike Air Jordan - 10'/>
            <Card img='/s1.png' price=' 5580.50' rating='4.4' title='Nike Air Jordan - 150'/>
            <Card img='/s2.png' price=' 6250.50' rating='4.5' title='Nike Air Jordan - 001'/>

        </div>
      </main>
    </div>
  )
}

export default Products
