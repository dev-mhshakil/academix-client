import { useState } from "react";
import CourseCard from "../components/courses/CourseCard";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState();

  axios.get("http://localhost:8000/courses").then(function (response) {
    setCourses(response.data);
  });

  return (
    <div className="max-w-[1240px] mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses?.map((course) => (
          <CourseCard key={course?._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
