import axios from "axios";
import { useEffect, useState } from "react";
import UsersTable from "./UsersTable";

const UsersList = () => {
  const [usersList, setUsersList] = useState();

  useEffect(() => {
    axios.get("http://localhost:8000/users").then((response) => {
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
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {usersList?.map((user, index) => (
            <UsersTable key={index} user={user} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default UsersList;
