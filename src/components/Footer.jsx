import { Heart, Linkedin, Mail, Github } from "lucide-react";
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (<footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-display text-2xl font-semibold text-gradient hover:opacity-80 transition-opacity">
              Tanya Vohra
            </a>
            <p className="text-muted-foreground text-sm mt-2 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="w-4 h-4 text-coral fill-coral"/> in Jaipur
            </p>
          </div>

          <div className="flex items-center gap-4">
            {[
            { icon: Linkedin, href: "https://linkedin.com/in/tanya-vohra", color: "hover:bg-lavender hover:text-primary-foreground" },
            { icon: Mail, href: "mailto:vohratanya5@gmail.com", color: "hover:bg-coral hover:text-primary-foreground" },
            { icon: Github, href: "#", color: "hover:bg-gold hover:text-primary-foreground" },
        ].map(({ icon: Icon, href, color }) => (<a key={href} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`w-10 h-10 rounded-full bg-muted flex items-center justify-center ${color} transition-colors`}>
                <Icon className="w-5 h-5"/>
              </a>))}
          </div>

          <p className="text-muted-foreground text-sm">© {currentYear} All rights reserved.</p>
        </div>
      </div>
    </footer>);
};
export default Footer;
