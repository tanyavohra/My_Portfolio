import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
const Index = () => {
    return (<>
      <Helmet>
        <title>Tanya Vohra | Full-Stack Developer & Designer</title>
        <meta name="keywords" content="frontend developer,fullstack,fuul-stack,front-end web developer, UI designer, React developer, portfolio, Tanya Vohra"/>
        <link rel="canonical" href="https://tanyavohra.com"/>
      </Helmet>

      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>);
};
export default Index;
