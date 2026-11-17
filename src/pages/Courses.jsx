import CourseCard from "../components/CourseCard";

function Courses() {
  return (
    <div className="page">
      <h1>Courses</h1>

      <div className="card-container">
        {Array.from({ length: 12 }).map((_, index) => (
          <CourseCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Courses;