import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Review = () => {
    return (
        <div className='w-[80vw] mx-auto mt-20'>
                        <h1 className="mt-20 text-center font-bold text-4xl border-b-2 pb-3 mb-5 w-fit mx-auto rounded-lg border-[#FFB30E]">Our Reviews</h1>

            <Carousel
      autoPlay
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      interval={30000000} // Autoplay interval in milliseconds
    >
      <div>
        
<div className="relative overflow-hidden">
  <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">

    <div aria-hidden="true" className="flex absolute start-0 -z-[1]">
      <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
    </div>
    <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div className="hidden lg:block lg:col-span-2">
        <img className="rounded-xl" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description"/>
      </div>

      <div className="lg:col-span-4">
        <blockquote>

          <p className="text-xl text-left font-medium text-gray-800 lg:text-2xl lg:leading-normal dark:text-gray-200">
            To say that switching to Preline has been life-changing is an understatement. My business has tripled and I got my life back.
          </p>

          <footer className="mt-6">
            <div className="flex items-center">
              <div className="lg:hidden flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src="https://images.unsplash.com/photo-1671726203390-cdc4354ee2eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description"/>
              </div>
              <div className="ms-4 lg:ms-0">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                  Nicole Grazioso
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Head of Finance
                </p>
              </div>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</div>
      </div>
      <div>
        <h1>Review 2 Title</h1>
        <h1>Review 2 Text</h1>
      </div>
      <div>
        <h1>Review 3 Title</h1>
        <h1>Review 3 Text</h1>
      </div>
      <div>
        <h1>Review 4 Title</h1>
        <h1>Review 4 Text</h1>
      </div>
    </Carousel>
        </div>
    );
};

export default Review;