/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { FcBusinessman } from "react-icons/fc";
import { MdOutlineAssignment } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const DeleteCourse = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [courseData, setCourseData] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://academix-server-xe39.onrender.com/course/${id}`)
      .then((response) => {
        setCourseData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the course data!", error);
      });
  }, [id]);

  const handleDelete = () => {
    axios
      .delete(`https://academix-server-xe39.onrender.com/course/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Course Deleted successfully");
        document.getElementById("my_modal_5").close();
        navigate("/dashboard/all-courses");
      })
      .catch((error) => {
        console.error("There was an error deleting the course!", error);
      });
  };

  return (
    <div>
      <h1 className="text-4xl text-center">Delete Course</h1>
      <div className="mx-4 md:mx-0 mt-10 mb-20 border border-secondary/60 rounded-md hover:outline hover:outline-primary">
        <div>
          <img src={courseData?.courseBanner} alt="" className="w-full h-96" />
        </div>
        <div className="px-6">
          <h1 className="text-2xl font-semibold mt-4">{courseData?.title}</h1>

          <div className="flex justify-between items-center my-6">
            <p className="flex items-center gap-2">
              <CiUser size={20} /> <span>20 people</span>
            </p>
            <p className="flex items-center">
              <MdOutlineAssignment size={20} />{" "}
              <span>{courseData?.courseDuration} months</span>
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-secondary/80">
            <div className="flex items-center py-4 ">
              <img
                src={courseData?.instructorPhoto}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              <p className="ml-3">{courseData?.instructor}</p>
            </div>
            <div>
              <p className="text-primary">{courseData?.category}</p>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 border-t border-secondary/80">
            <button
              className="px-4 h-10 bg-red-500 text-white my-3"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Delete Course
            </button>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Delete Course</h3>
          <p className="py-4">Are you sure you want delete this course?</p>
          <div className="modal-action">
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-500 text-white"
              >
                Delete
              </button>
              <button
                onClick={() => document.getElementById("my_modal_5").close()}
                className="px-4 py-2 bg-green-500 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default DeleteCourse;
