/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdPayment } from "react-icons/md";
import { loadStripe } from "@stripe/stripe-js";

/* eslint-disable react/prop-types */
const CourseTable = ({ course, index }) => {
  const { user } = useAuth();
  const [userData, setUserData] = useState();
  const [courseData, setCourseData] = useState();

  // get user data from server
  useEffect(() => {
    if (user?.email) {
      axios
        .get(`https://academix-server-xe39.onrender.com/user/${user?.email}`)
        .then((response) => {
          setUserData(response.data);
        });
    }
  }, [user?.email]);

  // get course data from server
  useEffect(() => {
    if (user?.email) {
      axios
        .get(
          `https://academix-server-xe39.onrender.com/course/edit/${course?._id}`
        )
        .then((response) => {
          setCourseData(response.data);
        });
    }
  }, [course?._id, user?.email]);

  // const makePayment = async () => {
  //   const stripeKey = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

  //   const coursePaymentData = {
  //     courseId: course?._id,
  //     courseTitle: course?.title,
  //     coursePrice: course?.price,
  //     courseInstructor: course?.instructor,
  //     userEmail: user.email,
  //   };

  //   const paymentResponse = await axios
  //     .post("https://academix-server-xe39.onrender.com/create-checkout-session", coursePaymentData)
  //     .then((response) => {
  //       console.log(response.data);
  //     });

  //   try {
  //     // Load Stripe instance
  //     const stripe = await loadStripe(
  //       "pk_test_51PRXMVD2FsRH5LQ2Bz72mzW0AhqhQ9EhPouTE3Th5Os4KpsgKN3ya0DVGG3X0gLilxkj8oWfsE3FQbsUbFBQ6cBF00xl9Imqsf"
  //     );

  //     // Create a checkout session or use Stripe elements to handle payment
  //     // Example: For simplicity, let's just open a payment form
  //     const { error } = await stripe.redirectToCheckout({
  //       lineItems: [
  //         {
  //           price: "price_1Ias3y2eZvKYlo2CVVtVNF8e", // Replace with your actual price ID
  //           quantity: 1,
  //         },
  //       ],
  //       mode: "payment",
  //       successUrl: `http://localhost:5173/success`, // Redirect to success page
  //       cancelUrl: `http://localhost:5173/cancel`, // Redirect to cancel page
  //     });

  //     if (error) {
  //       console.error("Error:", error);
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };

  return (
    <>
      <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th className="px-6 py-4">{index}</th>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {course?.title}
          </th>
          <td className="px-6 py-4">{course?.instructor}</td>
          <td className="px-6 py-4">{course?.category}</td>
          <td className="px-6 py-4">{course?.price}</td>
          <td className="px-6 py-4 flex gap-3">
            {userData?.role === "student" ? (
              <>
                <Link to={`/checkout/${course?._id}`}>
                  <button
                    // onClick={makePayment}
                    className="px-4 py-2 text-white bg-green-600 flex items-center gap-2"
                  >
                    <MdPayment size={20} />
                    <span>Pay</span>
                  </button>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  to={`/dashboard/course/edit/${course?._id}`}
                  className="font-medium text-white px-6 bg-green-600 hover:bg-green-800 flex items-center gap-3"
                >
                  <FaRegEdit size={20} /> <span>Edit</span>
                </Link>
                {userData?.email === courseData?.userEmail ? (
                  <Link
                    to={`/dashboard/course/delete/${course?._id}`}
                    className="font-medium text-white px-8 py-2 bg-red-600 hover:bg-red-800 flex items-center gap-3"
                  >
                    <RiDeleteBin5Line size={20} />
                    <span>Delete</span>
                  </Link>
                ) : (
                  <button
                    className="font-medium text-white px-8 py-2 bg-slate-600 flex items-center gap-3"
                    disabled
                  >
                    <RiDeleteBin5Line size={20} />
                    <span>Delete</span>
                  </button>
                )}
              </>
            )}
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CourseTable;
