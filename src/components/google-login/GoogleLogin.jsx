import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleLogin = () => {
    googleLogin().then((result) => {
      if (result?.user?.email) {
        toast.success("Login successful");
      }
    });
  };
  return (
    <div>
      <button
        onClick={handleLogin}
        className="flex justify-center items-center gap-4 bg-secondary w-full py-3 px-6 rounded-md mt-6"
      >
        <FcGoogle size={20} />
        Google
      </button>
    </div>
  );
};

export default GoogleLogin;
