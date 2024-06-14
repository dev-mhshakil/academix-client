import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <Link to="/">
        <div className="hover:cursor-pointer flex justify-center items-center">
          <img
            src="https://i.ibb.co/X8GW0QS/logo.png"
            className="w-[56px]"
            alt="logo"
          />
          <h1 className="w-full text-3xl font-bold">
            Acade<span className="text-primary">mix</span>
          </h1>
        </div>
      </Link>
      <div>
        <ul className="hidden md:flex justify-center items-center gap-4  hover:cursor-pointer ">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/courses">Courses</Link>
          </li>
          <li className="">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact</Link>
          </li>
          {!user?.email ? (
            <>
              <li className="w-24 h-10 flex justify-center items-center text-white bg-primary">
                <Link to="/login">Log in</Link>
              </li>
            </>
          ) : (
            <>
              <li className="">
                <Link to="dashboard">Dashboard</Link>
              </li>
              <li className="flex items-center justify-center">
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 flex justify-center bg-primary hover:bg-primary/90 text-white text-base md:text-lg "
                >
                  Logout
                </button>
              </li>
            </>
          )}
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
            <img
              src="https://i.ibb.co/X8GW0QS/logo.png"
              alt="logo"
              width="56px"
            />
            <h1 className="w-full text-3xl font-bold">
              Acade<span className="text-primary">mix</span>
            </h1>
          </div>
          <ul className="uppercase p-4 font-semibold">
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer ">
              <Link to="/">Home</Link>
            </li>
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer">
              <Link to="/courses/">Course</Link>
            </li>
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer ">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="p-4 border-b border-blue-200 hover:cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
            {!user?.email ? (
              <>
                <li className="w-24 h-10 flex justify-center items-center text-white bg-primary">
                  <Link to="/login">Log in</Link>
                </li>
              </>
            ) : (
              <>
                <li className="p-4 border-b border-blue-200 hover:cursor-pointer">
                  <Link to="dashboard">Dashboard</Link>
                </li>
                <li className="flex items-center justify-center p-4">
                  <button
                    onClick={handleLogout}
                    className="w-full h-10 flex justify-center items-center bg-primary hover:bg-primary/90 text-white "
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
