import circle from "../../../assets/logo/circles.png"
import person1 from "../../../assets/person1.jpg"
import person2 from "../../../assets/person2.jpg"
import person3 from "../../../assets/person3.jpg"



const Review = () => {
  return (
    <div>
       <section className="w-[80%] mx-auto rounded-xl bg-gradient-to-r from-[#FF8938] to-[#F00] flex flex-col lg:flex-row justify-around lg:h-[75vh] items-center mt-20">

<div className="w-[100%] lg:w-auto p-4 lg:p-0">
    <h1 className="lg:w-[24.312rem] text-[#F4F4F4] manrope text-3xl md:text-5xl font-extrabold">Meet Our Super Clients</h1>
    <p className="lg:w-[27.5rem] text-[#F4F4F4] manrope text-base font-semibold my-6">
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
    </p>
    <button className="bg-white py-[0.88rem] px-[1.75rem] rounded-lg manrope text-xl font-bold text-red-500">
        Show All
    </button>
</div>


<div>
    <div className="space-y-16 relative w-[100%] lg:w-auto">


        <div className="w-[100%] lg:w-[27.06rem] lg:h-[14.56rem] rounded-lg bg-white relative opacity-40 z-10">
            <img className="border-4 bg-white border-white rounded-full lg:absolute lg:-left-5 lg:-top-5 w-[5rem] h-[5rem]" src={person1} alt=""/>
            <p className="lg:w-[21.31rem] ml-[3.12rem] lg:pt-12 manrope text-base text-[#777]">
                We are providing the best and suitable home insurance services for the people who are interested to treatment
            </p>
            <h4 className="ml-[3.12rem] mt-5 text-[#1C1C1C] manrope font-bold">
                Ilham Yuda
            </h4>
            <p className="ml-[3.12rem] text-[#5D5A6F] manrope text-base font-semibold">
                Businessman
            </p>
            <div className="flex justify-end mr-8">
                <img src={circle} alt=""/>
            </div>
        </div>


        <div className="w-[100%] lg:w-[27.06rem] h-[14.56rem] rounded-lg bg-white absolute lg:right-[10rem] top-14 z-20">
            <img className="border-4 bg-white border-white rounded-full lg:absolute -left-5 -top-5 w-[5rem] h-[5rem]" src={person2} alt=""/>
            <p className="lg:w-[21.31rem] ml-[3.12rem] lg:pt-12 manrope text-base text-[#777]">
                We are providing the best and suitable home insurance services for the people who are interested to treatment
            </p>
            <h4 className="ml-[3.12rem] mt-5 text-[#1C1C1C] manrope font-bold">
                Ilham Yuda
            </h4>
            <p className="ml-[3.12rem] text-[#5D5A6F] manrope text-base font-semibold">
                Businessman
            </p>
            <div className="flex justify-end mr-8">
                <img src={circle} alt=""/>
            </div>
        </div>



        <div className="w-[100%] lg:w-[27.06rem] h-[14.56rem] rounded-lg bg-white relative opacity-40 z-10">
            <img className="border-4 bg-white border-white rounded-full lg:absolute -left-5 -top-5 w-[5rem] h-[5rem]" src={person3} alt=""/>
            <p className="lg:w-[21.31rem] ml-[3.12rem] lg:pt-12 manrope text-base text-[#777]">
                We are providing the best and suitable home insurance services for the people who are interested to treatment
            </p>
            <h4 className="ml-[3.12rem] mt-5 text-[#1C1C1C] manrope font-bold">
                Ilham Yuda
            </h4>
            <p className="ml-[3.12rem] text-[#5D5A6F] manrope text-base font-semibold">
                Businessman
            </p>
            <div className="flex justify-end mr-8">
                <img src={circle} alt=""/>
            </div>
        </div>
    </div>
</div>
</section>
      
    </div>
  );
};

export default Review;