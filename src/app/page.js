import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Skills></Skills>
      <About></About>
      <WorkProcess></WorkProcess>
      <Contact></Contact>
    </>
  );
}
