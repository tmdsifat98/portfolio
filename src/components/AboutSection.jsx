import { Briefcase, Code, Smartphone, User } from "lucide-react";
import { Fade } from "react-awesome-reveal";
import { FaDownload } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <Fade>
      <section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-glow">
            About <span className="text-gradient"> Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h3 className="text-4xl font-semibold">
                Passionate Web Developer & Lifelong Learner
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                My programming journey began a few years ago when I first
                discovered the magic of turning ideas into interactive digital
                experiences. Since then, I’ve been dedicated to learning and
                mastering modern web and mobile technologies, from building
                dynamic UIs with <strong>React</strong> to crafting scalable
                backend systems.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I enjoy working on projects that challenge me to think
                creatively and solve problems in unique ways. Whether it’s
                developing a pixel-perfect frontend, integrating APIs, or
                optimizing performance, I thrive on making things both
                functional and beautiful.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Outside of programming, I’m passionate about{" "}
                <strong>reading tech blogs</strong>, playing{" "}
                <strong>Chess</strong>, and exploring{" "}
                <strong>beauty of nature</strong> around town. I also enjoy guiding and
                teaching others — sharing knowledge is one of the most rewarding
                parts of my work.
              </p>


              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a
                  href="#contact"
                  className="px-6 py-2 rounded-full border border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-[#f00739] to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
                >
                  Get In Touch
                </a>

                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/15LJNC-HHZB5q9yNDGM25R5mtCvkHFcER/view?usp=sharing"
                  className="px-6 py-2 rounded-full border flex items-center justify-center gap-2 border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-[#f00739] to-purple-600 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-left"
                >
                  Download Resume <FaDownload />
                </a>
              </div>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 gap-6">
              {/* Web Dev */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg"> Web Development</h4>
                    <p className="text-muted-foreground">
                      Creating responsive, high-performance websites and web
                      apps with modern frameworks like React and Next.js.
                    </p>
                  </div>
                </div>
              </div>

              {/* App Dev */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Smartphone className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">App Development</h4>
                    <p className="text-muted-foreground">
                      Building scalable and user-friendly mobile applications
                      for Android using Java, Kotlin, Jetpack Compose, and REST
                      APIs.
                    </p>
                  </div>
                </div>
              </div>

              {/* UI/UX */}
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">UI/UX Design</h4>
                    <p className="text-muted-foreground">
                      Designing clean, user-friendly interfaces that provide a
                      seamless experience for every user.
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
                    <h4 className="font-semibold text-lg">
                      Teaching & Mentoring
                    </h4>
                    <p className="text-muted-foreground">
                      Helping others grow by sharing knowledge, guiding
                      beginners, and inspiring curiosity in tech.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};
