/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const EditUser = () => {
  const email = useParams();

  const [userData, setUserData] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_APP_LIVE}/user/${email?.email}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const role = form.role.value;
    const phone = form.phone.value;
    const photoURL = form.photoUrl.value;
    const address = form.address.value;

    const data = { name, email, role, phone, photoURL, address };

    axios
      .patch(`${import.meta.env.VITE_APP_LIVE}/user/${userData?.email}`, data, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(function (response) {
        toast.success("Profile updated");
      });
  };
  return (
    <div className="w-full md:min-w-[800px] mx-auto">
      <h1 className="text-center text-4xl font-semibold my-8">Edit Users</h1>
      <div className="max-w-[600px] mx-auto border rounded-md border-t-2 border-t-primary px-6 py-12 shadow-md">
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
            <label htmlFor="role">Role</label>
            <select
              name="role"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
            >
              <option value="student" defaultValue="student">
                Student
              </option>
              <option value="instructor">Instructor</option>
            </select>
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
            <button type="submit" className="px-4 py-2 bg-green-500 text-white">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
