import moment from 'moment';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Modal = ({ food, handleRequest }) => {
  const time = moment().format('MMMM Do YYYY h:mm a')
  const { user } = useContext(AuthContext)

  // const handleRequest = (e) => {
  //   e.preventDefault()
  //   const form = e.target;
  //   const foodname = e.target.foodname.value;
  //   const foodImage = e.target.foodimage.value;
  //   const foodId = e.target.foodId.value;
  //   const donaremail = e.target.donaremail.value;
  //   const donarname = e.target.donarname.value;
  //   const username = e.target.username.value;
  //   const useremail = e.target.useremail.value;
  //   const requestdatetime = time;
  //   const pickuplocation = e.target.pickuplocation.value;
  //   const expiredate = e.target.expiredate.value;
  //   const donationamount = e.target.expiredate.value;
  //   const additionalnotes = e.target.additionalnotes.value;

  //   const requestFoodInfo = {
  //     foodname, foodImage, foodId, donaremail, donarname, username, useremail, requestdatetime, pickuplocation, expiredate, donationamount, additionalnotes
  //   }

  //   console.log(requestFoodInfo)

  //   fetch('http://localhost:5000/foodrequestcollection/v1',{
  //           method: 'POST',
  //           headers: {
  //               'content-type': 'application/json'
  //           },
  //           body: JSON.stringify(requestFoodInfo)
  //       })
  //       .then(res => res.json())
  //           .then(data => {
  //               console.log(data);
  //               form.reset();
  //               if(data.insertedId){
  //                   Swal.fire({
  //                       title: 'Success!',
  //                       text: 'Food Added Successfully',
  //                       icon: 'success',
  //                       confirmButtonText: 'Ok'
  //                     })
  //               }
  //           })


  // }

  return (
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
                  Notifications
                </h3>
                <p className="text-gray-500">
                  Get notified of activity at Preline
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
                            <input type="text" name='foodname' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" defaultValue={food?.foodName} readOnly />
                          </div>

                          <div className="space-y-2">
                            <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                              Food Image URL
                            </label>

                            <input type="text" name='foodImage' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter photo" defaultValue={food?.foodImage} readOnly />
                          </div>

                          <div className="space-y-2">
                            <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                              Food Id
                            </label>

                            <input type="text" name='foodId' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Food Id" defaultValue={food?._id} readOnly />
                          </div>

                          <div className="flex flex-col lg:flex-row items-center gap-8">
                            <div className="space-y-2 w-full">
                              <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                Donator Email
                              </label>

                              <input type="email" name='donaremail' className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Your Email" defaultValue={food?.donaremail} readOnly />
                            </div>

                            <div className="space-y-2 w-full">
                              <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                                Donator Name
                              </label>

                              <input type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter Your Name" defaultValue={food?.donarname} readOnly />
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

                            <input type="text" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter pickup location" defaultValue={food?.pickuplocation} readOnly />
                          </div>

                          <div className="space-y-2">
                            <label className="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
                              Expired Date
                            </label>

                            <input type="datetime-local" className="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter expire date" defaultValue={food?.expiredate} readOnly />
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


              <button type="submit" className="py-2.5 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                Food Request
              </button>
            </div>



            </form>
            
          </div>
        </div>
      </div>

    </div>
  );
};

export default Modal;