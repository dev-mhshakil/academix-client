import axios from "axios";
import { useEffect, useState } from "react";
import CourseTable from "./CourseTable";

const AllCourses = () => {
  const [courses, setCourses] = useState();

  useEffect(() => {
    async function load() {
      axios.get(`${import.meta.env.VITE_APP_LIVE}/courses`).then((response) => {
        setCourses(response?.data);
      });
    }
    load();
  }, [courses]);
  return (
    <div className="w-[400px] md:w-full">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Course name
              </th>
              <th scope="col" className="px-6 py-3">
                Instructor
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>

              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          {courses?.map((course, index) => (
            <CourseTable key={index} course={course} index={index + 1} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllCourses;
