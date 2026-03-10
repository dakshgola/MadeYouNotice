import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import AboutTransition from "@/components/AboutTransition";
import Showreel from "@/components/Showreel";
import PortfolioGrid from "@/components/PortfolioGrid";
import ProjectShowcase from "@/components/ProjectShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-primary">
      <Navbar />

      {/* Hero Section Container for Canvas + Overlay */}
      <section className="relative w-full bg-black">
        <ScrollyCanvas />
        <Overlay />
      </section>

      {/* About Transition text roll */}
      <AboutTransition />

      {/* Video Showreel wrapper */}
      <Showreel />

      {/* Main Grid */}
      <PortfolioGrid />

      {/* ListView Projects */}
      <ProjectShowcase />

      {/* Detailed About section */}
      <About />

      {/* CTA section */}
      <Contact />

      <Footer />
    </main>
  );
}
