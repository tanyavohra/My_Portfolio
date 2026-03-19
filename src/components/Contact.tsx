import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  { label: "Email", value: "vohratanya5@gmail.com", href: "mailto:vohratanya5@gmail.com", emoji: "✉️" },
  { label: "LinkedIn", value: "Tanya-Vohra", href: "https://linkedin.com/in/tanya-vohra", emoji: "🔗" },
  { label: "Phone", value: "+91 7878707864", href: "tel:+917878707864", emoji: "📞" },
  { label: "Location", value: "Jaipur, Rajasthan, India", href: "#", emoji: "📍" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon!" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 section-accent">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-coral text-sm font-medium uppercase tracking-widest">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold mt-3">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mt-3">Have a project in mind or just want to say hi? Feel free to reach out!</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50"
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <div>
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-sm">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-2">Download Resume</h3>
              <p className="text-muted-foreground text-sm mb-4">Get a copy of my resume to learn more about my experience.</p>
              <a href="#" className="inline-block bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium hover:opacity-90">
                Download CV ↗
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  placeholder="Hello, I'd like to discuss..."
                  className="w-full px-4 py-3 bg-muted border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-medium hover:opacity-90"
              >
                Send Message ✈️
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
