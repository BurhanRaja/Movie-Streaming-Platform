import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Hero() {
  let trans = 0;
  const onNext = () => {
    trans -= 80;
    // document.querySelector(".slider").style.transform = `transalteX(-${trans}rem)`
    document.querySelector(
      ".slider"
    ).style.transform = `translateX(${trans}rem)`;
  };
  const onPrev = () => {
    trans += 80;
    // document.querySelector(".slider").style.transform = `transalteX(-${trans}rem)`
    document.querySelector(
      ".slider"
    ).style.transform = `translateX(${trans}rem)`;
  };

  return (
    <section>
      <div class="bg-gradient-to-r from-indigo-500"></div>
      <div className="group">
        <div className="carouselContainer m-auto max-w-[80rem] relative overflow-visible ">
          <div className="slider flex h-[90%] w-[320rem] transition-all duration-500">
            <div className="bg-slate-900 to-transparent w-[160rem] h-[100%] rounded-lg mx-4">
              <div className="content flex justify-start">
                <div className="text w-[45%] py-16 pl-16 relative">
                  <p className="text-white text-3xl font-extrabold mb-2">Chhichhore</p>
                  <p className="text-slate-400 font-semibold mb-2 text-lg">Hindi . Drama . 2019</p>
                  <p className=" text-slate-300">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled
                  </p>
                </div>


                <div className="image w-40% z-10 relative">
                  <Image src="/images/moviename.webp" className="rounded-lg" width={765} height={100} />
                  <div class="absolute top-0 right-0 bottom-0 left-0 w-[100%] h-[100%] overflow-hidden image-gradient"></div>
                </div>
              </div>
            </div>
            <div className="bg-blue-100 w-[160rem]  h-[100%] rounded-lg mx-4"></div>
            <div className="bg-blue-600 w-[160rem]  h-[100%] rounded-lg mx-4"></div>
            <div className="bg-blue-900 w-[160rem]  h-[100%] rounded-lg mx-4"></div>
          </div>
        </div>
        <div className="navigationBtn absolute w-[100%] px-2 flex justify-between top-[35%] z-10">
          <button
            className="prevBtn text-5xl font-extrabold group-hover:opacity-70 opacity-20 py-10 text-white"
            onClick={onPrev}
          >
            <FaAngleLeft />
          </button>
          <button
            className="nextBtn text-5xl font-extrabold group-hover:opacity-70 opacity-20 py-10 text-white"
            onClick={onNext}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>      
    </section>
  );
}

export default Hero;
