import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "../ui/accordion";
const syllabus = [
  { semester: "Semester 1", subjects: ["Mathematics I", "Programming Basics", "Physics"] },
  { semester: "Semester 2", subjects: ["Mathematics II", "Data Structures", "OOP in Java"] },
  { semester: "Semester 3", subjects: ["DBMS", "Operating Systems", "Computer Networks"] },
  { semester: "Semester 4", subjects: ["Artificial Intelligence", "Machine Learning", "Web Technologies"] },
];

const faculty = [
  { name: "Dr. A. Sharma", designation: "Professor - AI & ML" },
  { name: "Dr. B. Mehta", designation: "Associate Professor - Deep Learning" },
  { name: "Dr. C. Iyer", designation: "Assistant Professor - NLP" },
];

const achievements = [
  "Team AIML won 1st place in the National Hackathon 2024",
  "Published 10+ research papers in AI and Deep Learning",
  "Students secured internships at Google, Microsoft, and Tesla",
];

const faqs = [
  { question: "What is the scope of AIML?", answer: "AIML has immense opportunities in software, robotics, data science, and more." },
  { question: "What programming languages are used?", answer: "Python, Java, and C++ are commonly used in AI & ML applications." },
  { question: "Are there any research opportunities?", answer: "Yes, students can collaborate with faculty on AI/ML research projects." },
];

const Academics = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Title Section */}
      <motion.h1
        className="text-center text-4xl font-bold mb-8 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Academics - <span className="text-blue-500">AIML</span>
      </motion.h1>
      
      {/* Curriculum & Syllabus */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Curriculum & Syllabus</h2>
        {syllabus.map((sem, index) => (
          <div key={index} className="mb-3 p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-600">{sem.semester}</h3>
            <ul className="list-disc ml-5 text-gray-700">
              {sem.subjects.map((subject, idx) => (
                <li key={idx}>{subject}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      {/* Faculty Information */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Faculty Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600">{member.designation}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Student Achievements */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Student Achievements</h2>
        <ul className="list-disc ml-5 text-gray-700">
          {achievements.map((achieve, index) => (
            <li key={index} className="p-2 bg-white rounded-lg shadow-md mb-2">{achieve}</li>
          ))}
        </ul>
      </div>
      
      {/* FAQs */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} title={faq.question}>
              <p className="text-gray-600">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Academics;
