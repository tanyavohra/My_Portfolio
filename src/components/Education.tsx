import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const education = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    institution: "Swami Keshwanand Institute of Technology and Gramothan, Jaipur",
    description: "Currently in II year",
    current: true,
  },
  {
    year: "2022 - 2023",
    title: "12th Grade - 87.6%",
    institution: "Sophia Girls Senior Secondary School, Kota",
    description: "Awarded a trophy for highest marks in English",
  },
  {
    year: "2020 - 2021",
    title: "10th Grade - 94%",
    institution: "Sophia Girls Senior Secondary School, Kota",
    description: "Completed secondary education with distinction",
  },
];

const achievements = [
  { title: "CPC Hackathon", detail: "SKIT Jaipur • 2024", badge: "Winner" },
  { title: "Smart India Hackathon", detail: "College Level • 2024", badge: "Top 25" },
];

const activities = [
  { title: "PRAVAH 2025 Decoration Team", role: "Coordinator", description: "Led creative planning & execution for the annual fest decoration." },
  { title: "Fine Arts & Crafts Club", role: "Member", description: "Active member contributing to creative initiatives at SKIT Jaipur." },
  { title: "Art & Design Exhibitions", role: "Participant", description: "Participated in Beyond the Canvas and Rang Art Exhibition." },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary text-sm font-medium uppercase tracking-widest">My Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Extracurricular & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6">🎓 Education</h3>

            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-border" />

              <div className="space-y-6">
                {education.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="relative"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute -left-8 top-4 w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        item.current ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {item.current ? "●" : "○"}
                    </div>

                    <div className="bg-card border border-border rounded-2xl p-5">
                      <span className={`text-sm font-medium ${item.current ? "text-primary" : "text-muted-foreground"}`}>
                        {item.year}
                      </span>
                      <h4 className="font-bold mt-1">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.institution}</p>
                      <p className="text-muted-foreground text-sm mt-2 italic">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements & Activities */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div>
              <h3 className="text-xl font-bold mb-4">🏆 Achievements</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                    className="bg-card border border-primary/30 rounded-2xl p-4"
                  >
                    <span className="text-xs font-bold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      {a.badge}
                    </span>
                    <h4 className="font-bold mt-2">{a.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{a.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activities */}
            <div>
              <h3 className="text-xl font-bold mb-4">🎯 Activities</h3>
              <div className="space-y-3">
                {activities.map((a, i) => (
                  <motion.div
                    key={a.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                    className="bg-card border border-border rounded-2xl p-4"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="font-bold text-sm">{a.title}</h4>
                      <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">{a.role}</span>
                    </div>
                    <p className="text-muted-foreground text-sm">{a.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div>
              <h3 className="text-xl font-bold mb-4">Hobbies</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Art", emoji: "🎨" },
                  { name: "Singing", emoji: "🎤" },
                  { name: "Writing", emoji: "✍️" },
                ].map((h) => (
                  <div key={h.name} className="bg-card border border-border rounded-xl p-4 text-center">
                    <span className="text-2xl block mb-1">{h.emoji}</span>
                    <span className="text-sm font-medium">{h.name}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
