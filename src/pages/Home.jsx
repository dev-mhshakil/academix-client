import About from "../components/home/About";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Courses from "./Courses";

const Home = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <Hero />
      <Features />

      <div className="mt-20">
        <div className="flex flex-col justify-center">
          <p className="text-center text-xl text-primary ">Our Courses List</p>
          <h1 className="text-3xl md:text-4xl text-center mt-4 font-bold">
            Most Popular Courses
          </h1>
        </div>
        <Courses />
      </div>
      <About />
    </div>
  );
};

export default Home;
