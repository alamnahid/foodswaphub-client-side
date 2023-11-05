import SignUpForm from "./SignUpForm";


const SignUp = () => {
    return (
        <div>

            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">

                    <div className="relative ml-4 order-last md:order-first">
                        <img className="w-full rounded-md" src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80" alt="Image Description" />
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