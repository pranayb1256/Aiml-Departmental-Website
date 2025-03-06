import express from "express"
import path from "path"
import { handleImage, getImages } from '../controllers/upload.controller.js'
import { upload } from "../middleware/multer.middleware.js"

const router = express.Router();

// Routes
router.post('/images', upload.fields([
    { name: 'recruiters', maxCount: 12 },
    { name: 'studentGallery', maxCount: 7 },
    { name: 'homepageEvent', maxCount: 10 }
]), handleImage);

router.get('/getImages', getImages);




export default router;