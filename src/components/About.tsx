import creativeTools from "@/assets/creative-tools.png";

const About = () => {
  return (
    <section id="about" className="py-20 section-accent">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-coral text-sm font-medium uppercase tracking-widest">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Passionate About Creating <span className="text-gradient">Beautiful Experiences</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left - Info Cards */}
          <div className="space-y-5">
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

            <img
              src={creativeTools}
              alt="Creative workspace"
              className="w-full rounded-2xl"
              loading="lazy"
            />
          </div>

          {/* Right - Description & Stats */}
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              I am a Frontend Developer and a self-taught designer with a
              passion for creating visually appealing and user-friendly
              websites. My journey in web development has been driven by
              curiosity and a desire to bring creative ideas to life.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I believe in the power of good design to communicate ideas
              effectively and create meaningful experiences. When I'm not
              coding, you'll find me exploring art, singing, or writing.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-coral">10+</p>
                <p className="text-sm text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-lavender">3+</p>
                <p className="text-sm text-muted-foreground mt-1">Years Learning</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-4 text-center">
                <p className="text-3xl font-bold text-gold">8+</p>
                <p className="text-sm text-muted-foreground mt-1">Technologies</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
