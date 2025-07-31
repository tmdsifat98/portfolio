import { ArrowRight, ExternalLink, Github, X } from "lucide-react";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "Edu Nest",
    description:
      `EduNest is a robust full-stack education management system designed to streamline the interactions between admins, teachers, and students within an academic environment. Built using modern technologies such as React, Node.js, Express, MongoDB, Firebase, JWT, Stripe, and TailwindCSS, EduNest empowers all user roles with tailored features and secure authorization workflows.

The platform implements role-based access control where the admin holds full authority to manage the system—approving or rejecting teachers, deleting users, and overseeing overall platform operations. Teachers enjoy the capability to create and manage classes, add assignments, and maintain student progress within their courses. This structured workflow enables efficient course delivery and academic tracking.

Students can browse available classes, securely make payments through Stripe’s seamless integration, and upon successful payment, instantly gain access to the relevant course materials and live sessions. The platform ensures smooth payment handling and enrollment management, enhancing the student learning experience.

EduNest’s backend APIs, powered by Express.js and MongoDB, manage complex data flows securely and efficiently. Authentication and authorization are handled robustly using Firebase and JWT tokens, providing a safe environment for all users.

The user interface, styled with TailwindCSS, offers an intuitive and responsive design that works flawlessly across devices. With EduNest, educational institutions can digitize their class management, payment processing, and user authorization, delivering a modern and comprehensive learning ecosystem.`,
    image: "https://i.ibb.co/C5pTcWJp/Screenshot-2025-07-15-192936.png",
    tags: [
      "React",
      "Node.js",
      "TailwindCSS",
      "ExpressJs",
      "MongoDB",
      "JWT",
      "Firebase",
      "Stripe",
    ],
    demoUrl: "https://edunest-st.web.app",
    githubUrl: "https://github.com/tmdsifat98/Edunest-client",
  },
  {
    id: 2,
    title: "Green Circle",
    description: `
Green Circle is a comprehensive full-stack web application designed to bring together gardening enthusiasts from all walks of life. Built with modern technologies including React, Node.js, Express, MongoDB, Firebase, JWT authentication, and TailwindCSS, Green Circle offers a seamless and engaging platform for users to share, discover, and interact with valuable gardening tips and experiences.

The core idea behind Green Circle is to foster a vibrant community where both amateur and experienced gardeners can contribute their knowledge and learn from others. Users can create an account securely through Firebase authentication, leveraging JWT tokens for safe and stateless session management. Once logged in, users can post their own gardening tips, including detailed descriptions, images, and categories, making it easy to organize and search relevant advice.

Green Circle encourages user interaction through features like liking others’ tips, which helps highlight the most useful and popular advice within the community. The application also allows users to browse a diverse range of tips shared by others, filtering by tags or categories to find information tailored to their gardening interests and needs.

From soil preparation to pest control, plant care to seasonal gardening strategies, Green Circle covers a wide spectrum of gardening topics. The intuitive and responsive UI, styled with TailwindCSS, ensures that users enjoy a smooth experience on all devices, whether desktop or mobile.

On the backend, the Node.js and Express server handles API requests securely, interacting with MongoDB for efficient data storage and retrieval. Firebase provides real-time capabilities and robust user authentication, making sure that the platform remains both reliable and user-friendly.

Green Circle not only serves as an information hub but also as a community-driven platform where gardeners can motivate each other, exchange ideas, and grow together. Whether you’re looking to start your first garden or want to share a tried-and-true technique, Green Circle is the perfect place to connect, learn, and contribute.`,
    image: "https://i.ibb.co/LKzqppY/Screenshot-2025-06-27-150356.png",
    tags: [
      "React",
      "TailwindCSS",
      "Node.JS",
      "Express.JS",
      "Firebase",
      "Mongodb",
    ],
    demoUrl: "https://green-circle-6904d.web.app/",
    githubUrl: "https://github.com/tmdsifat98/gardening-community-client",
  },
  {
    id: 3,
    title: "Lodgify",
    description:
      `Lodgify is a cutting-edge hotel booking platform designed to simplify the reservation process for users and streamline hotel room management for administrators. Developed with the MERN stack (MongoDB, Express, React, Node.js) alongside Firebase and TailwindCSS, Lodgify offers a seamless, user-friendly experience for booking hotel rooms online from anywhere in the world.

Users can easily browse available rooms, view detailed information, and check real-time availability. Once a room is booked, it automatically becomes unavailable for others, preventing double bookings and ensuring a smooth booking workflow. The platform supports intuitive booking modification features, enabling users to update their reservations effortlessly.

Lodgify incorporates automatic price calculations based on booking details, such as stay duration and room type, providing users with transparent and instant pricing. Beyond bookings, users can leave ratings and detailed reviews for rooms they have stayed in, helping future customers make informed decisions.

The responsive and visually appealing UI, crafted with TailwindCSS, ensures that the platform works flawlessly on both desktop and mobile devices. Backend APIs powered by Express.js and MongoDB manage booking data securely and efficiently, while Firebase authentication guarantees safe user login and session handling.

Lodgify is not just a booking system; it is a comprehensive hotel management solution that fosters trust and convenience, making hotel reservations simple and reliable for travelers and administrators alike.`,
    image: "https://i.ibb.co/zWqQtMFT/Screenshot-2025-06-27-151303.png",
    tags: ["React", "Express", "MongoDB", "Firebase", "TailwindCSS"],
    demoUrl: "https://assignment-11-1acf0.web.app/",
    githubUrl: "https://github.com/tmdsifat98/hotel-management-client",
  },
];

export const ProjectsSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (id) => {
    const project = projects.find((p) => p.id === id);
    setSelectedProject(project);
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
    setSelectedProject(null);
  };
  return (
    <Fade>
      <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-glow">
            {" "}
            Featured <span className="text-gradient"> Projects </span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                onClick={() => handleShow(project.id)}
                key={index}
                className="group bg-card p-2 cursor-pointer border-2 rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-44 rounded hover:rounded object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {" "}
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                <div className="p-3">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}{" "}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between px-5 items-center mt-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {openModal && selectedProject && (
            <div className="fixed inset-0 z-50 bg-black/10 backdrop-blur-sm bg-opacity-60 flex items-center justify-center p-4">
              <div
                className={cn(
                  "rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-xl p-6 pt-10 bg-card"
                )}
              >
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 text-gray-500 hover:text-red-600 cursor-pointer"
                >
                  <X size={24} />
                </button>

                <img
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-84 object-cover rounded-lg mb-4"
                />
                <h2 className="text-2xl font-bold mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-muted-foreground mb-4 h-28 overflow-auto">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary text-secondary-foreground border border-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    Source Code <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <a
              className="w-fit flex items-center mx-auto gap-2 px-6 py-2 rounded-full border  border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-rose-600 to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
              target="_blank"
              href="https://github.com/tmdsifat98"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </Fade>
  );
};
