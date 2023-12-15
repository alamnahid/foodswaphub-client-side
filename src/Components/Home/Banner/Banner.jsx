import "./Banner.css"
import banner from "../../../assets/banner.png"
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
const Banner = () => {
  const [typingStatus, setTypingStatus] = useState('Initializing');

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around px-3 lg:px-0 items-center lg:h-[80vh] lg:mx-[10%] mt-10">

      <div className="lg:w-[40vw]">
      <h1 className="text-[2rem] lg:text-[4rem] font-bold">FoodSwapHub</h1>
        <TypeAnimation className=" text-[1.6rem] lg:text-[3rem] font-bold lg:w-[40rem] text-[#fda400]"
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



        <p className="text-lg text-gray-500 mt-8 lg:w-[40rem]">Savor the Flavor of Community! Join FoodSwapHub, where culinary generosity meets digital connections. Share your homemade delights and trade culinary creations with fellow food enthusiasts. </p>

       <div className="mt-6">
       <Link to='/availablefoods'><Button text={'See Foods'}></Button></Link>
       </div>

      </div>

      <div>
        <img src={banner} alt="" />

      </div>

    </div>
  );
};

export default Banner;