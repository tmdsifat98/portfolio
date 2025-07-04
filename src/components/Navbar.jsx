import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../../public/logo2.png";
import useActiveSection from "../hooks/useActiveSection";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const sectionIds = [
    "hero",
    "about",
    "skills",
    "projects",
    "contact",
    "education",
  ];
  const activeSection = useActiveSection(sectionIds);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="w-11/12 mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold flex items-center" href="#">
          <img src={logo} alt="logo" className="w-12 p-0" />
          <span className="relative z-10 ml-1">
            <span className="text-glow text-gradient">Sifat</span> Tarafder
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "font-semibold transition-colors duration-300",
                activeSection === item.href.substring(1)
                  ? "text-gradient"
                  : "text-foreground/80"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-60 cursor-pointer"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Hire Me - Desktop only */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-rose-600 to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "fixed inset-0 top-0 bg-background/95 backdrop-blur-md z-50",
          "transition-all duration-300 md:hidden",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="bg-black/90 flex flex-col items-center justify-center space-y-8 text-xl py-10">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "font-semibold transition-colors duration-300",
                activeSection === item.href.substring(1)
                  ? "text-gradient"
                  : "text-white"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="md:hidden items-center space-x-3">
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-rose-600 to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
