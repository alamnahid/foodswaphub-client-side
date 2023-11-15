/* eslint-disable react/prop-types */
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FeatureFoodCard = ({food}) => {
    return (
        <div>

            <div className="w-full lg:w-[380px] h-[500px]   bg-white border border-[#fda400] rounded-bl-[5rem] rounded-tr-[4rem] shadow dark:bg-gray-800 dark:border-gray-700">

                <div className="pt-0 relative">
                    <img className="h-[230px] rounded-tr-[4rem] w-full mx-auto rounded-bl-[3rem]" src={food?.foodImage} alt="" />

                    <div className="h-fit  absolute bottom-0 py-2 px-5 text-lg font-semibold w-full bg-[#FFB30E] rounded-bl-[3rem] text-white">
                        <p>Quantity {food?.foodquantity} Person</p>
                    </div>

                </div>
                <div className="pt-3 pb-5 px-8">
                    <h5 className="text-xl lg:text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{food?.foodName}</h5>


                    <div className="flex flex-col  pr-8">
                        <div>

                            <p className="text-lg flex items-center gap-2 font-semibold mt-2 text-gray-600 dark:text-white"> <HiOutlineLocationMarker /> {food?.pickuplocation}</p>

                            <p className="text-lg flex items-center gap-2 font-semibold mt-2 text-gray-600 dark:text-white"> <FaRegCalendarAlt /> {food?.expiredate}</p>

                            <p className="text-base font-semibold mt-2 h-12 overflow-hidden text-gray-500 dark:text-white">{food?.additionalnotes}</p>


                            <div className="flex flex-wrap gap-2 justify-between w-[300px] items-center">

                            <div className="flex gap-2 justify-between   my-5 items-center ">
                                <img className="w-10 h-10 rounded-full" src={food?.donarimage} alt="" />
                                <div className="font-medium dark:text-white text-xs">
                                    <div>{food?.donarname}</div>
                                </div>
                            </div>

                            {
                food?.foodstatus === 'delivered' ? <Link to={`/fooddetails/${food._id}`} className="text-white font-bold bg-[#ff5a0e] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Delivered</Link>

                :

            <Link to={`/fooddetails/${food._id}`} className="text-white font-bold bg-[#FFB30E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Details</Link>
            }
                            </div>

                        </div>

                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeatureFoodCard;