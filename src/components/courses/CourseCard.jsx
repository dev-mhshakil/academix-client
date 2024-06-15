/* eslint-disable react/prop-types */
import { CiUser } from "react-icons/ci";
import { FaRegStar, FaStar } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="mx-4 md:mx-0 border border-secondary/60 rounded-md relative">
      <div className="mb-2">
        <img src={course?.courseBanner} alt="" className="w-full h-96" />
      </div>
      <div className="absolute top-6 left-8 border rounded-md rounded-tr-[28px] rounded-bl-[28px] border-primary px-6 py-1  bg-primary text-white">
        <p className="">${course?.price}</p>
      </div>
      <div className="px-6">
        <div className="flex justify-between items-center">
          <Link to={`/courses/details/${course?._id}`}>
            {" "}
            <h1 className="text-2xl font-semibold hover:text-primary">
              {course?.title}
            </h1>
          </Link>

          <p>
            <span className="text-amber-500 flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </span>
          </p>
        </div>
        <div className="flex justify-between items-center my-6">
          <p className="flex items-center gap-2">
            <CiUser size={20} /> <span>20 people</span>
          </p>
          <p className="flex gap-2 items-center">
            <MdOutlineAssignment size={20} />
            <span>{course?.courseDuration} months</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-8 border-t border-secondary/80">
          <div className="flex items-center py-4 ">
            <div className=" bg-secondary rounded-full mr-2">
              <img src={course?.instructorPhoto} alt="" className="w-10 h-10" />
            </div>
            <p>{course?.instructor}</p>
          </div>
          <div className="ml-4">
            <p className="text-primary">{course?.category}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
