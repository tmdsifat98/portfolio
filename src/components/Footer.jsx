export const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-gradient-to-r from-[#44cf44]/20 to-transparent dark:from-[#44cf44]/10">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center text-center">
        {/* Brand */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 tracking-wide">
          <span className="text-primary"> Sifat </span> Tarafder
        </h2>

        {/* Tagline */}
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
          Passionate MERN Stack Developer crafting beautiful web experiences.
        </p>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-primary mt-4 mb-2 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          © {new Date().getFullYear()} Sifat Tarafder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
