import CourseCard from "../components/courses/CourseCard";

const Courses = () => {
  return (
    <div className="max-w-[1240px] mx-auto my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
