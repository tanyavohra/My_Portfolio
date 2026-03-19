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
        <title>Tanya Vohra | Frontend Developer & Designer</title>
        <meta name="description" content="Portfolio of Tanya Vohra - Frontend Developer and self-taught designer passionate about creating beautiful, user-friendly web experiences."/>
        <meta name="keywords" content="frontend developer, web developer, UI designer, React developer, portfolio, Tanya Vohra"/>
        <meta property="og:title" content="Tanya Vohra | Frontend Developer & Designer"/>
        <meta property="og:description" content="Frontend Developer and designer passionate about creating beautiful web experiences."/>
        <meta property="og:type" content="website"/>
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
