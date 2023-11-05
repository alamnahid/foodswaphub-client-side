import MyFoodRequestCard from "./MyFoodRequestCard";


const MyFoodRequest = () => {
    return (
       <div className="max-w-[80vw] mx-auto mt-16">
         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <MyFoodRequestCard></MyFoodRequestCard>
            <MyFoodRequestCard></MyFoodRequestCard>
            <MyFoodRequestCard></MyFoodRequestCard>
            <MyFoodRequestCard></MyFoodRequestCard>
            
        </div>
       </div>
    );
};

export default MyFoodRequest;