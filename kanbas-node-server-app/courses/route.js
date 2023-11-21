import Database from "../Database/index.js";
function CourseRoutes(app) {
  app.post("/api/courses", (req, res) => {
    console.log(req.data, req.body);
    const course = { ...req.body,
      _id: new Date().getTime().toString() };
    console.log(course);
    Database.courses.push(course);
    console.log("Course added:", course);
    res.send(course);
  });

  app.delete("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    Database.courses = Database.courses
      .filter((c) => c._id !== id);
    res.sendStatus(204);
    console.log("Course added:", course);
  });


  app.put("/api/courses/:id", (req, res) => {
    const { id } = req.params;
    const course = req.body;
    Database.courses = Database.courses.map((c) =>
      c._id === id ? { ...c, ...course } : c
    );
    res.sendStatus(204);
  });


  app.get("/api/courses", (req, res) => {
    const courses = Database.courses;
    res.send(courses);
  });
}
export default CourseRoutes;