import SignUpForm from "./SignUpForm";
import login from "../../JSON/signup.json"
import Lottie from "lottie-react";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
    return (
        <div>
            <Helmet>
                <title>Share2Savor | Signup</title>
            </Helmet>

            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">

                    <div className="relative ml-4 order-last md:order-first">
                    <Lottie className="w-full rounded-md" loop={true} animationData={login} />;
                        <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0"></div>

                    </div>

                    <div>

                        <SignUpForm></SignUpForm>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default SignUp;