import React from "react";
import "../../App.css";

function Dashboard() {
  return (
    <>
      <a href="#" class="relative block group">
        <img
          src="https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768"
          alt=""
          class="h-[350px] w-full object-cover transition duration-500 group-hover:opacity-90 sm:h-[450px]"
        />
      </a>
      <section className="dark:text-gray-100">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            {/* <h3 className="mt-3 text-center dark:text-gray-400">Welcome to</h3> */}
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-800">
              WIKUSAMA HOTEL
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-800">
              Malang, Jawa Timur
            </p>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-12 space-y-12">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-800">
                      Rooms
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Experience our rooms with it's unique, grandeur, elegance.
                      Feature with selections of Single, Deluxe, and Family
                      Suites rooms.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-800">
                      Dining
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Our restaurant can be accessed by the guest staying on the
                      hotel also free for public. Provides with stunning views
                      of the city skyline.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-7 h-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium leading-6 dark:text-gray-800">
                      Facilities
                    </h4>
                    <p className="mt-2 dark:text-gray-400">
                      Wikusama Hotel provides a full range of hotel facilities
                      for your complete comfort and convenience during your
                      holiday in Malang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div className="relative flex items-center justify-center w-full dark:text-gray-50">
            <button
              aria-label="Slide back"
              type="button"
              className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              <svg
                width="8"
                height="14"
                fill="none"
                viewBox="0 0 8 14"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M7 1L1 7L7 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img
                  className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
                  src="https://hotelxtoronto.com/_novaimg/4906918-1481330_0_0_2200_1200_2200_1200.rc.jpg"
                  alt="Image 1"
                />
              </div>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img
                  className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
                  src="https://static.leonardo-hotels.com/image/leonardohotelbucharestcitycenter_room_comfortdouble2_2022_4000x2600_7e18f254bc75491965d36cc312e8111f_1200x780_mobile_3.jpeg"
                  alt="Image 2"
                />
              </div>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img
                  className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
                  src="https://www.murhotels.com/cache/40/b3/40b3566310d686be665d9775f59ca9cd.jpg"
                  alt="Image 3"
                />
              </div>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img
                  className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwtrjSmExKwIgpKHTGAMLmWMDXGnDObH5rKA&usqp=CAU"
                  alt="Image 4"
                />
              </div>
              <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                <img
                  className="object-cover object-center h-96 aspect-square dark:bg-gray-500"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJZntHBZtD6KqnN51t5pQE6bc5hSaD2HQrTQ&usqp=CAU"
                  alt="Image 5"
                />
              </div>
            </div>
            <button
              aria-label="Slide forward"
              id="next"
              className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
            >
              <svg
                width="8"
                height="14"
                viewBox="0 0 8 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
              >
                <path
                  d="M1 1L7 7L1 13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-800">
                  A Glorious Hotel
                </h3>
                <p className="mt-3 text-lg dark:text-gray-400">
                  Wikusama Hotel offers an extraordinary atmosphere for both
                  business and leisure traveler in Malang.
                </p>
                <div className="mt-12 space-y-12">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-800">
                        Incredible 
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Inspired by beautiful flowers name at mountain
                        surrounding Ijen Suites, Ijen Suites Hotel has 12
                        stunning meeting rooms.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-800">
                        Stunning
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Whether you are planning a conference or a board
                        meeting, our stunning rooms set the scene for an
                        unforgettable experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-violet-400 dark:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-7 h-7"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading-6 dark:text-gray-800">
                        Marvelous
                      </h4>
                      <p className="mt-2 dark:text-gray-400">
                        Together with our experienced banquet manager, our
                        meeting room will help you plan the tiniest detail and
                        ensure that you enjoy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                <img
                  src="https://asset.kompas.com/crops/SmXa-KlIkF_MVULGBN7IzlIyV1g=/4x0:904x600/750x500/data/photo/2022/12/09/639342fd0b5a8.jpg"
                  alt=""
                  className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-8 dark:text-gray-800">
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leading-none text-center">
            What our customers are saying about us
          </h1>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-400"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                The rooms were clean, very comfortable, and the staff was
                amazing. They went over and beyond to help make our stay
                enjoyable. I highly recommend this hotel for anyone visiting
                downtown
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-400"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src="https://source.unsplash.com/50x50/?portrait?1"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
              />
              <p className="text-xl font-semibold leading-tight">
                Tony Stark
              </p>
              <p className="text-sm uppercase">Billionare</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-400"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                They were extremely accommodating and allowed us to check in
                early at like 10am. We got to hotel super early and I didn’t
                wanna wait. So this was a big plus. The sevice was exceptional
                as well.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-400"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src="https://source.unsplash.com/50x50/?portrait?2"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
              />
              <p className="text-xl font-semibold leading-tight">
                Bruce Banner
              </p>
              <p className="text-sm uppercase">Scientist</p>
            </div>
          </div>
          <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
              <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 dark:text-violet-400"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                This is the perfect hotel for a weekend getaway in. The downtown
                area on Main Street is a best kept secret and the offers
                everything you need if you don’t feel like venturing out so much
                on a rough day.
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 dark:text-violet-400"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
              <img
                src="https://source.unsplash.com/50x50/?portrait?3"
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500 dark:bg-gray-700"
              />
              <p className="text-xl font-semibold leading-tight">
                Natasha Romanoff
              </p>
              <p className="text-sm uppercase">Architect</p>
            </div>
          </div>

          <section className="my-8  dark:text-gray-800">
            <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-16 h-16 dark:text-violet-400"
              >
                <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
              </svg>
              <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-600">
                "Took advantage of the downtown location to walk to dinner,
                check out a couple galleries, and have drinks. It was great.
                Service top notch as always. Bed comfort can not be beat."
              </p>
              <div className="flex justify-center space-x-3">
                <img
                  src="https://source.unsplash.com/80x80/?portrait?1"
                  alt=""
                  className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500 dark:bg-gray-700"
                />
                <div>
                  <p className="leading-tight">Leroy Jenkins</p>
                  <p className="text-sm leading-tight dark:text-gray-400">
                    Founder, Company
                  </p>
                  <a
                    className="flex items-center py-2 space-x-1 text-sm dark:text-violet-400"
                    href="/"
                  >
                    <span>Read full story</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* <section className="dark:bg-white">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
              <h2 className="text-4xl font-bold">
                Duo assum utroque appetere an
              </h2>
              <p className="dark:text-gray-400">
                Pri ex magna scaevola moderatius. Nullam accommodare no vix, est
                ei diceret alienum, et sit cetero malorum. Et sea iudico
                consequat, est sanctus adipisci ex.
              </p>
            </div>
            <div className="p-6 xl:col-span-3">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-violet-200 dark:text-gray-800">
                    <p>
                      An audire commodo habemus cum. Ne sed corrumpit
                      repudiandae. Tota aliquip democritum pro in, nec
                      democritum intellegam ne. Propriae volutpat dissentiet ea
                      sit, nec at lorem inani tritani, an ius populo perfecto
                      vituperatoribus. Eu cum case modus salutandi, ut eum
                      vocent sensibus reprehendunt.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?1"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-violet-200 dark:text-gray-800">
                    <p>
                      Sit wisi sapientem ut, pri civibus temporibus voluptatibus
                      et, ius cu hinc fabulas. Nam meliore minimum et, regione
                      convenire cum id. Ex pro eros mucius consectetuer, pro
                      magna nulla nonumy ne, eam putent iudicabit consulatu cu.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?2"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-violet-200 dark:text-gray-800">
                    <p>
                      Putant omnium elaboraret per ut. Id dicta tritani nominavi
                      quo, mea id justo errem elaboraret. Agam mollis scripserit
                      ea his, ut nec postea verear persecuti. Ea noster senserit
                      eam, ferri omittantur ei nec. Id mel solet libris
                      efficiantur, commune explicari et eos. Case movet ad est,
                      sed tota vocent appetere ea.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?3"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-violet-200 dark:text-gray-800">
                    <p>
                      Te omnes virtute volutpat sed. Ei esse eros interesset
                      vel, ei populo denique ocurreret vix, eu cum pertinax
                      mandamus vituperatoribus. Solum nihil luptatum per ex, ei
                      amet viderer eos. Ea illum labitur mnesarchum pro. Eius
                      meis salutandi ei nam, alterum expetenda et nec. Expetenda
                      intellegat at eum, per mazim sanctus honestatis ad. Ei
                      noluisse invenire vix. Te ancillae patrioque qui, probo
                      bonorum vivendum ex vim.
                    </p>
                    <div className="flex items-center mt-4 space-x-4">
                      <img
                        src="https://source.unsplash.com/50x50/?portrait?4"
                        alt=""
                        className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                      />
                      <div>
                        <p className="text-lg font-semibold">Leroy Jenkins</p>
                        <p className="text-sm dark:text-gray-400">
                          CTO of Company Co.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-6 dark:text-gray-800">
        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Fake address, 9999 City</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>123456789</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5 mr-2 sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>contact@business.com</span>
              </p>
            </div>
          </div>
          <form
            novalidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid"
          >
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Leroy Jenkins"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:focus:border-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="leroy@jenkins.com"
                className="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-800"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-800"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400"
            >
              Submit
            </button>
          </form>
        </div>
      </section> */}
    </>
  );
}

export default Dashboard;
