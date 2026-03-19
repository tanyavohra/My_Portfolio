import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-gradient">
          Tanya Vohra
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">About</a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground">Skills</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground">Projects</a>
          <a href="#education" className="text-sm text-muted-foreground hover:text-foreground">Education</a>
          <a href="#contact" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium hover:opacity-90">
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-3">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">About</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Skills</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Projects</a>
          <a href="#education" onClick={() => setMenuOpen(false)} className="text-muted-foreground hover:text-foreground">Education</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-medium text-center hover:opacity-90">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
