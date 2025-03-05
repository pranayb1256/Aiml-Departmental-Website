import express from "express"
import path from "path"
import { handleImage } from '../controllers/upload.controller.js'
import { upload } from "../middleware/multer.middleware.js"

const router = express.Router();

// Routes
router.post('/images', upload.fields([
    { name: 'recruiters', maxCount: 1 },
    { name: 'studentGallery', maxCount: 2 },
    { name: 'homepageEvent', maxCount: 2 }
]), handleImage);




export default router;