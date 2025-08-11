const Experience = () => {
  return (
    <section id="experience" className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide">
          My <span className="text-gradient">Experience</span>
        </h2>

        {/* Job Card */}
        <div className="border-l-4 border-indigo-500 pl-6 mb-10">
          <h3 className="text-2xl font-semibold">Software Developer</h3>
          <p className="font-medium">IT Scholar BD</p>
          <p className="text-sm mb-4">July 2025 – Present</p>
          <p className="leading-relaxed">
            Building and maintaining scalable web and mobile applications,
            developing REST APIs, collaborating with cross-functional teams,
            and ensuring clean, maintainable, and testable code delivery within
            agile workflows.
          </p>
        </div>

        {/* Example for Another Job */}
        <div className="border-l-4 border-indigo-500 pl-6">
          <h3 className="text-2xl font-semibold">Web Instructor</h3>
          <p className="font-medium">Code Point</p>
          <p className="text-sm mb-4">Jan 2024 – Jun 2025</p>
          <p className="leading-relaxed">
            Taught fundamental and advanced web development concepts to students
            in a non-profit setup, focusing on building strong problem-solving
            skills and hands-on project experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
