import express from "express";
import { registerAdmin, loginAdmin, logoutAdmin, getStatus } from "../controllers/auth.controller.js";
import { authenticateToken } from "../middleware/auth.middleware.js";
import { checkSpecialId } from "../middleware/verifyAdmin.middleware.js"

// Use { mergeParams: true } in express.Router() inside routes.js to inherit :id from app.js, ensuring req.params.id is accessible.
const router = express.Router({ mergeParams: true }); // ✅ This will inherit :id from app.js


router.post("/register", checkSpecialId, registerAdmin);
router.post("/login", checkSpecialId, loginAdmin);
router.post("/logout", checkSpecialId, authenticateToken, logoutAdmin);
router.get("/get-status", checkSpecialId, authenticateToken, getStatus);

export default router;
