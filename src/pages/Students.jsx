import StudentCard from "../components/StudentCard";

function Students() {
  return (
    <div className="page">
      <h1>Students</h1>

      <div className="card-container">
        {Array.from({ length: 12 }).map((_, index) => (
          <StudentCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Students;