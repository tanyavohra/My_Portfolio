import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import creativeTools from "@/assets/creative-tools.png";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 section-accent" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-coral text-sm font-medium uppercase tracking-widest">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Passionate About Creating <span className="text-gradient">Beautiful Experiences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-1">🎓 Education</h3>
              <p className="text-muted-foreground text-sm">
                Pursuing B.Tech in Computer Science Engineering from Swami Keshwanand Institute of Technology and Gramothan, Jaipur
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-1">📍 Location</h3>
              <p className="text-muted-foreground text-sm">Based in Jagatpura, Jaipur, Rajasthan, India</p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-1">🎂 Birthday</h3>
              <p className="text-muted-foreground text-sm">October 6, 2005</p>
            </div>

            <img src={creativeTools} alt="Creative workspace" className="w-full rounded-2xl" loading="lazy" />
          </motion.div>

          {/* Right - Description & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a Frontend Developer and a self-taught designer with a passion for creating visually appealing and user-friendly websites. My journey in web development has been driven by curiosity and a desire to bring creative ideas to life.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I believe in the power of good design to communicate ideas effectively and create meaningful experiences. When I'm not coding, you'll find me exploring art, singing, or writing.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "10+", label: "Projects", color: "text-coral" },
                { value: "3+", label: "Years Learning", color: "text-lavender" },
                { value: "8+", label: "Technologies", color: "text-gold" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card border border-border rounded-2xl p-4 text-center">
                  <p className={`text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>);
};
export default About;
