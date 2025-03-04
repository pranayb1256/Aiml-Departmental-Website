import { useState } from "react";
// import Photo from "../Photos/michael-dam-mEZ3PoFGs_k-unsplash.jpg";
import Flyer from "../../../public/Photos/ISTE Flyer .jpg";
import EventPhotos from "../../../public/Photos/RoboticWorkshop3.jpg"
import { motion, AnimatePresence } from "framer-motion";

const eventsData = [
  {
    id: 1,
    flyer: Flyer,
    name: "Tech Innovators Meetup",
    date: "January 15, 2025",
    description:
      "A gathering of tech enthusiasts to discuss the latest trends.",
    guest: "Dr. John Smith",
    location: "Auditorium A1",
    photos: [EventPhotos, EventPhotos, EventPhotos],
    learnings: "Explored emerging technologies and networking opportunities.",
  },
  {
    id: 2,
    flyer: Flyer,
    name: "AI Workshop",
    date: "February 5, 2025",
    description: "Hands-on workshop on AI and Machine Learning basics.",
    guest: "Ms. Jane Doe",
    location: "Lab 3, Block B",
    photos: [EventPhotos, EventPhotos],
    learnings: "Gained practical knowledge of AI model development.",
  },
  {
    id: 3,
    flyer: Flyer,
    name: "Robotics Challenge",
    date: "March 10, 2025",
    description: "Competition showcasing innovative robotic designs.",
    guest: "Mr. Alex Johnson",
    location: "Open Ground",
    photos: [EventPhotos, EventPhotos, EventPhotos],
    learnings: "Learned teamwork and design thinking in robotics.",
  },
  {
    id: 4,
    flyer: Flyer,
    name: "Cybersecurity Bootcamp",
    date: "April 20, 2025",
    description: "Intensive training on cybersecurity fundamentals.",
    guest: "Mr. Ethan Carter",
    location: "Lecture Hall B2",
    photos: [EventPhotos, EventPhotos],
    learnings: "Enhanced understanding of security protocols.",
  },
  {
    id: 5,
    flyer: Flyer,
    name: "Creative Design Contest",
    date: "May 12, 2025",
    description: "Showcase of innovative design solutions.",
    guest: "Ms. Emma Davis",
    location: "Design Studio 1",
    photos: [EventPhotos],
    learnings: "Learned creative problem-solving techniques.",
  },
  {
    id: 6,
    flyer: Flyer,
    name: "Data Science Seminar",
    date: "June 18, 2025",
    description: "Deep dive into data science applications.",
    guest: "Dr. Olivia Brown",
    location: "Conference Room C3",
    photos: [EventPhotos, EventPhotos, EventPhotos],
    learnings: "Gained insights into data-driven decision-making.",
  },
];
function ISTE() {
   const [selectedEvent, setSelectedEvent] = useState(null);
  
    return (
      <div className="p-8 bg-polar text-black">
        <h1 className="text-3xl font-bold text-center mb-8">
          ISTE- Events
        </h1>
        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              layout
              onClick={() => setSelectedEvent(event)}
              className="cursor-pointer"
            >
              <div className="rounded-2xl shadow-lg overflow-hidden bg-white p-4">
                <img
                  src={event.flyer}
                  alt={event.name}
                  className="h-110 w-full object-fit rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mt-2">{event.name}</h2>
                  <p className="text-sm text-gray-600">{event.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
  
        <AnimatePresence>
          {selectedEvent && (
            <motion.div
              className="fixed inset-0 bg-slate-300 bg-opacity-50 flex items-center justify-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                 className="bg-white p-6 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-auto scrollbar-hide"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <button
                   className="mb-4 text-sm text-black bg-gradient-to-r from-dodgerblue to-emerald-500 px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                   onClick={() => setSelectedEvent(null)}
                >
                  Close
                </button>
                <img src={selectedEvent.flyer} alt={selectedEvent.name} className="w-full max-h-96 object-fit rounded-xl mb-4" />
  
                <h2 className="text-2xl font-bold mb-2">{selectedEvent.name}</h2>
                <p className="text-gray-600 mb-2">Date: {selectedEvent.date}</p>
                <p className="mb-2">{selectedEvent.description}</p>
                <p className="mb-2">
                  <strong>Guest Invited:</strong> {selectedEvent.guest}
                </p>
                <p className="mb-2">
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
                <p className="mt-2">
                  <strong>Learnings:</strong> {selectedEvent.learnings}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 my-4">
                  {selectedEvent.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Event ${index + 1}`}
                      className="h-56 w-full object-fit rounded-lg"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
}

export default ISTE;

/* Hide scrollbar while keeping scroll functionality */
<style jsx>{`
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`}</style>;

