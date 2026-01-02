import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "LMS - Learning Management System",
    description:
      "Worked as a Front-end Developer and designed the UI for a web-based Learning Management System for students.",
    tags: ["React", "CSS", "UI Design"],
    color: "from-primary/20 to-secondary/20",
    link: "#",
  },
  {
    title: "Durga - Women's Safety",
    description:
      "I worked as a Front-end Developer for a women's safety website, while also designing its visual layout to create a user-friendly experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    color: "from-secondary/20 to-primary/20",
    link: "#",
  },
  {
    title: "SAHAAY - Farmer's Helper",
    description:
      "As a Front-end Developer, I designed a user-friendly interface for a web-based app aimed at helping farmers with weather updates and supplies.",
    tags: ["React", "API Integration", "UI/UX"],
    color: "from-primary/20 to-gold-light/20",
    link: "#",
  },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-primary/5 relative">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            My Work
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in
            frontend development and UI design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="glass rounded-3xl overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300">
                {/* Project Image Placeholder */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-card/80 backdrop-blur flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <span className="font-display text-2xl font-bold text-primary">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="w-12 h-12 rounded-full bg-background flex items-center justify-center hover:scale-110 transition-transform"
                    >
                      <ArrowUpRight className="w-5 h-5 text-foreground" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-muted px-3 py-1 rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 mt-6 pt-4 border-t border-border">
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    <a
                      href={project.link}
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
