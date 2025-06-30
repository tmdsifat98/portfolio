import { ArrowDown, CodeXml, Github, Linkedin, Twitter } from "lucide-react";
import heroImage from "../../public/purple.png";
import { FaDownload, FaWhatsapp } from "react-icons/fa6";
import { BsLink45Deg } from "react-icons/bs";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl flex flex-col items-center gap-4 mx-auto text-center z-10">
        <img
          src={heroImage}
          alt="hero image"
          className="w-60 h-60 object-cover rounded-full bg-gradient-to-r from-rose-600 to-purple-600"
        />
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-gradient opacity-0 font-bold animate-fade-in-delay-1 text-glow">
              {" "}
              Sifat
            </span>
            <span className="ml-2 opacity-0 animate-fade-in-delay-2 text-glow">
              Tarafder
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create stellar web experiences with modern technologies.
            Specializing in MERN stack development, I build interfaces that are
            both beautiful and functional.
          </p>

          <ul className="flex justify-center items-center gap-3">
            <li className="text-xl">
              <a href="/">
                <CodeXml size={25} />
              </a>
            </li>
            <a
              className="text-green-500 hover:text-green-600 transition"
              href="https://wa.me/8801521730173"
              target="_blank"
            >
              <FaWhatsapp size={23} />
            </a>
            <a
              className="text-indigo-600 hover:text-indigo-500 transition"
              href="https://www.linkedin.com/in/tmdsifat98/"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              className="text-blue-400 hover:text-blue-500 transition"
              href="https://x.com/SifatTarafder98"
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              className="text-slate-600 hover:text-gray-500 transition"
              href="https://github.com/tmdsifat98"
              target="_blank"
            >
              <Github />
            </a>
          </ul>

          <div className="pt-4 opacity-0 flex gap-2 items-center justify-center animate-fade-in-delay-4">
            <a
              href="#projects"
              className="px-6 py-2 rounded-full border  flex items-center justify-center gap-2 border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-rose-600 to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
            >
              View My Project <BsLink45Deg size={21} />
            </a>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nr7SNq4rSsdU9ze2t_lOhrJ2R5Mi85zM/view?usp=sharing"
              className="px-6 py-2 rounded-full border flex items-center justify-center gap-2 border-primary font-semibold transition-all duration-300
                bg-gradient-to-r from-rose-600 to-purple-600 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-left"
            >
              Download Resume <FaDownload />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 md:bottom-3 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
