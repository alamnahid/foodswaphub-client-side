import FeatureFoodCard from "./FeatureFoodCard";


const FeatureFood = () => {
    return (
        <div className="mt-28 max-w-[80vw] mx-auto">
            <h1 className="mt-20 text-center font-bold text-4xl border-b-2 pb-3 mb-5 w-fit mx-auto rounded-lg border-[#FFB30E]">Featured Foods</h1>

            <div className="grid grid-cols-3 mt-16 justify-items-center gap-12">

            <FeatureFoodCard></FeatureFoodCard>
            <FeatureFoodCard></FeatureFoodCard>
            <FeatureFoodCard></FeatureFoodCard>
            <FeatureFoodCard></FeatureFoodCard>
            <FeatureFoodCard></FeatureFoodCard>
            <FeatureFoodCard></FeatureFoodCard>
            </div>
            
            <div className="mx-auto w-full text-center mt-12">
                <button className="text-white w-[12rem] h-12 text-xl font-bold bg-[#FFB30E] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Show All</button>
            </div>
            
        </div>
    );
};

export default FeatureFood;