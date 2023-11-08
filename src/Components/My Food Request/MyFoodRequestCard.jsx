import axios from "axios";
import Swal from "sweetalert2";


const MyFoodRequestCard = ({food, refetch}) => {
  // console.log(food.foodstatus.toLowerCase())


  const handleDelete = (id)=>{

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Cancel this'
      }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`https://b8a11-server-side-jannat-jui.vercel.app/foodrequestcollection/v1/${id}`)
            // .then(res=>res.json())
            .then(data => {
                // console.log(data.data);
                if (data.data.deletedCount > 0) {
                    Swal.fire(
                        'Cancel!',
                        'Your food request has been canceled.',
                        'success'
                    )
                    refetch()
                }
            })
          
        }
      })
    }


    return (
        <div>

            <div className="group flex flex-col pt-4 h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="h-52 flex flex-col justify-center items-center rounded-t-xl">
        <img className="w-[300px] h-[260px]" src={food?.foodimage} alt="" />
      </div>
      <div className="p-4 md:p-6">
        
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
          {food?.foodname}
        </h3>
        <h3 className="text-lg font-semibold text-gray-600 dark:text-gray-300 dark:hover:text-white">
          Donor Name: {food?.donarname}
        </h3>
        <p className="mt-3 text-gray-500">
        location: {food?.pickuplocation}
        </p>
        <p className="mt-3 text-gray-500">
        Expire Date: {food?.expiredate}
        </p>
        <p className="mt-3 text-gray-500">
        Request Date: {food?.requestdatetime}
        </p>
        <p className="mt-3 text-gray-500">
        Your Donation Amount: {food?.donationamount}
        </p>
      </div>
      <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
        <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-bl-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#FFB30E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
          {food?.foodstatus}
        </button>

        {
          food?.foodstatus === "delivered"  ? <button className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#FFB30E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
         Food Already Delivered
        </button>
         :
          <button onClick={()=>handleDelete(food._id)} className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-br-xl font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-[#FFB30E] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm sm:p-4 dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
          Cancel Request
         </button>
        }
        
      </div>
    </div>
            
        </div>
    );
};

export default MyFoodRequestCard;