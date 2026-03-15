import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, GraduationCap } from "lucide-react";
import creativeTools from "@/assets/creative-tools.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: "Projects Completed", value: "10+", color: "text-coral" },
    { label: "Years Learning", value: "3+", color: "text-lavender" },
    { label: "Technologies", value: "8+", color: "text-gold" },
  ];

  return (
    <section id="about" className="py-24 relative section-accent">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral font-medium text-sm uppercase tracking-widest">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Passionate About Creating
            <br />
            <span className="text-gradient">Beautiful Experiences</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6 hover:border-coral/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral/15 flex items-center justify-center flex-shrink-0 group-hover:bg-coral/25 transition-colors">
                  <GraduationCap className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    Pursuing B.Tech in Computer Science Engineering from Swami
                    Keshwanand Institute of Technology and Gramothan, Jaipur
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:border-lavender/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-lavender/20 flex items-center justify-center flex-shrink-0 group-hover:bg-lavender/30 transition-colors">
                  <MapPin className="w-6 h-6 text-lavender" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Based in Jagatpura, Jaipur, Rajasthan, India
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:border-gold/50 transition-colors group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/15 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/25 transition-colors">
                  <Calendar className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold mb-2">Birthday</h3>
                  <p className="text-muted-foreground">October 6, 2005</p>
                </div>
              </div>
            </div>

            {/* Creative Tools Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="rounded-2xl overflow-hidden"
            >
              <img
                src={creativeTools}
                alt="Creative workspace with design tools"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* Right - Stats & Description */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a Frontend Developer and a self-taught designer with a
              passion for creating visually appealing and user-friendly
              websites. My journey in web development has been driven by
              curiosity and a desire to bring creative ideas to life.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in the power of good design to communicate ideas
              effectively and create meaningful experiences. When I'm not
              coding, you'll find me exploring art, singing, or writing.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="text-center glass rounded-2xl p-4"
                >
                  <div className={`font-display text-3xl md:text-4xl font-bold ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
