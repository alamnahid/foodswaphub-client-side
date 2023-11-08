import { useLoaderData, useParams } from "react-router-dom";
import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import axios from "axios";


const FoodDetails = () => {

    // const singleFoodData = useLoaderData();
    // console.log(singleFoodData)
    const {id} = useParams()
    // console.log(id)
    const [singleFoodData, setSingleFoodData] = useState({})

    useEffect(()=>{
        axios.get(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1/${id}`, { withCredentials: true })
        .then(data=>setSingleFoodData(data.data))
    },[id])
    // console.log(singleFoodData)

    const time = moment().format('L'); 
    const { user } = useContext(AuthContext)

    const handleRequest = (e) => {
        e.preventDefault()
        const form = e.target;
        const foodname = e.target.foodname.value;
        const foodimage = e.target.foodimage.value;
        const foodId = e.target.foodId.value;
        const donaremail = e.target.donaremail.value;
        const donarname = e.target.donarname.value;
        const username = e.target.username.value;
        const useremail = e.target.useremail.value;
        const userimage = user?.photoURL;
        const requestdatetime = time;
        const pickuplocation = e.target.pickuplocation.value;
        const expiredate = e.target.expiredate.value;
        const donationamount = e.target.donationamount.value;
        const additionalnotes = e.target.additionalnotes.value;
        const foodstatus = singleFoodData.foodstatus;

        const requestFoodInfo = {
            foodname, foodimage, foodId, donaremail, foodstatus, donarname, username, userimage, useremail, requestdatetime, pickuplocation, expiredate, donationamount, additionalnotes
        }

        // console.log(requestFoodInfo)

        fetch('https://b8a11-server-side-jannat-jui.vercel.app/foodrequestcollection/v1', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestFoodInfo)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                form.reset();
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Request sent Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })


    }


    // const food = useLoaderData();
    // console.log(food)
    return (
        <div>
            <Helmet>
                <title>Share2Savor | Food Details</title>
            </Helmet>
            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div className="">
                        <img className="rounded-xl w-[40vw]" src={singleFoodData?.foodImage} alt="Image Description" />
                    </div>

                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">

                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                    {singleFoodData?.foodName}
                                </h2>
                                <div className="grid sm:flex rounded-br-xl bg-[#ffb30e1a]  sm:items-center gap-y-3 gap-x-4">
                                    <img className=" w-20 h-20" src={singleFoodData?.donarimage} alt="Image Description" />

                                    <div className="sm:flex sm:flex-col sm:h-full">
                                        <div>
                                            <h3 className="font-medium text-gray-800 dark:text-gray-200">
                                                Donar: {singleFoodData?.donarname}
                                            </h3>
                                            <p className="mt-1 text-base  text-gray-700">
                                                Pickup Location: {singleFoodData?.pickuplocation}
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
                                        <span className="font-bold">Food Quantity </span>{singleFoodData?.foodquantity} Person
                                    </span>
                                </li>

                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                                    </svg>

                                    <span className="text-sm sm:text-base text-gray-500">
                                        Expired Date <span className="font-bold">{singleFoodData?.expiredate}</span>
                                    </span>
                                </li>
                                <li className="flex space-x-3">
                                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 dark:text-blue-500" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z" fill="currentColor" fill-opacity="0.1" />
                                        <path d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z" fill="currentColor" />
                                    </svg>

                                    <span className="text-sm sm:text-base font-bold text-gray-500">
                                        Notes: <span className="font-normal">{singleFoodData?.additionalnotes}</span>
                                    </span>
                                </li>

                                <li className="flex space-x-3">

                                {
                                    singleFoodData?.foodstatus === 'delivered' ? <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                    Already Delivered
                                  </button>
                                    :

                                    <div>

                                        <div className="text-center">
                                            <button type="button" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-notifications">
                                                Request For Food
                                            </button>
                                        </div>

                                        <div id="hs-notifications" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
                                            <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                                                <div className="relative lg:w-[40vw] flex flex-col bg-white border shadow-sm rounded-xl overflow-hidden dark:bg-gray-800 dark:border-gray-700">

                                                    <form onSubmit={handleRequest}>


                                                        <div className="absolute top-2 right-2">
                                                            <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-notifications">
                                                                <span className="sr-only">Close</span>
                                                                <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                                                </svg>
                                                            </button>
                                                        </div>

                                                        <div className="p-4 sm:p-10 overflow-y-auto">
                                                            <div className="mb-6 text-center">
                                                                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-gray-200">
                                                                    Request For This Food
                                                                </h3>
                                                                <p className="text-gray-500">
                                                                    Share2Savor, Save Food
                                                                </p>
                                                            </div>

                                                            <div className="space-y-4">

                                                                <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                                                                    <div className="bg-white rounded-xl shadow dark:bg-slate-900">
                                                                        <div className="pt-0 p-4 sm:pt-0 sm:p-7">
                                                                            <div className="space-y-4 sm:space-y-6">


                                                                                <div className="space-y-2">

                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Food Name
                                                                                    </label>
                                                                                    <input type="text" name='foodname' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" defaultValue={singleFoodData?.foodName} readOnly />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Food Image URL
                                                                                    </label>

                                                                                    <input type="text" name='foodimage' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter photo" defaultValue={singleFoodData?.foodImage} readOnly />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Food Id
                                                                                    </label>

                                                                                    <input type="text" name='foodId' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Food Id" defaultValue={singleFoodData?._id} readOnly />
                                                                                </div>

                                                                                <div className="flex flex-col lg:flex-row items-center gap-8">
                                                                                    <div className="space-y-2 w-full">
                                                                                        <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                            Donator Email
                                                                                        </label>

                                                                                        <input type="email" name='donaremail' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Your Email" defaultValue={singleFoodData?.donaremail} readOnly />
                                                                                    </div>

                                                                                    <div className="space-y-2 w-full">
                                                                                        <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                            Donator Name
                                                                                        </label>

                                                                                        <input type="text" name="donarname" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Your Name" defaultValue={singleFoodData?.donarname} readOnly />
                                                                                    </div>


                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        User Name
                                                                                    </label>

                                                                                    <input type="text" name='username' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter your email" defaultValue={user?.displayName} readOnly />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        User Email
                                                                                    </label>

                                                                                    <input type="email" name='useremail' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter your email" defaultValue={user?.email} readOnly />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Requeste Date
                                                                                    </label>

                                                                                    <input type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" defaultValue={time} readOnly />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Pick up Location
                                                                                    </label>

                                                                                    <input type="text" name="pickuplocation" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter pickup location" defaultValue={singleFoodData?.pickuplocation} readOnly />
                                                                                </div>

                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Expired Date
                                                                                    </label>

                                                                                    <input type="date" name="expiredate" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter expire date" defaultValue={singleFoodData?.expiredate} readOnly />
                                                                                </div>


                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Donation Amount
                                                                                    </label>

                                                                                    <input type="text" name='donationamount' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter the amount of donation" />
                                                                                </div>


                                                                                <div className="space-y-2">
                                                                                    <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                                                                        Additional Note
                                                                                    </label>

                                                                                    <textarea id="af-submit-app-description" name='additionalnotes' className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="Comment Here"></textarea>
                                                                                </div>





                                                                            </div>


                                                                        </div>
                                                                    </div>

                                                                </div>


                                                            </div>
                                                        </div>

                                                        <div className="flex justify-end items-center gap-x-2 py-3 px-4 bg-gray-50 border-t dark:bg-gray-800 dark:border-gray-700">
                                                            <button type="button" className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-overlay="#hs-notifications">
                                                                Cancel
                                                            </button>


                                                            <button type="submit" data-hs-overlay="#hs-notifications" className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                                                                Food Request
                                                            </button>
                                                        </div>



                                                    </form>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                }

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FoodDetails;