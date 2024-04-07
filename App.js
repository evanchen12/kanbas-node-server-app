import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
import session from 'express-session';
import "dotenv/config";
import Hello from './hello.js';
import Lab5 from './Labs/lab5.js';
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from './Kanbas/Modules/routes.js';
import UserRoutes from "./Users/routes.js";

const app = express();
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
mongoose.connect(CONNECTION_STRING);

app.use(express.json());
app.use(session(sessionOptions));
app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
); 

Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);