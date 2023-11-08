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
      interval={2000}
    >
      <div>
        
            <div className="relative overflow-hidden">
            <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">

                <div aria-hidden="true" className="flex absolute start-0 -z-[1]">
                <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
                </div>
                <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                <div className="hidden lg:block lg:col-span-2">
                    <img className="w-[350px] h-[300px] rounded-xl" src="https://i.ibb.co/v1hRsBt/RootS4.webp" alt="Image Description"/>
                </div>

                <div className="lg:col-span-4">
                    <blockquote>

                    <p className="text-xl text-left font-medium text-gray-800 lg:text-xl lg:leading-normal dark:text-gray-200">
                    Share2Savor has been a game-changer for me. I've shared my surplus food, connected with like-minded food enthusiasts, and received delicious meals in times of need. It's a platform that truly brings communities together through the joy of sharing.
                    </p>

                    <footer className="mt-6">
                        <div className="flex items-center">
                        <div className="lg:hidden flex-shrink-0">
                            <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/v1hRsBt/RootS4.webp" alt="Image Description"/>
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
      <div className="relative overflow-hidden">
  <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">

    <div aria-hidden="true" className="flex absolute start-0 -z-[1]">
      <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
    </div>
    <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div className="hidden lg:block lg:col-span-2">
        <img className="w-[350px] h-[300px] rounded-xl" src="https://i.ibb.co/myntzZ9/360-F-243123463-z-Tooub557x-EWABDLk0j-Jkl-Dy-LSGl2jrr.jpg" alt="Image Description"/>
      </div>

      <div className="lg:col-span-4">
        <blockquote>

          <p className="text-xl text-left font-medium text-gray-800 lg:text-xl lg:leading-normal dark:text-gray-200">
          This website makes it so easy to connect with local sharers and request food. I've enjoyed everything from homemade dishes to fresh produce. The only reason I'm not giving it five stars is that I'd love to see even more variety in the available food items.
          </p>

          <footer className="mt-6">
            <div className="flex items-center">
              <div className="lg:hidden flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/myntzZ9/360-F-243123463-z-Tooub557x-EWABDLk0j-Jkl-Dy-LSGl2jrr.jpg" alt="Image Description"/>
              </div>
              <div className="ms-4 lg:ms-0">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                James L.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Head of Management
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
      <div className="relative overflow-hidden">
  <div className="max-w-[85rem] px-4 py-12 sm:px-6 lg:px-8 lg:py-16 mx-auto">

    <div aria-hidden="true" className="flex absolute start-0 -z-[1]">
      <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] dark:bg-purple-900 dark:opacity-20"></div>
    </div>
    <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
      <div className="hidden lg:block lg:col-span-2">
        <img className= " w-[350px] h-[300px] rounded-xl" src="https://i.ibb.co/TmpvHmj/shutterstock-648907024.jpg" alt="Image Description"/>
      </div>

      <div className="lg:col-span-4">
        <blockquote>

          <p className="text-xl text-left font-medium text-gray-800 lg:text-xl lg:leading-normal dark:text-gray-200">
          I can't say enough about how Share2Savor has made a difference in my community. It's a platform that brings compassion and generosity to the forefront. The ability to share and request food has touched many lives. Highly recommended
          </p>

          <footer className="mt-6">
            <div className="flex items-center">
              <div className="lg:hidden flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/TmpvHmj/shutterstock-648907024.jpg" alt="Image Description"/>
              </div>
              <div className="ms-4 lg:ms-0">
                <p className="font-medium text-gray-800 dark:text-gray-200">
                Maria S.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Head of IT
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


    </Carousel>
        </div>
    );
};

export default Review;