import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="mt-40 md:mt-16">
        <img
          src="https://i.ibb.co/mc1sbNZ/404.png"
          alt=""
          className="w-[700px] mx-auto"
        />
        <div className="flex justify-center items-center">
          <Link to="/">
            {" "}
            <button className="group relative min-h-[50px] w-40 overflow-hidden border rounded-md border-primary/60 bg-white text-primary shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-primary before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
              <span className="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-primary before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-primary after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
              <span className="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
                Back to Home
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
