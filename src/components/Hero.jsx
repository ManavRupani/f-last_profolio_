import Navbar from './Navbar';

function Hero() {
  return (
    <div className="relative h-[900px] bg-[#ecfbd5] overflow-visible rounded-b-[150px]">
      <Navbar />
      <div className="w-[1000px] mx-auto text-center uppercase font-bold text-[40px] py-10">
        <span
          style={{
            WebkitTextStroke: '2px #9b9ea7',
            textStroke: '2px #9b9ea7',
            color: 'transparent',
          }}
          className="text-[140px] font-sans-serif"
        >
          Hi, This is Manav Rupani
        </span>
      </div>
    </div>
    

  );
}

export default Hero;
