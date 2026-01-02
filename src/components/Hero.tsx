import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Repeating Portfolio Text Background */}
      <div className="absolute inset-0 flex flex-col justify-center items-center overflow-hidden opacity-10 pointer-events-none select-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
            className="font-display text-6xl md:text-8xl font-bold whitespace-nowrap text-outline"
          >
            PORTFOLIO PORTFOLIO PORTFOLIO
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">
                Frontend Developer & Designer
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-foreground">Hello,</span>
              <br />
              <span className="text-foreground">I'm </span>
              <span className="text-gradient">Tanya</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              I am a Frontend Developer and a self-taught designer. I am
              inquisitive, creative and have a keen eye for making websites look
              appealing. Currently pursuing B.Tech in Computer Science
              Engineering from Swami Keshwanand Institute in Jaipur.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="border border-border text-foreground px-8 py-4 rounded-full font-medium hover:bg-muted transition-all hover:scale-105"
              >
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://linkedin.com/in/tanya-vohra"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href="mailto:vohratanya5@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-primary/30 rounded-full animate-float" />
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 rounded-full animate-float"
                style={{ animationDelay: "2s" }}
              />
              <div
                className="absolute top-1/2 -left-12 w-8 h-8 bg-secondary rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              />

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="w-full h-full rounded-3xl bg-secondary overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center mb-4">
                      <span className="font-display text-4xl text-primary-foreground font-bold">
                        TV
                      </span>
                    </div>
                    <p className="text-secondary-foreground/80 text-sm">
                      Add your photo here
                    </p>
                  </div>
                </div>
              </div>

              {/* Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -bottom-6 left-0 glass rounded-xl px-4 py-3"
              >
                <span className="text-primary font-medium">📍 Jaipur, Rajasthan</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-muted-foreground text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
