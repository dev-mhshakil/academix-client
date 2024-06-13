import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import toast from "react-hot-toast";
import GoogleLogin from "../components/google-login/GoogleLogin";
import { useEffect } from "react";

const Login = () => {
  const { login, user } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location?.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password).then((result) => {
      if (result?.user?.email) {
        toast.success("Login success");
      }
    });
  };

  useEffect(() => {
    if (user?.email) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);
  return (
    <div className="max-w-[1240px] h-[calc(100vh-96px)] mx-auto">
      <div className="max-w-[540px] mx-auto border rounded-md border-t-2 border-t-primary px-6 py-12 shadow-md">
        <form onSubmit={handleSubmit} action="">
          <div className="flex flex-col mt-6">
            <label htmlFor="">Email Address</label>
            <input
              type="text"
              id="email"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="email address"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="">Password</label>
            <input
              type="password"
              id="password"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="password"
            />
          </div>

          <div className="flex flex-col justify-center">
            <button
              type="submit"
              className="bg-primary w-full text-white py-3 px-6 rounded-md mt-6"
            >
              Sign In
            </button>
            <p className="mt-6 text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-primary">
                Register
              </Link>
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

export default Login;
