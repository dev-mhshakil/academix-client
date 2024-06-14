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
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <Error />,
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
    ],
  },
]);

export default router;
