import { FcIdea, FcSurvey } from "react-icons/fc";

const About = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-4 my-12 md:my-32">
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <div className="flex justify-center items-center w-full md:w-[50%] px-4 md:px-0">
          <img
            src="https://i.ibb.co/cxjW8F2/banner-about.png"
            alt=""
            className=""
          />
        </div>
        <div className="w-full md:w-[50%] px-4 md:px-0">
          <p className="text-md text-primary font-semibold text-center md:text-left">
            About Us Education
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold py-4 text-center md:text-left">
            Empowering Education, Anytime, Anywhere.
          </h1>
          <p className="mt-8 text-center md:text-left">
            We revolutionize learning with innovative tools, fostering knowledge
            and skills development for students and professionals worldwide.
          </p>

          <div className="mt-12 flex items-center">
            <h1>
              <FcIdea size={80} />
            </h1>
            <div>
              <h2 className="text-xl font-semibold py-2">
                Our Success Mission
              </h2>
              <p>
                To empower learners globally by providing accessible and
                professional growth.
              </p>
            </div>
          </div>

          <div className="mt-12 flex items-center">
            <h1>
              <FcSurvey size={80} />
            </h1>
            <div>
              <h2 className="text-xl font-semibold py-2">
                Our Innovation Mission
              </h2>
              <p>
                To continuously evolve our platform with cutting-edge
                technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
