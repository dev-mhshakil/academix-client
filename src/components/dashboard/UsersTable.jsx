import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

/* eslint-disable react/prop-types */
const UsersTable = ({ userdata }) => {
  const { user } = useAuth();
  const [adminData, setAdminData] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_LIVE}/user/${user?.email}`)
      .then((response) => {
        setAdminData(response.data);
      });
  });
  return (
    <>
      <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {userdata?.name}
          </th>
          <td className="px-6 py-4">{userdata?.email}</td>
          <td className="px-6 py-4">{userdata?.role}</td>
          <td className="px-6 py-4">
            {adminData?.role === "admin" ? (
              <Link
                to={`/dashboard/admin/users/edit/${userdata?.email}`}
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </Link>
            ) : (
              <p className="font-medium">Not permitted</p>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UsersTable;
