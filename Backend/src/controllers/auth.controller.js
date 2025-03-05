import bcrypt from "bcryptjs";
import Admin from "../models/admin.models.js"
import { blacklistToken } from "../utils/tokenBlacklist.js";
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/Apiresponse.js"
import { generateToken } from "../utils/tokens.js";
import jwt from "jsonwebtoken"


// Register Admin (Run once)
export const registerAdmin = asyncHandler(async (req, res) => {
    try {
        const { fullname, email, password, role } = req.body
        if (
            [fullname, email, password].some(field => field?.trim() === "")
        ) {
            throw new ApiError(400, "All fields are required");
        }
        console.log("here")

        const newAdmin = new Admin({
            fullname,
            email,
            password,
            role
        });

        await newAdmin.save();
        const createdAdmin = await Admin.findOne({ email }).select("-password -jwtToken");
        console.log("success | admin: ", createdAdmin)

        return res
            .status(201)
            .json(new ApiResponse(200, createdAdmin, "User registered successfully!"));

    } catch (err) {
        console.log("Error regAdmin Controller, ERR: ", err);
        throw new ApiError(400, "Something went wrong while registering admin");
    }
})

// Login User
export const loginAdmin = async (req, res) => {
    try {

        const { email, password, role } = req.body;
        if (!email && !password) {
            throw new ApiError(400, "Invalid Credentials")
        }

        const admin = await Admin.findOne({
            $or: [{ email }, { password }]
        });
        if (!admin) {
            throw new ApiError(400, "user not found | err in loginAdmin controller");
        }

        const isPasswordValid = await admin.isPasswordCorrect(password);
        if (!isPasswordValid) {
            console.log("Err in login auth controller")
            throw new ApiError(400, "Invalid Credentials")
        }

        const jwtToken = generateToken(email, password, role, res);
        const adminId = Admin._id;


        const loggedInAdmin = await Admin.findByIdAndUpdate(
            adminId,
            { jwtToken },
            { new: true }
        ).select("-password");

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development"
        }

        return res
            .status(201)
            .cookie("JWT_TOKEN", jwtToken, options)
            .json(new ApiResponse(200, loggedInAdmin, "User loggedIn successfully!"));

    } catch (err) {
        console.log("Err in login auth controller | ERROR: ", err);
        throw new ApiError(400, "Error in login auth controller");
    }
};

// Logout User (Blacklist Token)
export const logoutAdmin = async (req, res) => {
    try {
        const token = req.cookies?.JWT_TOKEN || req.headers.authorization?.split(" ")[1];
        if(!token) {
            throw new ApiError(400, "token undefined or invalid")
        }

        await Admin.findByIdAndUpdate(
            req.admin._id,
            {
                $unset: {
                    jwtToken: 1, // this removes the field from the document
                },
            },
            {
                new: true,
            }
        );

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development"
        }
        console.log("here : ",token);
        
        return res
            .status(200)
            .clearCookie("JWT_TOKEN", options)
            .json(new ApiResponse(200, {}, "Admin Logged Out"));
    } catch (err) {
        throw new ApiError(400, "error in logout controller")
    }
};

export const getStatus = (req, res) => {
    const token = req.cookies?.JWT_TOKEN || req.headers.authorization?.split(" ")[1];
    if(!token) {
        throw new ApiError(400, "token undefined or invalid")
    }

    return res
        .status(200)
        .json(
            new ApiResponse(200, req.admin, "Fetched current admin successfully!")
        );
};
