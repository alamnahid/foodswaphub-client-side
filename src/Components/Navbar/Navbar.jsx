/* eslint-disable react/no-unknown-property */
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../../assets/logo/logo.png"

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  }

  return (
    <div className="mt-5">

      <header className="flex flex-wrap bg-white md:justify-start md:flex-nowrap z-50 w-full text-sm">

        <nav className=" relative max-w-7xl lg:max-w-[80vw] w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 xl:flex xl:items-center xl:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Global">

          <div className="flex items-center justify-between">

            <p className="flex items-center text-xl font-bold dark:text-white"><img className="w-14" src="" alt="" /><img className="w-[3.5rem]" src={logo} alt="" /> Food<span className="text-[#fda400]">swap</span>hub</p>


            <div className="lg:hidden">
              <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-full border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>
          </div>


          <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow lg:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:items-center md:justify-end md:gap-y-0 lg:gap-x-7 lg:mt-0 lg:pl-7">


              <NavLink to="/" className={({ isActive }) =>
                isActive ? 'font-medium text-[#FFB30E] underline md:py-6 dark:text-[#FFB30E] text-lg' : 'font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 text-lg'
              }>Home</NavLink>


              <NavLink to="/availablefoods" className={({ isActive }) =>
                isActive ? 'font-medium text-[#FFB30E] underline md:py-6 dark:text-[#FFB30E] text-lg' : 'font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 text-lg'
              }>Available Foods</NavLink>


              <NavLink to="/addnewfoods" className={({ isActive }) =>
                isActive ? 'font-medium text-[#FFB30E] underline md:py-6 dark:text-[#FFB30E] text-lg' : 'font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 text-lg'
              }>Add Foods</NavLink>


              <NavLink to="/managemyfoods" className={({ isActive }) =>
                isActive ? 'font-medium text-[#FFB30E] underline md:py-6 dark:text-[#FFB30E] text-lg' : 'font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 text-lg'
              }>My Foods</NavLink>


              <NavLink to="/foodrequest" className={({ isActive }) =>
                isActive ? 'font-medium text-[#FFB30E] md:py-6 dark:text-[#FFB30E] text-lg' : 'font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500 text-lg'
              }>My Food Request</NavLink>

              {
                user?.email ?

                  <div className="flex items-center gap-3">

                    <div className="relative inline-block">
                      <img className="inline-block h-[2.875rem] w-[2.875rem] rounded-full ring-2 ring-white dark:ring-gray-800" src={user?.photoURL} alt="Image Description" />
                      <span className="absolute top-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white bg-green-400"></span>


                    </div>

                    <Link to="/login" onClick={handleSignOut} className="flex items-center gap-x-2 font-medium text-lg text-gray-500 hover:text-[#FFB30E] md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#FFB30E]">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                      Log out
                    </Link>

                  </div>

                  :

                  <div className="flex  text-lg flex-col gap-y-4 gap-x-0 mt-5 lg:flex-row lg:items-center md:justify-end md:gap-y-0 lg:gap-x-7 lg:mt-0 lg:pl-7">
                    <Link to="/login" className="flex text-lg items-center gap-x-2 font-medium text-gray-500 hover:text-[#FFB30E] md:border-l md:border-gray-300 md:my-6 md:pl-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-[#FFB30E]">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                      Log in
                    </Link>


                    <Link to="/signup" className="flex text-lg items-center gap-x-2 font-medium text-gray-500 hover:text-[#FFB30E] md:my-6 md:pl-2 dark:border-gray-700  dark:text-[#FFB30E]">
                      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                      </svg>
                      Sign up
                    </Link>
                  </div>




              }




            </div>
          </div>
        </nav>
      </header>




    </div>
  );
};

export default Navbar;