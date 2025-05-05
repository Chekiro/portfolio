import { useState } from "react";
import { cn } from "@/lib/utils";
import { SiNextdotjs,SiAdobephotoshop,SiJest,SiGraphql,SiPostgresql,SiMongodb,SiLaravel,SiNestjs } from "react-icons/si";
import { BiLogoTypescript, BiLogoTailwindCss, BiLogoVuejs } from "react-icons/bi";
import { FaReact, FaNode, FaDocker, FaGithub, FaFigma, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase } from "react-icons/fa";  // Importowanie ikon


const skills = [
  { name: "HTML/CSS", icon: <FaHtml5 size={50} />, category: "frontend" },
  { name: "JavaScript", icon: <FaJs size={50} />, category: "frontend" },
  { name: "TypeScript", icon: <BiLogoTypescript size={50} />, category: "frontend" },
  { name: "Tailwind CSS", icon: <BiLogoTailwindCss size={50} />, category: "frontend" },
  { name: "React", icon: <FaReact size={50} />, category: "frontend" },
  { name: "Next.js", icon: <SiNextdotjs size={50} />, category: "frontend" },
  { name: "Vue.js", icon: <BiLogoVuejs size={50} />, category: "frontend" },

  { name: "Node.js", icon: <FaNode size={50} />, category: "backend" },
  { name: "Laravel", icon: <SiLaravel size={50} />, category: "backend" },
  { name: "NestJS", icon: <SiNestjs size={50} />, category: "backend" },
  { name: "PostgreSQL", icon: <SiPostgresql size={50} />, category: "backend" },
  { name: "GraphQL", icon: <SiGraphql size={50} />, category: "backend" },

  { name: "Git/GitHub", icon: <FaGithub size={50} />, category: "tools" },
  { name: "Docker", icon: <FaDocker size={50} />, category: "tools" },
  { name: "Jest", icon: <SiJest size={50} />, category: "tools" },
  { name: "Figma", icon: <FaFigma size={50} />, category: "tools" },
  { name: "Photoshop", icon: <SiAdobephotoshop size={50} />, category: "tools" },
  { name: "VS Code", icon: <FaGitAlt size={50} />, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover text-center"
            >
              <div className="mb-4 flex justify-center">
                {skill.icon}
              </div>

              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};