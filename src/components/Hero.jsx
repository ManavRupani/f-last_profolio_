import Card from "./Card";
import Navbar from "./Navbar";
import imge from "../static/images/hero_t1_s.png"
function Hero() {
  return (
    <div className="h-[750px] bg-[#f0ffd9] overflow-visible rounded-b-[150px] flex flex-col">
      <Navbar />
      {/* //retangle black */}
      <div className="h-[500px] w-full ">
        <div className="flex flex-col items-center justify-center mt-10">
          <img src={imge} alt="hero-image" className="fit-cover w-[80%] " />
        </div>
        <div className="mt-10 flex  items-center justify-around">
          <div>Text here</div>
          <div>image here...</div>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
