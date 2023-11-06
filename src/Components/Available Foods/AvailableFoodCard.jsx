import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AvailableFoodCard = ({food}) => {
    return (
        <div>

<div className="max-w-[33vw] px-8  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

<div className="pt-4 relative">
    <img className=" rounded-xl" src="https://i.ibb.co/pjBfk5S/closeup-one-hand-holding-small-plant-growing-out-soil-created-with-generative-ai-762026-38191.jpg" alt="" />

    <div className="h-fit absolute bottom-0 py-2 px-3 text-lg font-semibold w-full bg-[#FFB30E] rounded-b-lg text-white">
        <p>Food Quantity 3 Person</p>
    </div>

</div>
<div className="pt-3 pb-5">
    <h5 className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{food?.foodName}</h5>


    <div className="flex flex-col  pr-8">
        <div>

            <p className="text-lg flex items-center gap-2 font-semibold mt-2 text-gray-600 dark:text-white"> <HiOutlineLocationMarker /> Location</p>

            <p className="text-lg flex items-center gap-2 font-semibold mt-2 text-gray-600 dark:text-white"> <FaRegCalendarAlt /> Date And Time</p>

            <p className="text-base font-semibold mt-2 h-12 overflow-hidden text-gray-500 dark:text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, sint fugit! Nemo rem cupiditate aperiam!</p>


            <div className="flex justify-between items-center">

            <div className="flex my-5 items-center space-x-4">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-5.jpg" alt="" />
                <div className="font-medium dark:text-white">
                    <div>Jese Leos</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                </div>
            </div>

            <Link className="text-white font-bold bg-[#FFB30E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>


            </div>

        </div>

        
    </div>
</div>
</div>
            
        </div>
    );
};

export default AvailableFoodCard;