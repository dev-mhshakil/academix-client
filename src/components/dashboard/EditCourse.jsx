/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const EditCourse = () => {
  const { user } = useAuth();
  const [userData, setUserData] = useState();
  const [courseData, setCourseData] = useState();

  const id = useParams();

  const token = localStorage.getItem("token");

  // get user data from server
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://academix-server-xe39.onrender.com/user/${user.email}`)
        .then((response) => {
          setUserData(response.data);
        });
    }
  }, [user?.email]);

  // get course data from server
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://academix-server-xe39.onrender.com/course/edit/${id?.id}`)
        .then((response) => {
          setCourseData(response.data);
        });
    }
  }, [id, user?.email]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const courseBanner = form.courseBanner.value;
    const instructor = form.instructor.value;
    const instructorPhoto = form.instructorPhoto.value;
    const category = form.category.value;
    const price = form.price.value;
    const courseDuration = form.duration.value;
    const level = form.level.value;

    const courseData = {
      title,
      category,
      price,
      courseDuration,
      level,
      courseBanner,
      description,
      instructor,
      instructorPhoto,
    };

    try {
      const response = await axios.patch(
        `https://academix-server-xe39.onrender.com/course/edit/${id?.id}`,
        courseData,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Course edited successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="max-w-[1240px] h-full mx-0 md:mx-auto">
      <h1 className="text-4xl text-center text-primary my-8">Edit Course</h1>
      <div className="w-[320px] mx-2 lg:w-[800px] border rounded-md border-t-2 border-t-primary px-3 py-12 shadow-md">
        {userData?.role === "instructor" &&
        userData?.email === courseData?.userEmail ? (
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label htmlFor="title">Course Title</label>
              <input
                defaultValue={courseData.title}
                type="text"
                id="title"
                name="title"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="course title"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="description">Description</label>
              <textarea
                defaultValue={courseData?.description}
                id="description"
                name="description"
                className="border h-40 py-2 rounded-md outline-primary mt-3 px-4"
                placeholder="description"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="courseBanner">Course Banner URL</label>
              <input
                defaultValue={courseData.courseBanner}
                type="text"
                id="courseBanner"
                name="courseBanner"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="Course Banner URL"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="instructor">Instructor Name</label>
              <input
                defaultValue={courseData.instructor}
                type="text"
                id="instructor"
                name="instructor"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="Instructor Name"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="instructorPhoto">Instructor Photo URL</label>
              <input
                defaultValue={courseData.instructor}
                type="text"
                id="instructorPhoto"
                name="instructorPhoto"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="Instructor Photo URL"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="category">Category</label>
              <select
                defaultValue={courseData.category}
                name="category"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
              >
                <option value="Web Development">Web Development</option>
                <option value="SEO">SEO</option>
              </select>
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="duration">Course Duration</label>
              <input
                defaultValue={courseData.courseDuration}
                type="text"
                id="duration"
                name="duration"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="Course Duration (e.g., 3 months)"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="price">Course Price</label>
              <input
                defaultValue={courseData.price}
                type="text"
                id="price"
                name="price"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="Course Price"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="level">Level</label>
              <select
                defaultValue={courseData.level}
                id="level"
                name="level"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
              <button
                type="submit"
                className="bg-primary w-full text-white py-3 px-6 rounded-md mt-6"
              >
                Edit Course
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center text-xl">
            Please find your course by your email to edit. <br /> You can find
            your course details in All courses page in dashboard.
          </div>
        )}
      </div>
    </div>
  );
};

export default EditCourse;
