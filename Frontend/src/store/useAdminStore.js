import { create } from "zustand"
import { axiosInstance } from "../utils/axios.js"
import { toast } from "react-hot-toast";

export const useAdminStore = create((set) => ({
    announcements: [],
    notices: [],
    isFetching: false,
    isAdding: false,
    isAuthenticated: false,

    //admin personals
    registerAdmin: async ({ adminId, fullname, email, password }) => {
        try {
            const res = await axiosInstance.post(`/admin/register`, { fullname, email, password, adminId });
            set({ isAuthenticated: true });
            toast.success("Admin registered successfully!");
        } catch (error) {
            console.error("Error registering admin:", error);
            toast.error("Failed to register admin.");
        }
    },
    loginAdmin: async ({ id, email, password }) => {
        try {
            const res = await axiosInstance.post(`/admin/login`, { email, password, adminId });
            set({ isAuthenticated: true });
            toast.success("Logged in successfully!");
        } catch (error) {
            console.error("Error logging in admin:", error);
            toast.error("Failed to login.");
        }
    },
    logoutAdmin: async (adminId) => {
        try {
            await axiosInstance.post(`/admin/logout`, { adminId });
            set({ isAuthenticated: false });
            toast.success("Logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error);
            toast.error("Failed to logout.");
        }
    },


    //Announcements and Notices
    fetchAnnouncements: async () => {
        set({ isFetching: true });
        try {
            const res = await axiosInstance.get(`/admin/announcements`);
            set({ announcements: res.data });
        } catch (error) {
            console.error("Error fetching announcements:", error);
            toast.error("Failed to fetch announcements.");
        } finally {
            set({ isFetching: false });
        }
    },

    fetchNotices: async () => {
        set({ isFetching: true });
        try {
            const res = await axiosInstance.get(`/admin/notices`);
            set({ notices: res.data });
        } catch (error) {
            console.error("Error fetching notices:", error);
            toast.error("Failed to fetch notices.");
        } finally {
            set({ isFetching: false });
        }
    },

    addAnnouncement: async (newAnnouncement) => {
        set({ isAdding: true });
        try {
            const res = await axiosInstance.post(`/admin/announcements`, { text: newAnnouncement });
            set((state) => ({ announcements: [res.data, ...state.announcements] }));
            toast.success("Announcement added successfully!");
        } catch (error) {
            console.error("Error adding announcement:", error);
            toast.error("Failed to add announcement.");
        } finally {
            set({ isAdding: false });
        }
    },

    addNotice: async (newNotice) => {
        set({ isAdding: true });
        try {
            const res = await axiosInstance.post(`/admin/notices`, { text: newNotice });
            set((state) => ({ notices: [res.data, ...state.notices] }));
            toast.success("Notice added successfully!");
        } catch (error) {
            console.error("Error adding notice:", error);
            toast.error("Failed to add notice.");
        } finally {
            set({ isAdding: false });
        }
    }
}));