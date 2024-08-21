import Navbar from './Navbar';

function Hero() {
  return (
    <div className="h-[900px] bg-[#ecfbd5] overflow-visible rounded-b-[150px] flex flex-col">
  <Navbar />
  <div className="flex-grow flex justify-center items-center text-center uppercase font-bold text-[30px]">
    <span
      style={{
        WebkitTextStroke: '2px #9b9ea7',
        textStroke: '2px #9b9ea7',
        color: 'transparent',
      }}
      className="text-[100px] font-sans-serif"
    >
      Hi, This is Manav <br/>Rupani
    </span>
  </div>
</div>

    

  );
}

export default Hero;
