import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Green Circle",
    description: "A beautiful full stack project that allows to share and learn gardening tips with a community and share personal experience.",
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
    id: 2,
    title: "Lodgify",
    description:
      "A modern dynamic hotel management system with MERN stack technology allows book hotel room from anywhere",
    image: "https://i.ibb.co/zWqQtMFT/Screenshot-2025-06-27-151303.png",
    tags: ["React", "Express", "MongoDB", "Firebase", "TailwindCSS"],
    demoUrl: "https://assignment-11-1acf0.web.app/",
    githubUrl: "https://github.com/tmdsifat98/hotel-management-client",
  },
  {
    id: 3,
    title: "All Events",
    description:
      "An event management platform landing page allows to taking idea aboutevents, show the details of events and book.",
    image: "https://i.ibb.co/1fwkSXHQ/Screenshot-2025-06-27-151831.png",
    tags: ["React", "Node.js", "TailwindCSS", "React Router"],
    demoUrl: "https://all-events-66a54.web.app/",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
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
              key={index}
              className="group bg-card p-2 border-2 rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 rounded hover:rounded object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

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

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
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
  );
};
