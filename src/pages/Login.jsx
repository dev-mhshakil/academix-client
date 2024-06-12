import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[1240px] h-[calc(100vh-96px)] mx-auto">
      <div className="max-w-[540px] mx-auto border rounded-md border-t-2 border-t-primary px-6 py-12 shadow-md">
        <form action="">
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
              className="bg-primary text-white py-3 px-6 rounded-md mt-6"
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
          <button className="flex justify-center items-center gap-4 bg-secondary w-full py-3 px-6 rounded-md mt-6">
            <FcGoogle size={20} />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
