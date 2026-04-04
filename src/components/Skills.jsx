import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Globe } from "lucide-react";
const codingSkills = [
    { name: "Data Structures & Algorithms", bg: "bg-lavender/10" },
    { name: "Computer Science Fundamentals",bg:"bg-primary/10" },
    { name: "JavaScript",bg: "bg-coral/10",bg:"bg-coral/15" },
    { name: "React.js",bg:"bg-gold/15"},
    { name: "Node.js",bg: "bg-gold/10"},
    { name: "Express.js",bg: "bg-coral/10" },
    { name: "MongoDB",bg:"bg-coral/15"},
    { name: "HTML",bg: "bg-gold/10" },
    { name: "CSS",bg:"bg-primary/10"}, 
    { name: "C++" , bg: "bg-lavender/10"}, 

];
const softwareSkills = [
    { name: "Git", icon: "🔄", bg: "bg-primary/10" },
    { name: "VS Code", icon: "💻", bg: "bg-gold/10" },
    { name: "Figma", icon: "🎨", bg: "bg-coral/10" },
    { name: "Canva", icon: "✨", bg: "bg-lavender/10" },
    
];
const languages = [
    { name: "English", level: "Proficient", description: "Strong communication skills" },
    { name: "Hindi", level: "Fluent", description: "Native speaker" },
];
const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    return (<section id="skills" className="py-24 relative overflow-hidden">
      {/* Colorful background accents */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-coral/5 to-transparent pointer-events-none"/>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-lavender/5 to-transparent pointer-events-none"/>

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-widest">
            My Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coding Skills */}
          <motion.div initial={{ opacity: 0, x: -40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="glass rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center">
                <Code className="w-6 h-6 text-coral"/>
              </div>
              <h3 className="font-display text-2xl font-semibold">Coding Skills</h3>
            </div>

              <div className="grid grid-cols-2 gap-4">
                {codingSkills.map((skill, index) => (<motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }} className={`${skill.bg} rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition-transform border border-border/30`}>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>))}
              </div>
          </motion.div>

          {/* Software & Languages */}
          <div className="space-y-8">
            {/* Software Skills */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-lavender"/>
                </div>
                <h3 className="font-display text-2xl font-semibold">Software Skills</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {softwareSkills.map((skill, index) => (<motion.div key={skill.name} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }} className={`${skill.bg} rounded-xl p-4 flex items-center gap-3 hover:scale-105 transition-transform border border-border/30`}>
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>))}
              </div>
            </motion.div>

            {/* Languages */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-gold"/>
                </div>
                <h3 className="font-display text-2xl font-semibold">Languages</h3>
              </div>

              <div className="space-y-4">
                {languages.map((lang, index) => (<motion.div key={lang.name} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }} className="flex items-center justify-between p-4 bg-muted/50 rounded-xl border border-border/30">
                    <div>
                      <span className="font-medium">{lang.name}</span>
                      <p className="text-sm text-muted-foreground">{lang.description}</p>
                    </div>
                    <span className="text-sm bg-gold/15 text-gold px-3 py-1 rounded-full font-medium">
                      {lang.level}
                    </span>
                  </motion.div>))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);
};
export default Skills;
