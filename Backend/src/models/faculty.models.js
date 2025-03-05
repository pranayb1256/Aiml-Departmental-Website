import mongoose, { Schema } from "mongoose";

const facultySchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true,
    },
    profileImage: {
        type: String,  // cloudinary url
    },
    qualification: {
        type: String,
        trim: true,
    },
    experienceInYears: {
        type: String,
        trim: true,
    },
    specialization: {
        type: String,
        trim: true,
    },
    collegeEmail: {
        type: String,
        unique: true,
        trim: true,
    }

}, { timestamps: true });

const Faculty = mongoose.model('Faculty', facultySchema);

export default Faculty;