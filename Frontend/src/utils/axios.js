import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:5001/api", // Base API URL for all endpoints
    withCredentials: true, // Ensures cookies/session handling for authentication
});