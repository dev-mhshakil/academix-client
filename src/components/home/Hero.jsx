import { BsMouse } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="max-w-[1240px] h-[calc(100vh-96px)] overflow-auto mx-auto px-2 md:px-4">
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-[40%]">
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-center md:text-left font-bold pb-2 md:pb-4">
            Empower Your Learning <span className="text-primary">Journey</span>
          </h1>
          <p className="text-base md:text-md lg:text-xl text-center md:text-left px-2 py-3 md:py-0 md:px-0">
            Discover, Learn, and Achieve with Our Comprehensive LMS Platform.
            Join a Community of Learners and Unlock Your Full Potential Today!
          </p>
          <div className="flex justify-center md:justify-start gap-2 mt-2 md:mt-4 lg:mt-6">
            <button className="py-3 px-4 rounded-md bg-secondary ">
              All Courses
            </button>
            <button className="py-3 px-4 rounded-md bg-primary text-white">
              Contact Us
            </button>
          </div>

          <div className="flex justify-center md:justify-start items-center gap-4 mt-8">
            <BsMouse size={20} />
            <p>Scroll to see more sections</p>
          </div>
        </div>
        <div className="w-full md:w-[60%] order-first md:order-last">
          <img src="src/assets/hero.png" alt="hero" className="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
