import profileArt from "@/assets/profile-art.png";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center bg-background pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div>
            <p className="text-sm font-medium text-coral uppercase tracking-widest mb-4">
              ✨ Frontend Developer & Designer
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Hello, <br />
              I'm <span className="text-gradient">Tanya</span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I am a Frontend Developer and a self-taught designer. I am
              inquisitive, creative and have a keen eye for making websites look
              appealing. Currently pursuing B.Tech in Computer Science
              Engineering from Swami Keshwanand Institute in Jaipur.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href="#contact" className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90">
                Get in Touch
              </a>
              <a href="#projects" className="border-2 border-coral px-8 py-3 rounded-full font-medium text-foreground hover:bg-coral/10">
                View Projects
              </a>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://linkedin.com/in/tanya-vohra" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary text-sm">
                🔗 LinkedIn
              </a>
              <a href="mailto:vohratanya5@gmail.com" className="text-muted-foreground hover:text-primary text-sm">
                ✉️ Email
              </a>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="flex justify-center">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-3xl overflow-hidden border-4 border-coral/30 bg-peach/30">
              <img
                src={profileArt}
                alt="Tanya Vohra"
                className="w-full h-full object-contain p-4"
              />
            </div>
            <p className="text-sm text-primary mt-3">📍 Jaipur, Rajasthan</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
