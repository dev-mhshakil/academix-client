import { BiSolidCategory } from "react-icons/bi";
import { FiMenu } from "react-icons/fi";
import { GiPieChart } from "react-icons/gi";
import { GrTasks } from "react-icons/gr";
import { HiMiniUsers } from "react-icons/hi2";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
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

        <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <li>
            <Link to="/dashboard">
              <GiPieChart size={20} />
              <span className="text-base md:text-lg ml-2">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/users">
              <HiMiniUsers size={20} />
              <span className="text-base md:text-lg ml-2">Users</span>
            </Link>
          </li>
          <li>
            <Link>
              <GrTasks size={20} />
              <span className="text-base md:text-lg ml-2">Courses</span>
            </Link>
          </li>
          <li>
            <Link>
              <BiSolidCategory size={20} />
              <span className="text-base md:text-lg ml-2">Categories</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
