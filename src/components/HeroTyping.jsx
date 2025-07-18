import React from "react";
import { Typewriter } from "react-simple-typewriter";

const HeroTyping = () => {
  return (
    <h1 className="text-2xl font-bold text-center mt-7">
      <span>I am a </span>
      <span className="text-gradient">
        <Typewriter
          words={['Web Developer.', 'React Developer.', 'MERN Stack Developer.', 'Full Stack Developer.']}
          loop={0}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </h1>
  );
};

export default HeroTyping;
