import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Phone, Send, MapPin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const contactInfo = [
        { icon: Mail, label: "Email", value: "vohratanya5@gmail.com", href: "mailto:vohratanya5@gmail.com", color: "bg-coral/15 text-coral" },
        { icon: Linkedin, label: "LinkedIn", value: "Tanya-Vohra", href: "https://linkedin.com/in/tanya-vohra", color: "bg-lavender/15 text-lavender" },
        { icon: MapPin, label: "Location", value: "Jaipur, Rajasthan, India", href: "#", color: "bg-primary/10 text-primary" },
    ];
    return (<section id="contact" className="py-24 relative section-accent">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-coral font-medium text-sm uppercase tracking-widest">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          
            <div className="glass rounded-3xl p-8">
              <h3 className="font-display text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (<motion.a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }} className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors group">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-5 h-5"/>
                    </div>
                    <div className="flex-1">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <p className="font-medium">{item.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors"/>
                  </motion.a>))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.6 }} className="glass rounded-3xl p-8">
              <h3 className="font-display text-xl font-semibold mb-4">Download Resume</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Get a copy of my resume to learn more about my experience.
              </p>
              <a href="/resumeupdate5.docx.pdf" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-medium hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20" download>
                Download CV
                <ArrowUpRight className="w-4 h-4"/>
              </a>
       
          </motion.div>
        </div>
      </div>
    </section>);
};
export default Contact;
