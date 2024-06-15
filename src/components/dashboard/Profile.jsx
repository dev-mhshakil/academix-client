import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import CourseTable from "./CourseTable";
import { ImCross } from "react-icons/im";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useAuth();

  const [userData, setUserData] = useState();

  const [courses, setCourses] = useState();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_LIVE}/user/${user?.email}`)
      .then((response) => {
        console.log(response.data);
        setUserData(response.data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_LIVE}/courses/${user?.email}`)
      .then((response) => {
        console.log(response.data);
        setCourses(response.data);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const photoURL = form.photoUrl.value;
    const address = form.address.value;

    const data = { name, email, phone, photoURL, address };

    axios
      .patch(`${import.meta.env.VITE_APP_LIVE}/user/${userData?.email}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        console.log(response?.data);
        toast.success("Profile updated");
        document.getElementById("my_modal_5").close();
      });
  };

  return (
    <div className=" w-full h-full">
      <div className="flex flex-col gap-4 justify-center items-center">
        <img
          src={userData?.photoURL || "https://i.ibb.co/qjdnSWs/admin.png"}
          alt=""
          className="w-28 rounded-full"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-semibold">{userData?.name}</h1>
          <p>{userData?.email}</p>
          <p>
            Role:{" "}
            <span className="capitalize font-semibold">{userData?.role}</span>
          </p>
          <p>
            Profile Updated: <span>{userData?.updatedAt}</span>
          </p>
          <div className="mt-4">
            <button
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="px-4 py-2 rounded-md bg-primary text-white"
            >
              Edit Profile
            </button>
          </div>
        </div>
        {userData?.role === "instructor" && (
          <div>
            <p className="text-center py-10 text-xl font-semibold">
              Total Courses: {courses?.length}
            </p>
            <div>
              <div className="w-full">
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
                      <CourseTable
                        key={index}
                        course={course}
                        index={index + 1}
                      />
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <div className="">
            <h3 className="font-bold text-lg text-center">Edit Profile</h3>
            <div className="modal-action absolute top-0 right-6">
              <div className="flex gap-3">
                <button
                  onClick={() => document.getElementById("my_modal_5").close()}
                  className=""
                >
                  <ImCross size={20} className="text-red-500" />
                </button>
              </div>
            </div>
          </div>
          <form action="" onSubmit={handleUpdate}>
            <div className="flex flex-col mt-6">
              <label htmlFor="">Full Name</label>
              <input
                defaultValue={userData?.name}
                type="text"
                id="name"
                name="name"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="full name"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="">Email Address</label>
              <input
                defaultValue={userData?.email}
                disabled
                type="email"
                id="email"
                name="email"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="full name"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="">Photo URL</label>
              <input
                defaultValue={userData?.photoURL}
                type="text"
                id="photoUrl"
                name="photoUrl"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="photo URL"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="">Phone Number</label>
              <input
                defaultValue={userData?.phone}
                type="number"
                id="phone"
                name="phone"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="phone number"
              />
            </div>
            <div className="flex flex-col mt-6">
              <label htmlFor="">Address</label>
              <input
                defaultValue={userData?.address}
                type="text"
                id="address"
                name="address"
                className="border py-3 rounded-md outline-primary mt-3 px-4"
                placeholder="address"
              />
            </div>
            <div className="mt-6 flex ">
              <button
                type="submit"
                className="px-4 py-2 bg-green-500 text-white"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;
