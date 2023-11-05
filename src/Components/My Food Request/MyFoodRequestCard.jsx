

const MyFoodRequestCard = () => {
    return (
        <div>

            <div className="group flex flex-col pt-4 h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
        <img className="w-[300px] h-[260px]" src="https://i.ibb.co/862SWV8/Frame-65-4.png" alt="" />
      </div>
      <div className="p-4 md:p-6">
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          Food Name
        </h3>
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 dark:hover:text-white">
          Donor Name
        </h3>
        <p className="mt-3 text-gray-500">
        location
        </p>
        <p className="mt-3 text-gray-500">
        Expire Date
        </p>
        <p className="mt-3 text-gray-500">
        Request Date
        </p>
        <p className="mt-3 text-gray-500">
        Your Donation Amount
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#FFB30E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
          Status
        </a>
        <a className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#FFB30E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
         Cancel Request
        </a>
      </div>
    </div>
            
        </div>
    );
};

export default MyFoodRequestCard;