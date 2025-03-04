import express from "express";
import { registerAdmin, loginUser, logoutUser, protectedRoute } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/register", registerAdmin);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/protected", authenticateToken, protectedRoute);

export default router;
