import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/Apiresponse.js';
import Image from '../models/image.models.js'
import Alumni from '../models/alumni.models.js'
import ClubEvent from '../models/clubEvent.models.js'
import Faculty from '../models/faculty.models.js'
import { uploadOnCloudinary } from "../utils/cloudniary.js"


const handleImage = asyncHandler(async (req, res) => {

    const recruitersLocalPathArr = req.files?.recruiters?.map(file => file.path)
    const studGalleryLocalPathArr = req.files?.studentGallery?.map(file => file.path)
    const homepageEventLocalPathArr = req.files?.homepageEvent?.map(file => file.path)


   
    // const obj = req.files;
    // // Validate the number of images 
    // if (obj.recruiters.length !== 11 || obj.studentGallery.length !== 11 || obj.homepageEvent.length !== 11) {
    //     throw new ApiError(400, "Each field must have exactly 11 images.")
    // }
    

    //Uploading arr of file string paths on cloudinary 
    const recruiters = [];
    const studentGallery = [];
    const homepageEvent = [];
    for (const eachFilePath of recruitersLocalPathArr) {
        const path = await uploadOnCloudinary(eachFilePath);
        recruiters.push(path.secure_url); // Push URL after each upload completes
    }
    for (const eachFilePath of studGalleryLocalPathArr) {
        const path = await uploadOnCloudinary(eachFilePath);
        studentGallery.push(path.secure_url); // Push URL after each upload completes
    }
    for (const eachFilePath of homepageEventLocalPathArr) {
        const path = await uploadOnCloudinary(eachFilePath);
        homepageEvent.push(path.secure_url); // Push URL after each upload completes
    }


    const img = await Image.create({
        recruiters,
        studentGallery,
        homepageEvent,
    });

    console.log("here")
    new ApiResponse(200, img, "Successfully stored array of urls in DB!");
});



const handleAlumni = asyncHandler(async () => { });
const handleClubEvent = asyncHandler(async () => { });
const handleFaculty = asyncHandler(async () => { });

export { handleImage, handleAlumni, handleClubEvent, handleFaculty }

