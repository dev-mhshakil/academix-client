import { CiUser } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineAssignment } from "react-icons/md";

const CourseCard = () => {
  return (
    <div className="border border-secondary/60 rounded-md hover:outline hover:outline-primary">
      <div>
        <img src="src/assets/course.png" alt="" className="w-96 h-96" />
      </div>
      <div className="px-6">
        <h1 className="text-2xl font-semibold">
          Basic Fundamentals of Web Development
        </h1>
        <div className="flex justify-between items-center my-6">
          <p className="flex items-center gap-2">
            <CiUser size={20} /> <span>20 people</span>
          </p>
          <p className="flex items-center">
            <MdOutlineAssignment size={20} /> <span>6 months</span>
          </p>
        </div>
        <div className="flex items-center justify-between mt-8 border-t border-secondary/80">
          <div className="flex items-center py-4 ">
            <p className="p-1 bg-secondary rounded-full mr-2">
              <FcBusinessman size={36} />
            </p>
            <p>Mehedi Hasan Shakil</p>
          </div>
          <div>
            <p className="text-primary">Development</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
