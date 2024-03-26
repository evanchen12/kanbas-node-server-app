import db from "../Database/index.js";

export default function Courses() {
  // CRUD
  // Read all courses
  app.get("/api/courses", (req, res) => {
    res.send(db.courses);
  });

  // Read one course by id
  app.get("/api/courses/:id", (req, res) => {
    const id = req.params.id;
    const course = db.courses.find((c) => c._id = id);
    if (!course) {
      return res.status(404).send("Course not found");
    } 
    res.send(course);
  });
  
  // Create a new course
  // Update a course
  // Delete a course
}