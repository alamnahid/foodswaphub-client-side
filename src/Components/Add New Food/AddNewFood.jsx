

const AddNewFood = () => {
    return (
        <div className="bg-gradient-to-r from-[#faf8f8c2] to-[#f1b83b1d] mt-8">

            <div>
            <section className=" dark:bg-gray-900">
  <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new Food</h2>
      <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                  <input type="text" name="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Type Food name" required=""/>
              </div>
              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Image URL</label>
                  <input type="text" name="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter Food URL" required=""/>
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Quantity</label>
                  <input type="text" name="brand" id="brand" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Number of person eat this food" required=""/>
              </div>
              <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pickup Location</label>
                  <input type="text" name="price" id="price" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter the location" required=""/>
              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Expire Date</label>
                  <input type="date" name="price" id="price" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Enter the Expire Date" required=""/>

              </div>
              <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Statis</label>
                  <select id="category" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                      <option selected="">Available</option>
                      
                  </select>
              </div>

              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Name</label>
                  <input type="text" name="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Name" required=""/>
              </div>

              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Image URL</label>
                  <input type="text" name="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your Image URL" required=""/>
              </div>

              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Donar Email</label>
                  <input type="email" name="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#FFB30E] focus:border-[#FFB30E] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Your email" required=""/>
              </div>

              


              <div className="sm:col-span-2">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Additional Notes</label>
                  <textarea id="description" rows="8" className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-[#FFB30E] focus:border-[#FFB30E] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Food description here"></textarea>
              </div>
          </div>
          <button type="button" className="text-white mt-8 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add Food</button>


      </form>
  </div>
</section>
            </div>
            
        </div>
    );
};

export default AddNewFood;