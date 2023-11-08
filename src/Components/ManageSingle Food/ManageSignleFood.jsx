import { useLoaderData } from "react-router-dom";
import food from "../../assets/images/bannerimage.png"
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Swal from "sweetalert2";
import Spinner from "../Spinner/Spinner";
import login from "../../JSON/nothing.json"
import Lottie from "lottie-react";

const ManageSignleFood = () => {
    const foodData = useLoaderData();
    // console.log(foodData)
    const foodId = foodData._id;

    const [myfood, setmyFood] = useState([foodData])
    

    // console.log(myfood)

    
    const getFoods = async ()=>{
        const res = await fetch(`https://b8a11-server-side-jannat-jui.vercel.app/foodrequestcollection/v1?foodId=${foodId}`, {credentials:'include'})
        // const res = await axios.get('/getallfood/v1')
        return res.json();
    }
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ['food', foodId],
        queryFn: getFoods,
    })

    if(isLoading){
        return <Spinner></Spinner>
    }
    if(isError){
        return <p>{error.message}</p>
    }
    // console.log(data)

    

    const handleConfirm = (id_1, id_2)=>{
        // console.log(id_1, id_2)
        fetch(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1/${id_1}`,{
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({foodstatus: 'delivered'})
        })
        .then(res=>res.json())
        .then(data=>{
        //   console.log(data)
          if(data.modifiedCount > 0){
            const remaining = myfood.filter(item => item._id !== id_1);
            const updated = myfood.find(item => item._id === id_1);
            updated.foodstatus = 'delivered'
            const newFoods = [updated, ...remaining];
            setmyFood(newFoods)
            refetch()
            Swal.fire(
                'Delivered',
                'Your food has been Delivered.',
                'success'
            )
       
          }
        })



        fetch(`https://b8a11-server-side-jannat-jui.vercel.app/foodrequestcollection/v1/${id_2}`,{
            method: 'PATCH',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify({foodstatus: 'delivered'})
          })
          .then(res=>res.json())
          .then(data=>{
            // console.log(data)
            // if(data.modifiedCount > 0){
            //   const remaining = myfood.filter(item => item._id !== id_1);
            //   const updated = myfood.find(item => item._id === id_1);
            //   updated.foodstatus = 'delivered'
            //   const newFoods = [updated, ...remaining];
            //   setmyFood(newFoods)
            //   refetch()
            // }
          })
      }


    return (
        <div>
            <div className="max-w-[85rem] mt-16 bg-gradient-to-r from-[#faf8f8c2] to-[#f1b83b1d] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

<div className="md:grid md:grid-cols-1 md:items-center md:gap-12 xl:gap-32">
    <div className="">
        <img className="rounded-xl w-full lg:w-[20vw]" src={food} alt="Image Description" />
        <h2 className="font-bold text-3xl mt-4 lg:text-4xl text-gray-800 dark:text-gray-200">
                    Food Name: {foodData?.foodName}
                </h2>

        
    </div>

    <div>


    {
        data.length===0 ? <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">No User request for this food yet</h1>
            <Lottie className="w-[20vw] rounded-md" loop={true} animationData={login} />;
        </div>
        :
        data.map(food=><div key={food._id} className="mt-5 sm:mt-10 lg:mt-0">
        <div className="space-y-6 sm:space-y-8">

            <div className="space-y-2 md:space-y-4">
                
                <div className="grid rounded-br-xl   sm:items-center gap-y-3 gap-x-4">
            <h1 className="text-xl font-bold">Requester</h1>
            <img className=" w-20 rounded-2xl h-20" src={food?.userimage} alt="Image Description" />

            <div className="sm:flex sm:flex-col sm:h-full">
                <div>
                <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                    </svg>

                    <span className="text-sm sm:text-base text-gray-500 font-medium">
                        <span className="font-bold">Name</span> {food?.username}
                    </span>
                </li>

                <li className="flex space-x-3">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                    </svg>

                    <span className="text-sm sm:text-base font-bold text-gray-500">
                    Email: <span className="font-medium">{food?.useremail}</span>
                    </span>
                </li>
                <li className="flex space-x-3">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                    </svg>

                    <span className="text-sm sm:text-base font-bold text-gray-500">
                    Request Time and Date: <span className="font-medium">{food?.requestdatetime}</span>
                    </span>
                </li>

                <li className="flex space-x-3">
                   
                </li>
            </ul>
            {
                foodData.foodstatus === 'delivered' ? <button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Delivered</button>
                :
                <button  onClick={()=>handleConfirm(foodData._id, food._id)}  type="button" className="focus:outline-none text-white bg-red-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-green-800">Pending</button>
            }

            {/* <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Pending</button> */}


                </div>
            </div>
        </div>
                
            </div>

            
        </div>
    </div>)
    }

    
    </div>
</div>
</div>
            
        </div>
    );
};

export default ManageSignleFood;