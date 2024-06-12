import { FcGoogle } from "react-icons/fc";

const Register = () => {
  return (
    <div className="max-w-[1240px] h-[calc(100vh-96px)] mx-auto">
      <div className="max-w-[540px] mx-auto border rounded-md border-t-2 border-t-primary px-6 py-12 shadow-md">
        <form action="">
          <div className="flex flex-col">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              id="firstname"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="first name"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              id="lastname"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="last name"
            />
          </div>
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
          <div className="flex flex-col mt-6">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              className="border py-3 rounded-md outline-primary mt-3 px-4"
              placeholder="confirm password"
            />
          </div>
          <div className="flex flex-col justify-center">
            <button
              type="submit"
              className="bg-primary text-white py-3 px-6 rounded-md mt-6"
            >
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
          <button className="flex justify-center items-center gap-4 bg-secondary w-full py-3 px-6 rounded-md mt-6">
            <FcGoogle size={20} />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
