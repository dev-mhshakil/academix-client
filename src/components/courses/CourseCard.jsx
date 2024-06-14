/* eslint-disable react/prop-types */
import { CiUser } from "react-icons/ci";
import { MdOutlineAssignment, MdPayment } from "react-icons/md";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="mx-4 md:mx-0 border border-secondary/60 rounded-md hover:outline hover:outline-primary">
      <div className="mb-2">
        <img src={course?.courseBanner} alt="" className="w-full h-96" />
      </div>
      <div className="px-6">
        <h1 className="text-2xl font-semibold">{course?.title}</h1>
        <div className="flex justify-between items-center my-6">
          <p className="flex items-center gap-2">
            <CiUser size={20} /> <span>20 people</span>
          </p>
          <p className="flex items-center">
            <MdOutlineAssignment size={20} />
            <span>{course?.courseDuration}months</span>
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
        <div className="border-t border-secondary/80 py-4">
          <Link to={`/checkout/${course?._id}`}>
            <button
              // onClick={makePayment}
              className="px-4 py-2 text-white bg-green-600 flex items-center gap-2"
            >
              <MdPayment size={20} />
              <span>Pay</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
