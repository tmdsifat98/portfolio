import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaGithub,
  FaFacebookF,
  FaDownload,
  FaReact,
  FaNodeJs,
  FaLink,
} from "react-icons/fa";
import { SiJavascript, SiKotlin, SiMongodb } from "react-icons/si";
import { IoIosMail} from "react-icons/io";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Frontend Developer",
    "App Developer"
  ];

  // Role rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    {
      href: "https://linkedin.com/in/tmdsifat98",
      icon: FaLinkedinIn,
      label: "LinkedIn",
      color: "hover:text-blue-700",
      textColor: "text-blue-600",
    },
    {
      href: "https://github.com/tmdsifat98",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-gray-600",
      textColor: "text-gray-500",
    },
    {
      href: "https://facebook.com/Sifat.tarafder.5",
      icon: FaFacebookF,
      label: "Facebook",
      color: "hover:text-blue-700",
      textColor: "text-sky-600",
    },
    {
      href: "mailto:tmdsifat98@gmail.com",
      icon: IoIosMail,
      label: "Email",
      color: "hover:text-red-500",
      textColor: "text-rose-600",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-6 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100vh-4rem)] flex items-center">
          <motion.div
            className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center w-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">

              {/* Greeting */}
              <motion.div
                className="space-y-2 sm:space-y-4"
                variants={itemVariants}
              >
                <h1 className="text-lg sm:text-2xl md:text-3xl text-gray-500 font-light">
                  Hello, I'm
                </h1>

                <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#f00739] via-purple-600 to-blue-800 bg-clip-text text-transparent leading-tight">
                  Sifat Tarafder
                </h2>
              </motion.div>

              {/* Animated Role */}
              <motion.div
                className="flex items-center gap-2 text-base sm:text-xl md:text-2xl font-medium"
                variants={itemVariants}
              >
                I am a
                <motion.p
                  key={currentRole}
                  className="text-gradient"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                   {roles[currentRole]}
                </motion.p>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-sm sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
                variants={itemVariants}
              >
                I create stellar web experiences with modern technologies.
            Specializing in MERN stack development, I build interfaces that are
            both beautiful and functional.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="flex justify-center lg:justify-start items-center gap-3 sm:gap-4"
                variants={itemVariants}
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 ${social.color} ${social.textColor} rounded-xl transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <social.icon size={25} className="text-sm sm:text-lg" />
                  </motion.a>
                ))}
              </motion.div>

              {/* Action Buttons */}
              <div className="flex justify-center md:justify-start gap-4 pt-4 ">
                <a
                target="_blank"
                  href="https://drive.google.com/file/d/15LJNC-HHZB5q9yNDGM25R5mtCvkHFcER/view?usp=sharing"
                  
                  className="px-6 py-2 rounded-full border border-primary flex items-center justify-center gap-2 font-semibold transition-all duration-300 bg-gradient-to-r from-[#f00739] to-purple-600 bg-[length:100%_100%] hover:bg-[length:0%_100%] bg-no-repeat bg-left"
                >
                  Download Resume <FaDownload />
                </a>

                <a
                  href="#projects"
                  className="px-6 flex items-center gap-2 py-2 rounded-full border  border-primary font-semibold transition-all duration-300 bg-gradient-to-r from-[#f00739] to-purple-600 bg-[length:0%_100%] hover:bg-[length:100%_100%] bg-no-repeat bg-left"
                >
                  View Project <FaLink/>
                </a>
              </div>
            </div>

            {/* Right Content - Profile Image */}
            <div className="flex justify-center order-1 lg:order-2">
              <motion.div className="relative" variants={imageVariants}>
                {/* Rotating rings */}
                <motion.div
                  className="absolute inset-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-2 w-60 h-60 sm:w-76 sm:h-76 md:w-92 md:h-92 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 opacity-15"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Profile image */}
                <motion.div
                  className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full p-2 bg-white shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://i.ibb.co.com/CKz3NFk6/purple1.png"
                    alt="Sifat Tarafder"
                    className="w-full h-full object-cover rounded-full bg-gradient-to-r from-[#f00739] to-purple-600"
                  />

                  {/* Tech badges */}
                  <motion.div
                    className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 text-blue-400 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FaReact size={37}/> 
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left- text-green-600 px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <FaNodeJs size={37}/>
                  </motion.div>
                  <motion.div
                    className="absolute top-3 -left-3 sm:-left-9 text-green-600 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-semibold"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    <SiMongodb size={40}/>
                  </motion.div>
                  <motion.div
                    className="absolute bottom-3 -right-3 sm:-right-9 text-purple-600 px-2 py-1 sm:px-3 sm:py-2 rounded-full text-xs font-semibold"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                  >
                    <SiKotlin size={30}/>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
