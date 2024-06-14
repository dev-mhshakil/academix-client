import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CourseTable = ({ course, index }) => {
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
            <Link className="font-medium text-white px-8 py-2 bg-red-600 hover:bg-red-800 flex items-center gap-3">
              <RiDeleteBin5Line size={20} />
              <span>Delete</span>
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CourseTable;
