import LoginForm from "./LoginForm";
import login from "../../JSON/login.json"
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";


const Login = () => {
    return (
        <div>
            <div className="max-w-[85rem] mx-auto px-4 mt-28 sm:px-6 lg:px-8">
            <Helmet>
                <title>Share2Savor | Login</title>
            </Helmet>

<div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">

    <div>
       <LoginForm></LoginForm>
    </div>

    
    <div className="relative ml-4">
    <Lottie className="w-full rounded-md" loop={true} animationData={login} />;
        <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

    </div>

</div>

</div>
        </div>
    );
};

export default Login;