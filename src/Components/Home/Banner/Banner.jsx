/* eslint-disable react/no-unknown-property */
import { Link } from "react-router-dom";
import bannerImage from "../../../assets/images/bannerimage.png"

const Banner = () => {
    return (
        <div>


<div className="max-w-[85rem] mt-28 mx-auto px-4 sm:px-6 lg:px-8">
 
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    <div>
      <h1 className="block text-3xl font-bold text-gray-800 sm:text-3xl lg:text-5xl lg:leading-tight dark:text-white">Zero Waste, Infinite Love, Join the <span className="text-[#FFB30E]">Food Share Revolution</span></h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">We are getting healthy, nutritious food to those who need it.</p>

 
      <div className="mt-7 grid gap-3 w-full sm:inline-flex">
        <Link className="inline-flex justify-center items-center gap-x-3 text-center bg-[#FFB30E] hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800">
          Donate Foods
          <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </Link>
        <Link className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
          Request for Food
        </Link>
      </div>
      

      
    
      
    </div>
    

    <div className="relative ml-4">
      <img className="w-full rounded-md" src={bannerImage} alt="Image Description"/>
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

     
    
     
    </div>
   
  </div>
  
</div>

            
        </div>
    );
};

export default Banner;