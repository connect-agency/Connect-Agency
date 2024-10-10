import About from "../Components/About";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ";
import Feature from "../Components/Feature";
import Hero from "../Components/Hero";
// import JoinUs from "../Components/JoinUs"
import News from "../Components/News";

import ProjectSection from "../Components/ProjectSection";
import Services from "../Components/Services";
import Testimonial from "../Components/Testimonial";
import ScrollToTop from "../Hooks/scrollToUp";

const Home = () => {
  return (
    <ScrollToTop>
      <Hero />
      <About />

      <ProjectSection />
      <Services />
      <Feature />
      <Testimonial />
      <FAQ />
      <News />

      <Contact />
    </ScrollToTop>
  );
};

export default Home;
