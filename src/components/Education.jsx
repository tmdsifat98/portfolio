import React from 'react';
import { Fade } from 'react-awesome-reveal';

export const Education = () => {
      const educationData = [
    {
      degree: "BSc in Population Science and Human Resource Development",
      institution: "University of Rajshahi",
      year: "2023 - Current",
      details:
        "Focused on Research, Web Development, and Data Structures. Passionate about collaborating on projects that drive positive change and technological advancement."
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Government Victoria College Narail",
      year: "2020 - 2022",
      details:
        "Major in Science. Active member of the ICT Club and achieved GPA 5.00."
    },
    {
      degree: "Secondary School Certificate",
      institution: "Tularampur Secondary School",
      year: "2015 - 2020",
      details:
        "Major in Science. Participated in Math Olympiads and Science Fairs."
    }
  ];

  return (
   <Fade>
    <section id="education" className="w-full md:w-11/12 lg:w-1/2 mx-auto py-16 px-2">
      <h2 className="text-3xl font-bold mb-12 text-center">
        🎓 My <span className='text-gradient'>Education</span>
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-2 top-1 h-full w-1 bg-gradient-to-b from-primary to-secondary rounded"></div>

        <div className="space-y-10 pl-12">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="relative bg-background border border-border rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Dot */}
              <div className="absolute -left-9 top-0 w-6 h-6 text-2xl">🎓</div>
              
              <h3 className="text-xl font-semibold text-foreground">
                {edu.degree}
              </h3>
              <p className="text-foreground/80">{edu.institution}</p>
              <span className="text-sm text-foreground/60 italic">{edu.year}</span>
              <p className="mt-3 text-foreground/70">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   </Fade>
  );
}