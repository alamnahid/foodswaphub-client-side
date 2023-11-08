import { useContext } from "react";
import MyFoodRequestCard from "./MyFoodRequestCard";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";
import { Helmet } from "react-helmet-async";
import login from "../../JSON/nothing.json"
import Lottie from "lottie-react";
import { useLoaderData } from "react-router-dom";


const MyFoodRequest = () => {

    const {user} = useContext(AuthContext)
    // console.log(user.email)
    const foodDatacollection = useLoaderData()
    // console.log(foodDatacollection)

    const getFoods = async ()=>{
        const res = await fetch(`https://b8a11-server-side-jannat-jui.vercel.app/foodrequestcollection/v1?useremail=${user?.email}`, {credentials:'include'})
        // const res = await axios.get('/getallfood/v1')
        return res.json();
    }
    const {data, isLoading, isError, error, refetch} = useQuery({
        queryKey: ['food'],
        queryFn: getFoods,
    })

    if(isLoading){
        return <Spinner></Spinner>
    }
    if(isError){
        return <p>{error.message}</p>
    }
    // console.log(data)



    return (
       <div className="max-w-[80vw] mx-auto mt-16">
        <Helmet>
                <title>Share2Savor | Food Request</title>
            </Helmet>
            {
                data.length === 0 ? <div className="flex justify-center flex-col items-center mt-24">
                    <h1 className="text-3xl font-bold">You have not requested any food yet</h1>
                    <Lottie className="w-[30vw] rounded-md" loop={true} animationData={login} />;
                </div>
                :
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {
                data?.map(food=> <MyFoodRequestCard key={food._id} food={food} refetch={refetch}></MyFoodRequestCard>)
            }
           
            
            
        </div>
            }
       </div>
    );
};

export default MyFoodRequest;