import useAuth from "../hooks/useAuth";
import axios from "axios";
import toast from "react-hot-toast";
import GoogleLogin from "../components/google-login/GoogleLogin";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
  const { createUser, user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const firstName = form.firstname.value;
    const lastName = form.lastname.value;
    const email = form.email.value;
    const role = form.role.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const result = await createUser(email, password);
      form.reset();

      if (result?.user?.email) {
        const user = {
          email: result.user.email,
          name: `${firstName} ${lastName}`,
          role: role,
        };

        axios.post("http://locahost:8000/user", user).then(function (response) {
          if (response.status === 400) {
            toast.error("Email already registered.");
          } else if (response.status === 200) {
            toast.success("Registration Complete.");
            localStorage.setItem("token", response.data.token);
          }
        });
      }
    } catch (error) {
      toast.error("Email already registered. Try another email address.");
    }
  };

  useEffect(() => {
    if (user?.email) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  return (
    <div className="max-w-[1240px] h-full my-10 px-4 md:px-0 md:my-0 mx-auto">
      <div className="max-w-[540px] mx-auto border rounded-md border-t-2 border-t-primary px-6 py-12 shadow-md">
        <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="first name"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="last name"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="email address"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="role">Register as</label>
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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="password"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="confirm password"
            />
          </div>
          <div className="flex flex-col justify-center items-center mt-8">
            <button className="bg-primary w-full text-white py-3 px-6 rounded-md mt-6">
              Register
            </button>
            <p className="mt-6 text-center">
              Already have an account?{" "}
              <a href="/login" className="text-primary">
                Login
              </a>
            </p>
          </div>
        </form>
        <div>
          <GoogleLogin />
        </div>
      </div>
    </div>
  );
};

export default Register;
