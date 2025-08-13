import { Navbar } from "../components/Navbar";
// import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import HeroSection from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { Education } from "../components/Education";
import Experience from "../components/Experience";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background Effects */}
      <StarBackground />

      {/* Navbar */}
      <div className="backdrop-blur-sm sticky top-0 bg-white/30 z-[999] transition-all duration-300 shadow-xs py-3">
        <Navbar />
      </div>
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <Experience />
        <ProjectsSection />
        <Education />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
