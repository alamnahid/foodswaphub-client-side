import { useNavigate, useRouteError } from "react-router-dom";
import login from "../../../src/JSON/404.json"
import Lottie from "lottie-react";

const ErrorElement = () => {
    const error = useRouteError();
    const navigate = useNavigate()

    const handlebackhome = ()=>{
        navigate('/')
    }
    return (
        <div>
            <div className="mt-24">
           <p className="text-xl font-medium text-center">{error.statusText || error.message}</p>

           <p className="text-2xl font-medium text-center">
            {
                error.status === 404 && <div>
                    
                    <button onClick={handlebackhome} className='mt-5 border-none text-white w-[16rem] bg-[#F45E0C] mt-14- h-12'>Back to Home Page</button>
                    <Lottie className="w-[70vw] h-[70vh] mx-auto rounded-md" loop={true} animationData={login} />;
                </div>
            }
           </p>
           </div>
        </div>
    );
};

export default ErrorElement;