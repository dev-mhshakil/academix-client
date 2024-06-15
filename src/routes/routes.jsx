import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Courses from "../pages/Courses";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../components/dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../components/dashboard/AllUsers";
import AddCourse from "../components/dashboard/AddCourse";
import AllCourses from "../components/dashboard/AllCourses";
import EditCourse from "../components/dashboard/EditCourse";
import DeleteCourse from "../components/dashboard/DeleteCourse";
import SuccessPage from "../components/payment/SuccessPage";
import CancelPage from "../components/payment/CancelPage";
import CheckOut from "../components/payment/CheckOut";
import FailPage from "../components/payment/FailPage";
import CourseDetails from "../components/courses/CourseDetails";
import Profile from "../components/dashboard/Profile";
import EditUser from "../components/dashboard/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/details/:id",
        element: <CourseDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment/success",
        element: <SuccessPage />,
      },
      {
        path: "/payment/cancel",
        element: <CancelPage />,
      },
      {
        path: "/payment/fail",
        element: <FailPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    // errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "admin/users/edit/:email",
        element: (
          <PrivateRoute>
            <EditUser />
          </PrivateRoute>
        ),
      },
      {
        path: "users",
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "all-courses",
        element: (
          <PrivateRoute>
            <AllCourses />
          </PrivateRoute>
        ),
      },
      {
        path: "add-course",
        element: (
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "course/edit/:id",
        element: (
          <PrivateRoute>
            <EditCourse />
          </PrivateRoute>
        ),
      },
      {
        path: "course/delete/:id",
        element: (
          <PrivateRoute>
            <DeleteCourse />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
