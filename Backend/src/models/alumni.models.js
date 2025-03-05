import mongoose, { Schema } from "mongoose";

const alumniSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    degree: {
        type: String,
        required: true
    },
    departmentFeedback: {
        type: String,
        required: true
    },
    currentPosition: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    linkedIn: {
        type: String,
        required: true,
        unique: true
    },
    github: {
        type: String,
        required: true,
        unique: true
    },

}, { timestamps: true });

const Alumni = mongoose.model('Alumni', alumniSchema);

export default Alumni;