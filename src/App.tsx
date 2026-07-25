import Navbar from "@/components/navigation/Navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";
function App() {
  return (
    <>
      <Navbar />

      <main className="bg-background pt-20">
        <Hero />

        <Projects />

        <Experience />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;