import { IoPricetagsOutline } from "react-icons/io5";
import { MdOutlineManageAccounts, MdPeopleOutline } from "react-icons/md";
import { PiVideo } from "react-icons/pi";

const Features = () => {
  const featuresData = [
    {
      icon: <MdOutlineManageAccounts size={60} />,
      title: "Exclusive Advisor",
      description: "Expert guidance for personalized learning",
    },
    {
      icon: <PiVideo size={60} />,
      title: "Video Tutorial",
      description: "Engaging tutorials for effective learning",
    },
    {
      icon: <IoPricetagsOutline size={60} />,
      title: "Affordable Pricing",
      description: "Affordable pricing for personalized learning",
    },
    {
      icon: <MdPeopleOutline size={60} />,
      title: "Community Support",
      description: "Expert guidance for personalized learning",
    },
  ];
  return (
    <div className="max-w-[1240px] mx-auto px-4 mt-20">
      <p className="text-center text-primary text-xl">Features</p>
      <h1 className="text-3xl md:text-4xl font-semibold py-4 text-center">
        One Platform Many Course
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mt-2 md:mt-8">
        {featuresData.map((feature, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-full md:w-[360px] h-[260px] md:h-[340px] mx-auto border border-opacity-50 border-secondary/60 hover:rounded-tr-[60px] ease-in duration-300 rounded-md  shadow-sm hover:border-2  hover:rounded-r-lg hover:border-primary hover:bg-secondary/60"
            >
              <div className="bg-secondary hover:text-white text-primary hover:bg-primary p-4 rounded-full">
                {feature.icon}
              </div>
              <div className="mt-4 text-xl font-semibold">{feature.title}</div>
              <div className="text-center text-black/60 mt-6 px-3 md:px-0">
                {feature.description}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
