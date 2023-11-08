/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
// import food from "../../../../src/JSON/bannerfood.json"
// import Lottie from "lottie-react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerr1 from "../../../assets/images/banner 1.jpeg"
import banner2 from "../../../assets/images/banner 2.jpg"
import banner3 from "../../../assets/images/banner 3.avif"
import banner4 from "../../../assets/images/banner 4.avif"



const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#faf8f8c2] to-[#f1b83b1d]">


      <div className="max-w-[85rem] mt-6 mx-auto px-4 sm:px-6 lg:px-8">

        <div className="">
          <Carousel
            autoPlay
            showArrows={false}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            interval={3000}
          >
            <div className="mb-8 flex py-8 lg:py-14 justify-between items-center gap-12 flex-col xl:flex-row">
              <div className="xl:w-[30vw]">
                <h1 className="block text-left text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">Zero Waste, Infinite Love, Join the <span className="text-[#FFB30E]">Food Share Revolution</span></h1>
                <p className="mt-3 text-left text-lg text-gray-800 dark:text-gray-400">We are getting healthy, nutritious food to those who need it.</p>


                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link to="/addnewfoods" className="inline-flex justify-center items-center gap-x-3 text-center bg-[#FFB30E] hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                    Donate Foods
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </Link>
                  <Link to="/availablefoods" className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                    Request for Food
                  </Link>
                </div>
              </div>
              <div className="relative ml-4 w-[70vw] md:w-[40vw] lg:w-[30vw]">
                <img className="w-full lg:h-[50vh] rounded-md" src={bannerr1} alt="" />
              </div>
            </div>


           {/* div 2  */}

           <div className="mb-8 flex py-8 lg:py-14 justify-between items-center gap-12 flex-col xl:flex-row">
              <div className="xl:w-[30vw]">
                <h1 className="block text-left text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">Share the Joy of Food <span className="text-[#FFB30E]">With Your Neighbours</span></h1>
                <p className="mt-3 text-left text-lg text-gray-800 dark:text-gray-400">Join our community to share surplus food, connect with food enthusiasts, and make a difference in your neighborhood.</p>


                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link to="/addnewfoods" className="inline-flex justify-center items-center gap-x-3 text-center bg-[#FFB30E] hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                    Donate Foods
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </Link>
                  <Link to="/availablefoods" className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                    Request for Food
                  </Link>
                </div>
              </div>
              <div className="relative ml-4 w-[70vw] md:w-[40vw] lg:w-[30vw] ">
                <img className="w-full lg:h-[50vh] rounded-md" src={banner2} alt="" />
              </div>
            </div>

            {/* div 3 */}

            <div className="mb-8 flex py-8 lg:py-14 justify-between items-center gap-12 flex-col xl:flex-row">
              <div className="xl:w-[30vw]">
                <h1 className="block text-left text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">Nourishing Communities <span className="text-[#FFB30E]">, Connecting Through Food</span></h1>
                <p className="mt-3 text-left text-lg text-gray-800 dark:text-gray-400">Discover diverse, nutritious meals and groceries or share your culinary creations with those in need.</p>


                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link to="/addnewfoods" className="inline-flex justify-center items-center gap-x-3 text-center bg-[#FFB30E] hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                    Donate Foods
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </Link>
                  <Link to="/availablefoods" className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                    Request for Food
                  </Link>
                </div>
              </div>
              <div className="relative ml-4 w-[70vw] md:w-[40vw] lg:w-[30vw]">
                <img className="w-full lg:h-[50vh] rounded-md" src={banner3} alt="" />
              </div>
            </div>


            {/* div 4 */}


            <div className="mb-8 flex py-8 lg:py-14 justify-between items-center gap-12 flex-col xl:flex-row">
              <div className="xl:w-[30vw]">
                <h1 className="block text-left text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">Eliminating Hunger Together <span className="text-[#FFB30E]">, Step towards a better world</span></h1>
                <p className="mt-3 text-left text-lg text-gray-800 dark:text-gray-400">Let's work as a team to fight hunger and reduce food waste. Every meal shared is a step towards a better world.</p>


                <div className="mt-7 grid gap-3 w-full sm:inline-flex">
                  <Link to="/addnewfoods" className="inline-flex justify-center items-center gap-x-3 text-center bg-[#FFB30E] hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
                    Donate Foods
                    <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  </Link>
                  <Link to="/availablefoods" className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
                    Request for Food
                  </Link>
                </div>
              </div>
              <div className="relative ml-4 w-[70vw] md:w-[40vw] lg:w-[30vw]">
                <img className="w-full lg:h-[50vh] rounded-md" src={banner4} alt="" />
              </div>
            </div>

          </Carousel>



        </div>

      </div>


    </div>
  );
};

export default Banner;