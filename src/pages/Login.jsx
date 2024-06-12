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

          <div className="flex flex-col justify-center items-center mt-8">
            <button className=" before:ease relative h-12 w-full overflow-hidden border border-primary bg-primary text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-[500px]">
              <span className="relative z-10">Shine</span>
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
