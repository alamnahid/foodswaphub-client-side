import { useLoaderData } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const FoodDetails = () => {
    const food = useLoaderData();
    console.log(food)
    return (
        <div>
            <DetailsCard food={food}></DetailsCard>
            
        </div>
    );
};

export default FoodDetails;