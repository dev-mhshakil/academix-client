import axios from "axios";
import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";

const AllUsers = () => {
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_LIVE}/users`).then((response) => {
      setUsersList(response?.data);
    });
  }, []);
  return (
    <div className="w-[400px] md:w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                User name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Edit
              </th>
            </tr>
          </thead>
          {usersList?.map((userdata, index) => (
            <UsersTable key={index} userdata={userdata} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
