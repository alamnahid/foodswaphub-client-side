import { useContext } from "react";
import MyFoodRequestCard from "./MyFoodRequestCard";
import { AuthContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import Spinner from "../Spinner/Spinner";


const MyFoodRequest = () => {

    const {user} = useContext(AuthContext)
    // console.log(user.email)

    const getFoods = async ()=>{
        const res = await fetch(`http://localhost:5000/foodrequestcollection/v1?useremail=${user?.email}`)
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
    console.log(data)



    return (
       <div className="max-w-[80vw] mx-auto mt-16">
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                data?.map(food=> <MyFoodRequestCard key={food._id} food={food} refetch={refetch}></MyFoodRequestCard>)
            }
           
            
            
        </div>
       </div>
    );
};

export default MyFoodRequest;