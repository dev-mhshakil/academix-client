import { BsMouse } from "react-icons/bs";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className=" h-[calc(100vh-96px)] ">
      <div className="max-w-[1240px] mx-auto px-2 md:px-4">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-[40%]">
            <p className="text-xl text-center md:text-left font-semibold mb-4">
              Online E-learning Courses
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center md:text-left font-bold pb-2 md:pb-4">
              Empower Your Learning{" "}
              <span className="text-primary">Journey</span>
            </h1>
            <p className="text-base md:text-md text-center md:text-left px-2 py-3 md:py-0 md:px-0">
              Discover, Learn, and Achieve with Our Comprehensive LMS Platform.
              Join a Community of Learners and Unlock Your Full Potential Today!
            </p>
            <div className="flex justify-center md:justify-start gap-2 mt-2 md:mt-4 lg:mt-6">
              <Link to="/courses">
                {" "}
                <button className="before:ease relative h-12 w-40 overflow-hidden border border-secondary bg-secondary text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-secondary hover:before:-translate-x-40">
                  <span className="relative z-10 text-black">All Courses</span>
                </button>
              </Link>

              <Link to="/contact">
                <button className="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80">
                  <span className="relative z-10">Contact Us</span>
                </button>
              </Link>
            </div>

            <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
              <BsMouse size={20} />
              <p>Scroll to see more sections</p>
            </div>
          </div>
          <div className="w-full md:w-[60%] order-first md:order-last">
            <img
              src="https://i.ibb.co/pJjbDnx/hero.png"
              alt="hero"
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
