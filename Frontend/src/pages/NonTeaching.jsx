import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const facultyData = [
  {
    fullName: "Dr. John Doe",
    qualification: "PhD in Computer Science",
    experience: "15 years",
    specialization: "AI, Machine Learning",
    email: "john.doe@college.edu",
    photo: "/Photos/Avatar11.jpg",
  },
  {
    fullName: "Dr. Jane Smith",
    qualification: "PhD in Mathematics",
    experience: "10 years",
    specialization: "Applied Math, Data Science",
    email: "jane.smith@college.edu",
    photo: "/Photos/Avatar12.webp",
  },
  {
    fullName: "Dr. Alice Johnson",
    qualification: "PhD in Physics",
    experience: "8 years",
    specialization: "Quantum Mechanics, Astrophysics",
    email: "alice.johnson@college.edu",
    photo: "/Photos/michael-dam-mEZ3PoFGs_k-unsplash.jpg",
  },
  {
    fullName: "Dr. Robert Brown",
    qualification: "PhD in Chemistry",
    experience: "12 years",
    specialization: "Organic Chemistry",
    email: "robert.brown@college.edu",
    photo: "/Photos/Avatar12.webp",
  },
];

export default function NonTeachingPage() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  return (
    <div className="p-6 sm:p-12">
      <motion.h1
        className="text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Meet Our <span className="text-blue-500">Non-Teaching Staff</span>
      </motion.h1>

      <motion.div
        ref={sectionRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {facultyData.map((faculty, index) => (
          <motion.div
            key={index}
            className="bg-white/80 backdrop-blur-lg rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 overflow-hidden border border-gray-300"
            variants={itemVariants}
          >
            <div className="flex justify-center mt-4">
              <img
                src={faculty.photo || "/Photos/default-avatar.png"}
                alt={faculty.fullName}
                className="w-24 h-24 object-cover rounded-full border-4 border-gray-300"
                loading="lazy"
              />
            </div>
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">{faculty.fullName}</h2>
              <p className="text-gray-600 text-sm">
                <strong>Qualification:</strong> {faculty.qualification}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Experience:</strong> {faculty.experience}
              </p>
              <p className="text-gray-600 text-sm">
                <strong>Specialization:</strong> {faculty.specialization}
              </p>
              <a
                href={`mailto:${faculty.email}`}
                className="block mt-2 text-blue-500 hover:underline text-sm font-medium"
              >
                {faculty.email}
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
