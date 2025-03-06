import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import cookieParser from "cookie-parser"
import imgRoutes from "./routes/images.routes.js";
import authRoutes from "./routes/auth.routes.js";


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


//routes 
app.use('/upload', imgRoutes);
//admin routes
app.use("/admin/protected/:id", authRoutes);


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