// import food from "../../assets/images/bannerimage.png"
import Modal from "./Modal";

const DetailsCard = ({food, handleRequest}) => {
    return (
        <div>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div className="">
                        <img className="rounded-xl w-[40vw]" src={food?.foodImage} alt="Image Description" />
                    </div>

                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">

                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                    {food?.foodName}
                                </h2>
                                <div className="grid sm:flex rounded-br-xl bg-[#ffb30e1a]  sm:items-center gap-y-3 gap-x-4">
                            <img className=" w-20 h-20" src={food?.donarimage} alt="Image Description" />

                            <div className="sm:flex sm:flex-col sm:h-full">
                                <div>
                                    <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                        Donar: {food?.donarname}
                                    </h3>
                                    <p className="mt-1 text-base  text-gray-700">
                                        Pickup Location: {food?.pickuplocation}
                                    </p>
                                </div>
                            </div>
                        </div>
                                <p className="text-gray-500">
                                Explore all the essential details of this exceptional product. From specifications and features to customer reviews, get the complete picture and make an informed decision before making your purchase.
                                </p>
                            </div>

                            <ul role="list" className="space-y-2 sm:space-y-4">
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                                    </svg>

                                    <span className="text-sm sm:text-base text-gray-500">
                                        <span className="font-bold">Food Quantity </span>{food?.foodquantity} Person
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                                    </svg>

                                    <span className="text-sm sm:text-base text-gray-500">
                                    Expired Date <span className="font-bold">{food?.expiredate}</span>
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    

                                    
                                        <Modal food={food} handleRequest={handleRequest}></Modal>
                                   
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetailsCard;