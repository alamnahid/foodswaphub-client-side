import location from "../../../assets/logo/location.svg"
import alarm from "../../../assets/logo/alarm.svg"
import pay from "../../../assets/logo/dollar.svg"
import meals from "../../../assets/logo/meals.svg"

const Feature = () => {
    return (
        <div>
<div className=" mt-20 bg-gradient-to-r from-[#faf8f8c2] to-[#f1b83b1d] py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 mx-[10%]">
    
    <div className="text-center">
      <div className="flex justify-center items-center mx-auto">
        <img className="w-[100px]" src={location} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">User-Friendly Food Listings</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Easily browse and search for a wide variety of food listings, from homemade dishes to surplus groceries.</p>
      </div>
    </div>
    <div className="text-center">
    <div className="flex justify-center items-center mx-auto">
        <img className="w-[100px]" src={alarm} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Seamless Food Request System</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Effortlessly request your desired meals or groceries with our user-friendly system.</p>
      </div>
    </div>
    <div className="text-center">
    <div className="flex justify-center items-center mx-auto">
        <img className="w-[100px]" src={pay} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Generous Food Sharing Community</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">Join a thriving community of generous individuals who are passionate about sharing food and reducing waste.</p>
      </div>
    </div>
    <div className="text-center">
    <div className="flex justify-center items-center mx-auto">
        <img className="w-[120px]" src={meals} alt="" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Food Safety and Quality Assurance</h3>
        <p className="mt-1 text-gray-600 dark:text-gray-400">We prioritize food safety and quality. Rest assured that all food shared on our platform meets the highest standards.</p>
      </div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Feature;