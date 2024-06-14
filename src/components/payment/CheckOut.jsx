import axios from "axios";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { MdOutlineAssignment } from "react-icons/md";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const id = useParams();

  const [course, setCourse] = useState();

  useEffect(() => {
    axios
      .get(`https://academix-server-xe39.onrender.com//course/${id?.id}`)
      .then((response) => {
        setCourse(response.data);
      });
  }, [id?.id]);

  const handleCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const productId = course?._id;
    const orderData = {
      productId,
      name,
      email,
      phone,
    };
    axios
      .post("https://academix-server-xe39.onrender.com//orders", orderData)
      .then(function (response) {
        const url = response.data.url;
        window.location.replace(url);
      });
  };

  return (
    <div className="max-w-[1240px] h-full md:h-[calc(100vh-96px)] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-20 ">
        <div>
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
                    <img
                      src={course?.instructorPhoto}
                      alt=""
                      className="w-10 h-10"
                    />
                  </div>
                  <p>{course?.instructor}</p>
                </div>
                <div className="ml-4">
                  <p className="text-primary">{course?.category}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="max-w-[540px] mx-auto border rounded-md border-t-2 border-t-primary px-6 py-8 shadow-md">
            <h1 className="text-3xl text-center pb-4">Payment Info</h1>
            <p className="text-center">
              Product: <span className="text-primary">{course?.title}</span>
            </p>
            <p className="text-center">
              Price: <span className="text-primary">${course?.price}</span>
            </p>
            <form onSubmit={handleCheckout} action="">
              <div className="flex flex-col mt-6">
                <label htmlFor="">Full Name</label>
                <input
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
                  type="email"
                  id="email"
                  name="email"
                  className="border py-3 rounded-md outline-primary mt-3 px-4"
                  placeholder="email address"
                />
              </div>
              <div className="flex flex-col mt-6">
                <label htmlFor="">Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  className="border py-3 rounded-md outline-primary mt-3 px-4"
                  placeholder="phone number"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary w-full text-white py-3 px-6 rounded-md mt-6"
                >
                  Pay
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
