import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <div className="hover:cursor-pointer flex justify-center items-center">
        <img src="src/assets/logo.png" className="w-[56px]" alt="logo" />
        <h1 className="w-full text-3xl font-bold">
          Acade<span className="text-primary">mix</span>
        </h1>
      </div>
      <div>
        <ul className="hidden md:flex justify-center items-center gap-4  hover:cursor-pointer ">
          <li className="">Home</li>
          <li className="">Courses</li>
          <li className="">Instructor</li>
          <li className="">About</li>
          <li className="py-2 px-5 rounded-md text-white bg-primary">Log in</li>
        </ul>
        <div className="block md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-backgroundColor bg-backgroundColor ease-in-out duration-500"
              : "fixed left-[100%]"
          }
        >
          <div className="hover:cursor-pointer p-6 flex justify-center items-center">
            <img src="src\assets\logo.png" alt="logo" width="56px" />
            <h1 className="w-full text-3xl font-bold">
              Acade<span className="text-primary">mix</span>
            </h1>
          </div>
          <ul className="uppercase p-4 font-semibold">
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer ">
              Home
            </li>
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer">
              Courses
            </li>
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer ">
              Instructor
            </li>
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer">
              About
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
