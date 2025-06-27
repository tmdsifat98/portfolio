import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import { RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";

const skills = [
  // Frontend
  { Icon: FaHtml5, name: "HTML/CSS", level: 85, category: "frontend" },
  {
    Icon: RiTailwindCssFill,
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
  },
  { Icon: FaJs, name: "JavaScript", level: 70, category: "frontend" },
  { Icon: FaReact, name: "React", level: 90, category: "frontend" },

  // // Backend
  { Icon: FaNodeJs, name: "NodeJS", level: 80, category: "backend" },
  { Icon: SiExpress, name: "ExpressJS", level: 75, category: "backend" },
  { Icon: SiMongodb, name: "MongoDB", level: 70, category: "backend" },
  // //Tools
  { Icon: FaGithub, name: "Git/GitHub", level: 90, category: "tools" },
  { Icon: RiFirebaseFill, name: "Firebase", level: 70, category: "tools" },
  { Icon: FaFigma, name: "Figma", level: 85, category: "tools" },
  { Icon: VscVscodeInsiders, name: "VS Code", level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
          My <span className="text-gradient"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-gradient-to-r from-rose-600 to-purple-600 text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="container mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4 flex items-center gap-5">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                <skill.Icon size={21} />
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
          ))}
        </div>
      </div>
    </section>
  );
};
