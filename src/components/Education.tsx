import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Trophy, Star } from "lucide-react";

const education = [
  {
    year: "2023 - Present",
    title: "B.Tech in Computer Science",
    institution: "Swami Keshwanand Institute of Technology and Gramothan, Jaipur",
    description: "Currently in II year, pursuing Bachelor of Technology in Computer Science",
    icon: GraduationCap,
    current: true,
  },
  {
    year: "2022 - 2023",
    title: "12th Grade - 87.6%",
    institution: "Sophia Girls Senior Secondary School, Kota",
    description: "Awarded a trophy for achieving the highest marks in English in 12th grade.",
    icon: Trophy,
    achievement: true,
  },
  {
    year: "2020 - 2021",
    title: "10th Grade - 94%",
    institution: "Sophia Girls Senior Secondary School, Kota",
    description: "Completed secondary education with distinction.",
    icon: Award,
  },
];

const achievements = [
  {
    title: "CPC Hackathon",
    venue: "SKIT Jaipur",
    year: "2024",
    badge: "Winner",
    highlight: true,
  },
  {
    title: "Smart India Hackathon",
    venue: "College Level",
    year: "2024",
    badge: "Top 25",
    highlight: true,
  },
];

const activities = [
  {
    title: "PRAVAH 2025 Decoration Team",
    role: "Coordinator",
    description: "Led creative planning & execution for the annual fest decoration.",
    skills: "Leadership, creative direction, and team management",
  },
  {
    title: "Fine Arts & Crafts Club",
    venue: "SKIT Jaipur",
    role: "Member",
    description: "Active member contributing to creative initiatives and campus activities.",
    skills: "Collaboration, creativity, and artistic expression",
  },
  {
    title: "Art & Design Exhibitions",
    role: "Participant",
    description: "Participated in multiple exhibitions including Beyond the Canvas and Rang Art Exhibition.",
    skills: "Artistic presentation, networking, and creative expression",
  },
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-lavender/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            My Journey
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Extracurricular & <span className="text-gradient">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl font-semibold mb-8 flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-primary" />
              Education
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="relative pl-12"
                  >
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        item.current
                          ? "bg-primary"
                          : item.achievement
                          ? "bg-gold"
                          : "bg-secondary"
                      }`}
                    >
                      <item.icon className="w-4 h-4 text-background" />
                    </div>

                    <div className="glass rounded-2xl p-6 hover:border-primary/50 transition-colors">
                      <span
                        className={`text-sm font-medium ${
                          item.current ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {item.year}
                      </span>
                      <h4 className="font-display text-lg font-semibold mt-1">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mt-1">
                        {item.institution}
                      </p>
                      <p className="text-muted-foreground text-sm mt-3 italic">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievements & Activities */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Achievements */}
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <Trophy className="w-6 h-6 text-primary" />
              Achievements
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className={`glass rounded-2xl p-5 hover:border-primary/50 transition-colors relative overflow-hidden ${
                    achievement.highlight ? "border-primary/30" : ""
                  }`}
                >
                  {achievement.highlight && (
                    <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/20 to-transparent" />
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-xs font-semibold bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      {achievement.badge}
                    </span>
                  </div>
                  <h4 className="font-display text-base font-semibold">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {achievement.venue} • {achievement.year}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Activities */}
            <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Activities
            </h3>

            <div className="space-y-4">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass rounded-2xl p-5 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-display text-base font-semibold">
                      {activity.title}
                    </h4>
                    <span className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {activity.role}
                    </span>
                  </div>
                  {activity.venue && (
                    <p className="text-xs text-muted-foreground mb-2">
                      📍 {activity.venue}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm">
                    {activity.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.8 }}
              className="mt-8"
            >
              <h3 className="font-display text-xl font-semibold mb-6">Hobbies</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { name: "Art", emoji: "🎨" },
                  { name: "Singing", emoji: "🎤" },
                  { name: "Writing", emoji: "✍️" },
                ].map((hobby) => (
                  <div
                    key={hobby.name}
                    className="glass rounded-xl p-4 text-center hover:border-primary/50 transition-colors"
                  >
                    <span className="text-3xl block mb-2">{hobby.emoji}</span>
                    <span className="text-sm font-medium">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
