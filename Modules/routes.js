import db from "../Database/index.js";

export default function Courses() {
  // CRUD
  // Read all modules
  app.get("/api/modules", (req, res) => {
    res.send(db.modules);
  });

  // Read one course by id
  app.get("/api/modules/:id", (req, res) => {
    const id = req.params.id;
    const module = db.module.find((c) => c._id = id);
    if (!module) {
      return res.status(404).send("Module not found");
    } 
    res.send(module);
  });

  // Read all modules of a course
  app.get("/api/courses/:courseid/modules/:id", (req, res) => {
    const id = req.params.id;
    const module = db.module.find((c) => c._id = id);
    if (!module) {
      return res.status(404).send("Module not found");
    } 
    res.send(module);
  });
  
  // Create a new module
  // Update a module
  // Delete a module
}