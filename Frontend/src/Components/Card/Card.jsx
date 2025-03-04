import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const alumniData = [
  {
    name: "John Doe",
    batch: "Batch of 2020",
    bio: "Software Engineer at Google.",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Jane Smith",
    batch: "Batch of 2019",
    bio: "AI Researcher at OpenAI.",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
  {
    name: "Michael Lee",
    batch: "Batch of 2018",
    bio: "Product Manager at Microsoft.",
    image: "https://via.placeholder.com/150",
    linkedin: "#",
    twitter: "#",
    github: "#",
  },
];

export default function AlumniCorner() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-700 mb-4">
          Alumni <span className="text-blue-600">Corner</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Meet our accomplished alumni who continue to excel in various fields.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {alumniData.map((alumnus, index) => (
            <div
              key={index}
              className="bg-white border border-blue-200 rounded-3xl shadow-md hover:shadow-lg transition duration-300 p-6 text-center"
            >
              <img
                src={alumnus.image}
                alt={alumnus.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-600 shadow-md"
              />
              <h3 className="text-xl font-semibold text-blue-800">{alumnus.name}</h3>
              <p className="text-sm text-gray-500">{alumnus.batch}</p>
              <p className="mt-3 text-gray-700">{alumnus.bio}</p>
              <div className="flex justify-center space-x-5 mt-4">
                <a href={alumnus.linkedin} className="text-blue-600 hover:text-blue-800 transition">
                  <FaLinkedin size={22} />
                </a>
                <a href={alumnus.twitter} className="text-blue-400 hover:text-blue-600 transition">
                  <FaTwitter size={22} />
                </a>
                <a href={alumnus.github} className="text-gray-700 hover:text-gray-900 transition">
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
