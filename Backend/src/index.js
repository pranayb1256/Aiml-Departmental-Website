import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser"
import homepageRoutes from "./routes/homePage.routes.js";
import adminRoutes from "./routes/admin.routes.js";


const app = express();

//configs
dotenv.config({
    path: "./.env",
})
app.use(
    cors({ origin: process.env.CORS_ORIGIN, credentials: true, })
);


//parsing form-data ,json ,urlencodeded ...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser()); // middleware to parse cookies


//hompage routes 
app.use('/api/homepage', homepageRoutes);
//admin routes
app.use("/api/admin", adminRoutes);





//connection 
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 9000, () => {
            console.log(`Server is running at Port: ${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log("MongoDB connection Failed!!! ", err);
    });