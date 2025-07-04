import { Briefcase, Code, User } from "lucide-react";
import { FaDownload } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
          About <span className="text-gradient"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold">Passionate Web Developer</h3>

            <p className="text-muted-foreground">
              I specialize in creating responsive, accessible, and performant
              web applications using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about creating elegant solutions to complex
              problems, and I'm constantly learning new technologies and
              techniques to stay at the forefront of the ever-evolving web
              landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border  border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-rose-600 to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
              >
                Get In Touch
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

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive user interfaces and seamless user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Teaching and Guide</h4>
                  <p className="text-muted-foreground">
                    Have a proper idea about teaching and give idea about what I
                    know.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
