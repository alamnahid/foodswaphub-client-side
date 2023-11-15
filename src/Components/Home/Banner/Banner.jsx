import "./Banner.css"
import banner from "../../../assets/banner.png"
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <div className="flex justify-around items-center h-[80vh] mx-[10%] mt-10">

      <div className="w-[40vw]">
      <h1 className="text-[4rem] font-bold">FoodSwapHub</h1>
        <TypeAnimation className="text-[3rem] font-bold w-[40rem] text-[#fda400]"
          sequence={[
            1500,
            () => {
              setTypingStatus('Typing...');
            },
            ' -Nourish, Connect, Share',
            () => {
              setTypingStatus('Done Typing');
            },
            1000,
            () => {
              setTypingStatus('Deleting...');
            },
            '',
            () => {
              setTypingStatus('Done Deleting');
            },
          ]}
          repeat={Infinity}
        />;



        <p className="text-lg text-gray-500 mt-8 w-[40rem]">Savor the Flavor of Community! Join FoodSwapHub, where culinary generosity meets digital connections. Share your homemade delights and trade culinary creations with fellow food enthusiasts. </p>

       <div className="mt-6">
       <button className="animated-button1 capitalize rounded-2xl"><span></span>
          <span></span>
          <span></span>
          <span></span>
          See Foods</button>
       </div>

      </div>

      <div>
        <img src={banner} alt="" />

      </div>

    </div>
  );
};

export default Banner;