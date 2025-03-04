import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.Schema.js"
import { blacklistToken } from "../utils/tokenBlacklist.js";

// Register Admin (Run once)
export const registerAdmin = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ email: req.body.email, password: hashedPassword });
        await newUser.save();
        res.json({ message: "Admin Registered!" });
    } catch (error) {
        res.status(500).json({ message: "Error Registering Admin", error });
    }
};

// Login User
export const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Login Error", error });
    }
};

// Logout User (Blacklist Token)
export const logoutUser = (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (token) blacklistToken(token);
    res.json({ message: "Logged out successfully" });
};

// Protected Route
export const protectedRoute = (req, res) => {
    res.json({ message: "Welcome, Admin!" });
};
