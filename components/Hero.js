function Hero() {
  return (
    <section>

        <div className="carouselContainer w-[100%]">
            <div className="carousel p-2 px-8 h-[100%] w-[100%] flex justify-center items-center relative overflow-hidden">
                <div className="absolute w-[98%] flex justify-between items-center ">
                    <button>Next</button>
                    <button>Prev</button>
                </div>

                <div className="relative flex justify-between items-center w-[100%]">
                <div className="w-[300rem] bg-black h-44">

                </div>
                <div className="w-[50rem] bg-black h-44">

                </div>
                </div>

            </div>

        </div>
        
    </section>
  )
}

export default Hero