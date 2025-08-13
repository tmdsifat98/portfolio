import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast("Thank you for your message. I'll get back to you soon.");
      setIsSubmitting(false);
      e.target.reset();
    }, 1500);
  };
  return (
    <Fade>
      <section id="contact" className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-glow">
            Get In <span className="text-gradient"> Touch</span>
          </h2>

          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">
                {" "}
                Contact Information
              </h3>

              <div className="space-y-6 justify-center">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-medium"> Email</h4>
                    <a
                      href="mailto:tmdsifat98@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      tmdsifat98@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-medium">Phone/WhatsApp</h4>
                    <a
                      href="tel:+8801521730173"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +8801521730173
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />{" "}
                  </div>
                  <div className="flex flex-col items-start">
                    <h4 className="font-medium"> Location</h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors">
                      Binodpur, Matihar, Rajshahi, Bangladesh
                    </a>
                  </div>
                </div>
              </div>

              <div className="px-6">
                <h4 className="font-medium text-start mb-4 text-glow">
                  {" "}
                  Connect With Me
                </h4>
                <div className="flex space-x-4 text-glow">
                  <a
                    className="text-blue-700 hover:text-blue-500 transition"
                    href="https://www.facebook.com/Sifat.tarafder.5"
                    target="_blank"
                  >
                    <Facebook />
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
                    className="text-rose-600 hover:text-red-500 transition"
                    href="https://www.instagram.com/sifat_trf98/"
                    target="_blank"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>

            <div
              className="border-2 border-gray-500 p-8 rounded-lg shadow-xs"
              onSubmit={handleSubmit}
            >
              <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm text-start font-medium mb-2"
                  >
                    {" "}
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                    placeholder="yourname@gmail.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-start text-sm font-medium mb-2"
                  >
                    {" "}
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "px-6 py-2 rounded-full border  border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-[#f00739] to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left w-full flex items-center justify-center gap-2 cursor-pointer"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};
