import {Helmet} from "react-helmet";
import AvailableFoodBanner from "./AvailableFoodBanner";
import AvailableFoodCard from "./AvailableFoodCard";

const AvailableFood = () => {
    return (
        <div>
            <Helmet>
          <title>Available Food</title>
        </Helmet>

        <div className="mt-8">
            <AvailableFoodBanner></AvailableFoodBanner>
            

            <div className="mt-28 max-w-[80vw] mx-auto grid grid-cols-3  justify-items-center gap-12">
                <AvailableFoodCard></AvailableFoodCard>
                <AvailableFoodCard></AvailableFoodCard>
                <AvailableFoodCard></AvailableFoodCard>
            </div>
        </div>

            
        </div>
    );
};

export default AvailableFood;