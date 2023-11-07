import { useNavigate, useRouteError } from "react-router-dom";


const ErrorElement = () => {
    const error = useRouteError();
    const navigate = useNavigate()

    const handlebackhome = ()=>{
        navigate('/')
    }
    return (
        <div>
            <div className="my-[30vh]">
           <p className="text-2xl font-medium text-center">{error.statusText || error.message}</p>

           <p className="text-2xl font-medium text-center">
            {
                error.status === 404 && <div>
                    <h3 className='text-[2rem] mt-8 lg:text-[4rem] font-medium'>404 Not Found</h3>
                    <p>loading</p>
                    <button onClick={handlebackhome} className=' border-none text-white w-[16rem] bg-[#F45E0C] mt-14- h-12'>Back to Home Page</button>
                </div>
            }
           </p>
           </div>
        </div>
    );
};

export default ErrorElement;