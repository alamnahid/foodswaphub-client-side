

const AvailableFoodBanner = () => {
    return (
        <div>


            <div className="relative bg-gradient-to-r from-[#faf8f8c2] to-[#f1b83b1d] overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg-[url('../svg/component/polygon.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-[url('../svg/component/polygon-dark.svg')]">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">

                    <div className="flex justify-center">
                        <a className="inline-flex items-center gap-x-2 bg-white border border-[#FFB30E] text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200" href="#">
                            Request for a meal
                            <span className="py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400">
                                <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                                </svg>
                            </span>
                        </a>
                    </div>

                    <div className="mt-5 max-w-2xl text-center mx-auto">
                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                            Find a Meal
                            <span className="bg-clip-text bg-[#FFB30E] text-transparent"> Near You</span>
                        </h1>
                    </div>

                    <div className="mt-5 max-w-3xl text-center mx-auto">
                        <p className="text-lg text-gray-600 dark:text-gray-400">Discover nearby available food options to satisfy your hunger. Use our search feature to locate free meals and support from your community.</p>
                    </div>

                    <form>
                        <div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:shadow-gray-900/[.2] max-w-[30vw] mx-auto mt-8">
                            <div className="flex-[1_0_0%]">
                                <label className="block text-sm text-gray-700 font-medium dark:text-white"><span className="sr-only">Search article</span></label>
                                <input type="email" name="hs-search-article-1" id="hs-search-article-1" className="p-3 block w-full border-transparent rounded-md focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-400" placeholder="Search article" />
                            </div>
                            <div className="flex-[0_0_auto]">
                                <a className="p-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </form>


                    <div className="mx-auto w-[24rem] mt-8 text-center">
                        
                        <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sort By Food Expire Date</button>

                    </div>



                </div>
            </div>


        </div>
    );
};

export default AvailableFoodBanner;