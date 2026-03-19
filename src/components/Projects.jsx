import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import scholarly from "@/assets/scholarly";

const projects = [
    {
    title: "Scholarly Student Community",
    description:
      "Integrated Hugging Face API for AI-powered PDF interaction, built a community-driven Q&A system with tag-based organization, and developed a responsive UI using React.js, Node.js, Express and Python microservices.",
    tags: ["React.js", "Node.js", "AI", "Python"],
  },
  {
    title: "LMS - Learning Management System",
    description:
      "Worked as a Front-end Developer and designed the UI for a web-based Learning Management System for students.",
    tags: ["React", "CSS", "UI Design"],
  },
  {
    title: "SAHAAY - Farmer's Helper",
    description:
      "As a Front-end Developer, I designed a user-friendly interface for a web-based app aimed at helping farmers with weather updates and supplies.",
    tags: ["React", "CSS", "UI/UX"],
  },
];
const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 section-accent" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-lavender text-sm font-medium uppercase tracking-widest">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in frontend development and UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="h-32 bg-gradient-to-br from-coral/20 via-lavender/20 to-gold/20 flex items-center justify-center">
                <img>{scholarly}</img>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-coral/10 text-coral px-3 py-1 rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-3 border-t border-border">
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">💻 View Code</a>
                  <a href="#" className="text-sm text-muted-foreground hover:text-primary">🔗 Live Demo</a>
                </div>
              </div>
            </motion.div>))}
        </div>
      </div>
    </section>);
};
export default Projects;
