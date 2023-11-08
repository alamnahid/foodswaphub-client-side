
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateFoodInfo = () => {
    const foods = useLoaderData()
    // console.log(foods._id)
    const navigate = useNavigate();

    const handleupdateFoodInfor = (e)=>{
        e.preventDefault()
        const form = e.target;
        const foodName = e.target.foodname.value;
        const foodImage = e.target.foodimage.value;
        const foodQuantity = e.target.foodquantity.value;
        const foodquantity = parseFloat(foodQuantity)
        const pickuplocation = e.target.pickuplocation.value;
        const expiredate = e.target.expiredate.value;
        const foodstatus = e.target.foodstatus.value;
        const donarname = e.target.donarname.value;
        const donarimage = e.target.donarimage.value;
        const donaremail = e.target.donaremail.value;
        const additionalnotes = e.target.additionalnotes.value;

        const updateFoodInfo = {foodName, foodImage, foodquantity, pickuplocation, expiredate, foodstatus, donarname, donarimage, donaremail, additionalnotes}

        // console.log(updateFoodInfo)

        fetch(`https://b8a11-server-side-jannat-jui.vercel.app/getallfood/v1/${foods._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFoodInfo),
            credentials:'include'
        })
        .then(res => res.json())
            .then(data => {
                // console.log(data);
                
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    navigate('/managemyfoods')
                }
            })


    }



    return (
        <div className="bg-gradient-to-r from-[#faf8f8c2] to-[#f1b83b1d] mt-8">
            <Helmet>
                <title>Share2Savor | update food</title>
            </Helmet>
            <div>
            <section className=" dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Update Food</h2>
      <form onSubmit={handleupdateFoodInfor}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                  <input type="text" name="foodname" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Food name" defaultValue={foods?.foodName} required=""/>
              </div>
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Image URL</label>
                  <input type="text" name="foodimage" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Food URL" defaultValue={foods?.foodImage} required=""/>
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Quantity</label>
                  <input type="number" name="foodquantity" id="brand" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Number of person eat this food" defaultValue={foods?.foodquantity} required=""/>
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                  <input type="text" name="pickuplocation" id="price" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter the location" defaultValue={foods?.pickuplocation} required=""/>
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                  <input type="date" name="expiredate" id="price" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" defaultValue={foods?.expiredate} placeholder="Enter the Expire Date" required=""/>

              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Statis</label>
                  <select id="category" name="foodstatus" defaultValue={foods?.foodstatus} disabled className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Available</option>
                      <option selected="">Not Available</option>
                      
                      
                  </select>
              </div>

              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Name</label>
                  <input type="text" name="donarname" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Name" defaultValue={foods?.donarname} required=""/>
              </div>

              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Image URL</label>
                  <input type="text" name="donarimage" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Image URL" defaultValue={foods?.donarimage} required=""/>
              </div>

              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Email</label>
                  <input type="email" name="donaremail" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your email" defaultValue={foods?.donaremail} required=""/>
              </div>

              


              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes</label>
                  <textarea id="description" name="additionalnotes" defaultValue={foods?.additionalnotes} rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#FFB30E] focus:border-[#FFB30E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Food description here"></textarea>
              </div>
          </div>
          <button type="submit" className="text-white mt-8 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Update Food</button>


      </form>
  </div>
</section>
            </div>
            
        </div>
    );
};

export default UpdateFoodInfo;