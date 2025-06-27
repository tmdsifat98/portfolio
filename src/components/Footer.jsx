import logo from '../../public/logo2.png';
export const Footer = () => {
  return (
    <footer className="w-full mt-20 bg-gradient-to-r from-[#44cf44]/20 to-transparent dark:from-[#44cf44]/10">
      <div className="container mx-auto px-4 py-10 flex flex-col items-center text-center">
        {/* Brand */}
        <div className='flex items-center'>
          <img src={logo} alt="logo" className='w-12' />
          <h2 className="text-2xl font-bold tracking-wide">
          <span className="text-gradient"> Sifat </span> Tarafder
        </h2>

        </div>
        {/* Tagline */}
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
          Passionate MERN Stack Developer crafting beautiful web experiences.
        </p>

        {/* Divider */}
        <div className="w-36 h-[2px] bg-primary mt-4 mb-2 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          © {new Date().getFullYear()} Sifat Tarafder. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
