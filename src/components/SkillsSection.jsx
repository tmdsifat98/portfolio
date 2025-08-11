import { useState } from "react";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiNextdotjs, SiOdoo, SiKotlin } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { Fade } from "react-awesome-reveal";

const skills = [
  // Frontend
  {
    Icon: FaHtml5,
    name: "HTML/CSS",
    level: 85,
    category: "frontend",
    color: "text-orange-500",
  },
  {
    Icon: RiTailwindCssFill,
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    color: "text-sky-400",
  },
  {
    Icon: FaJs,
    name: "JavaScript",
    level: 70,
    category: "frontend",
    color: "text-yellow-400",
  },
  {
    Icon: FaReact,
    name: "React",
    level: 90,
    category: "frontend",
    color: "text-cyan-400",
  },
  {
    Icon: SiNextdotjs,
    name: "NextJS",
    level: 70,
    category: "frontend",
    color: "",
  },

  // Backend
  {
    Icon: FaNodeJs,
    name: "NodeJS",
    level: 80,
    category: "backend",
    color: "text-green-600",
  },
  {
    Icon: SiExpress,
    name: "ExpressJS",
    level: 75,
    category: "backend",
    color: "text-gray-500",
  },
  {
    Icon: SiMongodb,
    name: "MongoDB",
    level: 70,
    category: "backend",
    color: "text-green-700",
  },
  {
    Icon: FaPython,
    name: "Python",
    level: 60,
    category: "backend",
    color: "text-blue-400",
  },
  {
    Icon: SiOdoo,
    name: "Odoo",
    level: 60,
    category: "backend",
    color: "text-purple-500",
  },

  // Tools
  {
    Icon: FaGithub,
    name: "Git/GitHub",
    level: 90,
    category: "tools",
    color: "text-gray-600",
  },
  {
    Icon: RiFirebaseFill,
    name: "Firebase",
    level: 70,
    category: "tools",
    color: "text-orange-400",
  },
  {
    Icon: FaFigma,
    name: "Figma",
    level: 85,
    category: "tools",
    color: "text-pink-500",
  },
  {
    Icon: VscVscodeInsiders,
    name: "VS Code",
    level: 95,
    category: "tools",
    color: "text-blue-500",
  },

  // Mobile Development
  {
    Icon: SiKotlin,
    name: "Kotlin",
    level: 60,
    category: "mobile",
    color: "text-purple-600",
  },
];

const categories = ["all", "frontend", "backend", "tools", "mobile"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
          My <span className="text-gradient"> Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer ${
                activeCategory === category
                  ? "bg-gradient-to-r from-rose-600 to-purple-600 text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <Fade key={key}>
              <div className="bg-card p-6 rounded-lg shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="text-left mb-4 flex items-center gap-5">
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                  <skill.Icon size={21} className={skill.color} />
                </div>
                <div className="w-full gap-6 bg-secondary/50 h-2 flex items-center justify-between rounded-full">
                  <div
                    className="bg-gradient-to-r from-rose-600 to-purple-600 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                    style={{ width: skill.level + "%" }}
                  />
                  <div className="text-right">
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};
