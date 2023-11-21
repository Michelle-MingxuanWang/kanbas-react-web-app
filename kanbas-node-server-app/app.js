import express from 'express';
import Hello from "./hello.js";
import cors from "cors";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./courses/route.js";
import ModuleRoutes from "./Modules/routes.js";
const app = express()
app.use(cors());
ModuleRoutes(app);
CourseRoutes(app);
app.use(express.json());
Lab5(app);
Hello(app)
app.listen(4000) // listen to http://localhost:4000