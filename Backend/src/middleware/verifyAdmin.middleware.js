import { ApiError } from "../utils/ApiError.js";

const checkSpecialId = (req, res, next) => {
    try {
        const  specialId  = req.params.id;  // Extract specialId from URL
        const ADMIN_SECRET_ID = process.env.ADMIN_SECRET_ID;  // Load from .env     

        if (!specialId || specialId !== ADMIN_SECRET_ID) {
            throw new ApiError(400, "Access denied: Invalid admin ID")
        }

        next(); // Allow access if ID matches
    } catch (err) {
        console.log("Invalid SpecialId | error: ", err)
        throw new ApiError(400, "Invalid Special ID")
    }
};
export { checkSpecialId }
