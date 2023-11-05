import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Provider/AuthProvider";

const LoginForm = () => {

  const [error, setError] = useState('');
  const {signIn, googleSignIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginSubmit =(e)=>{
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
     
      signIn(email, password)
      .then(result=>{
          toast.success('User logged in successfully');
          
          navigate(location?.state ? location.state: '/')
          
      })
      .catch(error=>{
          
          if (error.code === 'auth/invalid-login-credentials') {
              setError('Invalid email or password. Please try again.');
            } else if (error.code === 'auth/user-not-found') {
              setError('User not found. Please check your email.');
            } 
      })
  }

  const handleGoogleLogin = ()=>{
      googleSignIn()
      .then(result =>{
          toast.success('User logged in successfully');
          navigate(location?.state ? location.state: '/')
          console.log(result.user)
      })
      .catch(error=>{
          toast.error(error.message)
      })
  }


    return (
        <div>
            <html className="h-full">
  <body className="dark:bg-slate-900  flex h-full items-center py-16">
    <main className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Sign In</h1>
            
          </div>

          <div className="mt-5">
            <button onClick={handleGoogleLogin} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4"/>
                <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853"/>
                <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05"/>
                <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335"/>
              </svg>
              Sign up with Google
            </button>
            <ToastContainer/>
            <div className="py-3 flex items-center text-xs text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">Or</div>

            
            <form onSubmit={handleLoginSubmit}>
              <div className="grid gap-y-4">

              <div>
                  <label className="block text-sm mb-2 dark:text-white">Your Email</label>
                 
                  <div className="relative">
                    
                    <input type="email" name="email" className="py-3 px-4 block w-full border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border-2" required placeholder="Enter Your Email" />
                    
                  </div>
                </div>
              

               
                <div>
                  <label className="block text-sm mb-2 dark:text-white">Your Password</label>
                 
                  <div className="relative">
                    
                    <input type="password" name="password" className="py-3 px-4 block w-full border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 border-2" required placeholder="Enter Your Password"/>
                    
                  </div>
                  
                  {
                    error && <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">{error}</p>
                  }
                </div>
                
                
               
                <div className="flex items-center">
                  
                  <div className="ml-3">
                    <label className="text-sm dark:text-white">Do not have an account <Link to="/signup" className="text-blue-600 decoration-2 hover:underline font-medium" href="#">Register here</Link></label>
                  </div>
                </div>
               

                <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Sign In</button>
              </div>
            </form>
            
          </div>
        </div>
      </div>
    </main>
  </body>
</html>
        </div>
    );
};

export default LoginForm;