import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function CardSlider() {
  let trans = 0;
  const onNext = () => {
    if (trans < 80) {
      trans += 80
    }
    document.querySelector(
        ".cardslider"
      ).style.transform = `translateX(-${trans}rem)`;
  };
  const onPrev = () => {
    if (trans > 0) {
      trans -= 80;
    }
    document.querySelector(
        ".cardslider"
        ).style.transform = `translateX(${trans}rem)`;
  };

  let data = [1, 2, 3, 4, 5, 6];

  return (
    <section className="my-4">
      <div className="group relative">
        <div className="mx-auto max-w-[80rem] relative overflow-visible ">
          <div className={`cardslider flex h-[50%] w-[160rem] transition-all duration-500`}>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-blue-300 rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
            <div className="card w-[10rem] h-[14rem] bg-black rounded-lg mr-3"></div>
          </div>
        </div>
        <div className="navigationBtn absolute w-[100%] px-2 flex justify-between top-[30%] z-10">
          <button className="prevBtn text-2xl font-extrabold group-hover:opacity-70 opacity-0 py-10 text-white" onClick={onPrev}>
            <FaAngleLeft />
          </button>
          <button className="nextBtn text-2xl font-extrabold group-hover:opacity-70 opacity-0 py-10 text-white" onClick={onNext}>
            <FaAngleRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CardSlider;
