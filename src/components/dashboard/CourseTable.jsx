/* eslint-disable no-unused-vars */
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

/* eslint-disable react/prop-types */
const CourseTable = ({ course, index }) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState();
  const [courseData, setCourseData] = useState();

  // get user data from server
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:8000/user/${user?.email}`)
        .then((response) => {
          console.log(response.data);
          setUserData(response.data);
        });
    }
  }, [user?.email]);

  // get course data from server
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`http://localhost:8000/course/edit/${course?._id}`)
        .then((response) => {
          console.log(response.data);
          setCourseData(response.data);
        });
    }
  }, [course?._id, user?.email]);

  console.log(userData?.email, courseData?.userEmail);
  return (
    <>
      <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th className="px-6 py-4">{index}</th>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {course?.title}
          </th>
          <td className="px-6 py-4">{course?.instructor}</td>
          <td className="px-6 py-4">{course?.category}</td>
          <td className="px-6 py-4">{course?.price}</td>
          <td className="px-6 py-4 flex gap-3">
            <Link
              to={`/dashboard/course/edit/${course?._id}`}
              className="font-medium text-white px-6 bg-green-600 hover:bg-green-800 flex items-center gap-3"
            >
              <FaRegEdit size={20} /> <span>Edit</span>
            </Link>
            {userData?.email === courseData?.userEmail ? (
              <Link
                to={`/dashboard/course/delete/${course?._id}`}
                className="font-medium text-white px-8 py-2 bg-red-600 hover:bg-red-800 flex items-center gap-3"
              >
                <RiDeleteBin5Line size={20} />
                <span>Delete</span>
              </Link>
            ) : (
              <button
                className="font-medium text-white px-8 py-2 bg-slate-600 flex items-center gap-3"
                disabled
              >
                <RiDeleteBin5Line size={20} />
                <span>Delete</span>
              </button>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CourseTable;
