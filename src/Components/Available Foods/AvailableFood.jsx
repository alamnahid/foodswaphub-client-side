
import AvailableFoodBanner from "./AvailableFoodBanner";
import AvailableFoodCard from "./AvailableFoodCard";
import {  useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import Spinner from "../Spinner/Spinner";
import { Helmet } from "react-helmet-async";

const AvailableFood = () => {
    // const [foods, setFoods] = useState([])
    const [foodExpireDate, setFoodExpireDate] = useState('')
    const [searchFoodName, setSearchFoodName] = useState('') 
    

    // console.log(searchFoodName.toLowerCase())


    const axios = useAxios()
    // console.log(foodExpireDate)

    const getFoods = async ()=>{
        const res = await fetch(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1?sortField=expiredate&sortOrder=${foodExpireDate}&foodName=${searchFoodName}`, {credentials: 'include'})
        // const res = await axios.get('/getallfood/v1')
        return res.json();
    }
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['food', foodExpireDate, searchFoodName],
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
        <div>
            <Helmet>
                <title>Share2Savor | All Foods</title>
            </Helmet>

        <div className="mt-8">
            <AvailableFoodBanner setFoodExpireDate={setFoodExpireDate}
             setSearchFoodName={setSearchFoodName}
             ></AvailableFoodBanner>
            

            <div className="mt-28 max-w-[80vw] mx-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  justify-items-center gap-12">
                {
                    data?.map(food=><AvailableFoodCard key={food._id} food={food}></AvailableFoodCard>)
                }
                
            </div>
        </div>

            
        </div>
    );
};

export default AvailableFood;