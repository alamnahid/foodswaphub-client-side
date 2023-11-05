import location from "../../../assets/logo/location.svg"
import alarm from "../../../assets/logo/alarm.svg"
import pay from "../../../assets/logo/dollar.svg"
import meals from "../../../assets/logo/meals.svg"

const Feature = () => {
    return (
        <div>
<div className=" mt-28 bg-gradient-to-r from-[#faf8f8c2] to-[#f1b83b1d] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 mx-[10%]">
    
    <div className="text-center">
      <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
        <img src={location} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
      </div>
    </div>
    <div className="text-center">
      <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
        <img src={alarm} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
      </div>
    </div>
    <div className="text-center">
      <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
        <img src={pay} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Documentation</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
      </div>
    </div>
    <div className="text-center">
      <div className="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
       <img src={meals} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Feature;