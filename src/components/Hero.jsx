import { motion } from "framer-motion";
import { Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileArt from "@/assets/pic1.jpeg";
const Hero = () => {
    return (<section className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40"/>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background"/>
      </div>

      {/* Colorful floating orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-coral/15 rounded-full blur-3xl animate-float"/>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-lavender/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}/>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gold/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}/>
      </div>

      <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-coral/10 border border-coral/20 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-coral"/>
              <span className="text-sm text-coral font-medium">
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
              I am a Full-Stack Developer and a self-taught designer. I am
              inquisitive, creative and have a keen eye for making websites look
              appealing. Currently pursuing B.Tech in Computer Science
              Engineering from Swami Keshwanand Institute in Jaipur.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25">
                Get in Touch
              </a>
              <a href="#projects" className="border-2 border-coral/30 text-foreground px-8 py-4 rounded-full font-medium hover:bg-coral/10 transition-all hover:scale-105">
                View Projects
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a href="https://linkedin.com/in/tanya-vohra" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5"/>
                <span className="text-sm">LinkedIn</span>
              </a>
              <a href="mailto:vohratanya5@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5"/>
                <span className="text-sm">Email</span>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Profile Art */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 border-2 border-coral/40 rounded-full animate-float"/>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-lavender/30 rounded-full animate-float" style={{ animationDelay: "2s" }}/>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-gold/40 rounded-full animate-float" style={{ animationDelay: "1s" }}/>

              {/* Image Container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden p-1" style={{ background: "linear-gradient(135deg, hsl(var(--coral)), hsl(var(--lavender)), hsl(var(--gold)))" }}>
                <div className="w-full h-full rounded-3xl bg-peach/50 overflow-hidden flex items-center justify-center">
                  <img src={profileArt} alt="Tanya Vohra - Profile" className="w-full h-full object-contain p-4"/>
                </div>
              </div>

              {/* Info Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="absolute -bottom-6 left-0 glass rounded-xl px-4 py-3">
                <span className="text-primary font-medium">📍 Jaipur, Rajasthan</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
          <span className="text-muted-foreground text-sm">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown className="w-5 h-5 text-primary"/>
          </motion.div>
        </motion.div>
      </div>
    </section>);
};
export default Hero;
