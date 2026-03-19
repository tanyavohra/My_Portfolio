const Footer = () => {
  return (
    <footer className="py-10 border-t border-border bg-card/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <a href="#" className="text-xl font-bold text-gradient">Tanya Vohra</a>
          <p className="text-muted-foreground text-sm mt-1">Made with ❤️ in Jaipur</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://linkedin.com/in/tanya-vohra" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-lavender hover:text-primary-foreground text-sm">in</a>
          <a href="mailto:vohratanya5@gmail.com" className="w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-coral hover:text-primary-foreground text-sm">✉️</a>
        </div>

        <p className="text-muted-foreground text-sm">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
