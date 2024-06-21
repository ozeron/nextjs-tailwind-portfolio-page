// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import AboutMe from './about_me';
import Skills from "./skills";
import Services from './services'
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import PopularClients from "./popular-clients";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      {/* <Clients /> */}
      {/* <AboutMe /> */}

      <Services />
      { /* <Projects /> */}
      {/* <Resume /> */}
      <Testimonial />
      { /* <PopularClients /> */}
      {/* <ContactForm /> */}
      <Footer />
    </>
  );
}
