import Hero from "../components/Hero";
import wave from "../assets/wave.svg"



const Home = () => {
  return (
    <div className="min-h-[calc(100vh-116px)] w-full flex flex-col items-center justify-center ">
        <Hero/>
        
        <img className="bottom-[52px] absolute w-full" src={wave} alt="" />
    </div>
  );
};

export default Home;
