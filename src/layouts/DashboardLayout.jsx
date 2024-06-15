// import { BiSolidCategory } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { GiPieChart } from "react-icons/gi";
import { GrTasks } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { IoIosAddCircle } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaHome } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const DashboardLayout = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <div className="drawer drawer-mobile lg:drawer-open w-full">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center mt-20 lg:mt-10">
        {/* Page content here */}
        <Outlet />

        <label
          htmlFor="my-drawer-2"
          className="drawer-button lg:hidden fixed top-4 left-4 p-2"
        >
          <FiMenu size={32} />
        </label>
      </div>

      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          className="drawer-overlay lg:hidden"
          aria-label="close sidebar"
        ></label>

        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content flex flex-col">
          {/* Sidebar content here */}
          <li>
            <Link to="/">
              <FaHome size={20} />
              <span className="text-base md:text-lg ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard">
              <GiPieChart size={20} />
              <span className="text-base md:text-lg ml-2">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/profile">
              <ImProfile size={20} />{" "}
              <span className="text-base md:text-lg ml-2">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/users">
              <HiMiniUsers size={20} />
              <span className="text-base md:text-lg ml-2">Users</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/all-courses">
              <GrTasks size={20} />
              <span className="text-base md:text-lg ml-2">All Courses</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/add-course">
              <IoIosAddCircle size={20} />
              <span className="text-base md:text-lg ml-2">Add Course</span>
            </Link>
          </li>
          {/* <li>
            <Link to="/dashboard/categories">
              <BiSolidCategory size={20} />
              <span className="text-base md:text-lg ml-2">Categories</span>
            </Link>
          </li> */}
          <div className="mt-auto">
            <li className="flex items-center justify-center">
              <button
                onClick={handleLogout}
                className=" w-full h-12 flex justify-center bg-primary hover:bg-primary/90 text-white text-base md:text-lg "
              >
                Logout
              </button>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
