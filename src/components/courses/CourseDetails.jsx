import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaRegStar,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrUpdate } from "react-icons/gr";
import { IoMdTime } from "react-icons/io";
import { SiLevelsdotfyi } from "react-icons/si";
import { SlGraduation } from "react-icons/sl";
import { Link, useParams } from "react-router-dom";

const CourseDetails = () => {
  const id = useParams();

  const [courseData, setCourseData] = useState();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_APP_LIVE}/course/${id?.id}`).then((response) => {
      console.log(response);
      setCourseData(response?.data);
    });
  }, [id]);

  return (
    <div className="max-w-[1240px] p-4 mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="col-span-2">
          <div>
            <img src={courseData?.courseBanner} alt="" className="w-full" />
          </div>
          <div className="mt-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-center gap-4 w-[280px]">
              <img
                src={courseData?.instructorPhoto}
                alt=""
                className="w-14 h-14 rounded-full"
              />
              <p className="h-12 pr-0 md:pr-10 border-none md:border-r-[1px] border-slate-400  flex items-center justify-start md:justify-center">
                Instructor: {courseData?.instructor}
              </p>
            </div>

            <div className="flex items-center gap-4 w-[230px]">
              <p className="h-12 pr-0 md:pr-10 border-none md:border-r-[1px] md:border-slate-400  flex items-center justify-center">
                Category: {courseData?.category}
              </p>
            </div>
            <div className="flex items-center gap-4 w-[230px]">
              <p className="h-12 pr-0 md:pr-10 border-none md:border-r-[1px] border-slate-400 flex items-center justify-center">
                Last Updated: {courseData?.createdAt.split("T")[0]}
              </p>
            </div>
            <div className="flex items-center gap-4 w-[230px]">
              <p className="h-12 flex items-center justify-center gap-2">
                Rating:{" "}
                <span className="text-amber-500 flex">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaRegStar />
                </span>
              </p>
            </div>
          </div>
          {/* course details */}
          <div className="mt-10">
            <h1 className="text-4xl font-semibold">{courseData?.title}</h1>

            <div className="mt-10">
              <h3 className="text-xl font-semibold">About Course</h3>
              <p className="mt-6 text-justify">{courseData?.description}</p>
            </div>
          </div>
          {/* instructor */}
          <div className="mt-8">
            <h1 className="text-2xl font-semibold">Your Instructors</h1>
            <div className="mt-8 ">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                <img
                  src={courseData?.instructorPhoto}
                  alt=""
                  className="w-full md:w-[180px] h-[300px] md:h-[180px] bg-secondary/40 p-4"
                />
                <div>
                  <h2 className="text-2xl font-semibold">
                    {courseData?.instructor}
                  </h2>
                  <p className="font-light mt-2">Web Developer</p>
                  <p className="my-6 font-light">
                    Experienced web development instructor teaching HTML, CSS,
                    JavaScript, and frameworks, focused on practical coding
                    skills and industry knowledge.
                  </p>
                  <p className="flex items-center gap-4">
                    Follow me:{" "}
                    <span className="flex gap-2 text-primary">
                      <a href="https://github.com/dev-mhshakil">
                        <FaGithub size={20} />
                      </a>
                      <a href="https://www.linkedin.com/in/mehedihshakil/">
                        <FaLinkedin size={20} />
                      </a>
                      <FaTwitter size={20} />
                      <FaYoutube size={20} />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-secondary/20 p-6">
            <div className="border-b-[1px] border-slate-300">
              <p className="text-2xl text-primary font-semibold">
                Price: ${courseData?.price}
              </p>
              <div className="my-10 flex justify-center">
                <Link
                  to={`/checkout/${courseData?._id}`}
                  className="w-full h-12 rounded-md bg-primary text-white flex justify-center"
                >
                  <button>Pay now</button>
                </Link>
              </div>
            </div>
            <div className="mt-6">
              <div className="flex flex-col gap-4">
                <div className="flex gap-4">
                  <SiLevelsdotfyi size={20} className="text-primary" />
                  <span className="text-primary">{courseData?.level}</span>
                </div>
                <div className="flex gap-4">
                  <SlGraduation size={24} className="text-primary" />
                  <span className="text-primary">0 Total Enroll</span>
                </div>
                <div className="flex gap-4">
                  <IoMdTime size={24} className="text-primary" />
                  <span className="text-primary">
                    {courseData?.courseDuration} months
                  </span>
                </div>
                <div className="flex gap-4">
                  <GrUpdate size={20} className="text-primary" />
                  <span className="text-primary">
                    {courseData?.createdAt.split("T")[0]} last updated
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
