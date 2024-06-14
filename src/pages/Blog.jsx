import { GoDotFill } from "react-icons/go";
import { IoTimeOutline } from "react-icons/io5";

const Blog = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* left side content */}
        <div className="order-last md:order-first">
          <div className=" md:w-full max-h-[800px] mx-4 border border-secondary/60 rounded-sm shadow-sm">
            <div className="">
              <img
                src="https://i.ibb.co/c2yb8xR/blog-3.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="mt-8 px-4 pb-6">
              <div className="flex justify-between items-center">
                <p className="flex justify-center items-center gap-4">
                  <IoTimeOutline size={20} className="text-primary" />{" "}
                  <span>June 13, 2024</span>
                </p>
                <p className="px-6 py-2 bg-primary text-white border rounded-md rounded-tr-[32px] rounded-bl-[32px]">
                  Programming
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold mt-8">
                  A Student Learning with Online Programme on Computer
                </h1>
                <p className="py-4">
                  A student engaged in an online computer learning program gains
                  knowledge through interactive lessons, video tutorials, and
                  real-time assessments. This flexible approach allows for
                  personalized learning, enabling students to study at their own
                  pace and access a wealth of resources anytime, fostering both
                  independence and technical skills.
                </p>
              </div>
              <div>
                <button className="py-3 text-primary">Explore More</button>
              </div>
            </div>
          </div>

          {/* left side content 2 */}

          <div className=" md:w-full max-h-[800px] mt-6 md:mt-20 mx-4 border border-secondary/60 rounded-sm shadow-sm">
            <div className="">
              <img
                src="https://i.ibb.co/c2yb8xR/blog-3.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="mt-8 px-4 pb-6">
              <div className="flex justify-between items-center">
                <p className="flex justify-center items-center gap-4">
                  <IoTimeOutline size={20} className="text-primary" />{" "}
                  <span>June 13, 2024</span>
                </p>
                <p className="px-6 py-2 bg-primary text-white border rounded-md rounded-tr-[32px] rounded-bl-[32px]">
                  Programming
                </p>
              </div>
              <div>
                <h1 className="text-2xl font-semibold mt-8">
                  A Student Learning with Online Programme on Computer
                </h1>
                <p className="py-4">
                  A student engaged in an online computer learning program gains
                  knowledge through interactive lessons, video tutorials, and
                  real-time assessments. This flexible approach allows for
                  personalized learning, enabling students to study at their own
                  pace and access a wealth of resources anytime, fostering both
                  independence and technical skills.
                </p>
              </div>
              <div>
                <button className="py-3 text-primary">Explore More</button>
              </div>
            </div>
          </div>
        </div>

        {/* right side content */}
        <div className="mt-10 md:mt-0">
          {/* search input and button */}
          <div className="mb-4 mx-4">
            <form className="max-w-md mx-auto">
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-secondary/20 outline-primary "
                  placeholder="Search Mockups, Logos..."
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:bg-primary/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-4 py-2 "
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          {/* categories  */}
          <div className="m-4 p-6 md:w-[400px] border shadow-sm rounded-sm">
            <h1 className="text-3xl font-semibold">Categories</h1>
            <div className="mt-8 flex justify-start items-center gap-3">
              <p className="text-secondary">
                <GoDotFill size={20} />
              </p>
              <p className="hover:text-primary cursor-pointer">Education</p>
            </div>
            <div className="mt-8 flex justify-start items-center gap-3">
              <p className="text-secondary">
                <GoDotFill size={20} />
              </p>
              <p className="hover:text-primary cursor-pointer">Software</p>
            </div>
            <div className="mt-8 flex justify-start items-center gap-3">
              <p className="text-secondary">
                <GoDotFill size={20} />
              </p>
              <p className="hover:text-primary cursor-pointer">Programming</p>
            </div>
            <div className="mt-8 flex justify-start items-center gap-3">
              <p className="text-secondary">
                <GoDotFill size={20} />
              </p>
              <p className="hover:text-primary cursor-pointer">
                Web Development
              </p>
            </div>
          </div>

          {/* recent posts */}

          <div className="mt-6 m-4 p-6 md:w-[400px] border shadow-sm rounded-sm">
            <h1 className="text-3xl font-semibold mb-2">Recent Posts</h1>
            <div>
              <p className="py-4">
                A Student Learning with Online Programme on Computer
              </p>
              <p className="py-4">
                All Students and Teachers are Happy To Back to School
              </p>
              <p className="py-4">
                Learners are studing with togather in the Class Room
              </p>
            </div>
          </div>

          {/* tags */}
          <div className="mt-6 m-4 p-6 md:w-[400px] border shadow-sm rounded-sm">
            <h1 className="text-3xl font-semibold mb-4">Tags</h1>
            <p>back / happy / pc / room / school / </p>
            <p className="mt-2">students / studying / teachers / together</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
