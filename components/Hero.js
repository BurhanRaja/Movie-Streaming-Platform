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
      <div className="group">
        <div className="carouselContainer m-auto max-w-[80rem] relative overflow-visible ">
          <div className="slider flex h-[90%] w-[320rem] transition-all duration-500">
            <div className="bg-black w-[160rem] h-[100%] rounded-lg mx-4">
              <div className="content flex justify-start">
                <div className="text w-[45%] p-16">
                  <p className="text-white text-3xl">Movie Name</p>
                  <p className="text-slate-300">Hotstar Special . 2019</p>
                  <p className="text-white">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries
                  </p>
                </div>
                <div className="image w-55%">
                  <Image src="/images/moviename.webp" className="rounded-lg" width={780} height={100} />
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
            className="prevBtn text-4xl font-bold group-hover:opacity-70 opacity-20 py-10 text-white"
            onClick={onPrev}
          >
            <FaAngleLeft />
          </button>
          <button
            className="nextBtn text-4xl font-bold group-hover:opacity-70 opacity-20 py-10 text-white"
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
