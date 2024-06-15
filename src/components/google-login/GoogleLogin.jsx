import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleLogin = () => {
    googleLogin().then((result) => {
      if (result?.user?.email) {
        const user = {
          email: result.user.email,
          name: result.user.displayName,
          role: "student",
        };

        axios
          .post(`${import.meta.env.VITE_APP_LIVE}/user`, user)
          .then(function (response) {
            if (response.status === 400) {
              toast.error("Email already registered.");
            } else if (response.status === 200) {
              toast.success("Registration Complete.");
              localStorage.setItem("token", response.data.token);
            }
          });
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
