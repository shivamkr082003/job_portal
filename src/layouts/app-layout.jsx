import Header from "@/components/header";
import { Outlet } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10 grid-background"></div>

      <main className="flex-grow container mx-auto px-4">
        <Header />
        <Outlet />
      </main>
   
    <footer className="mt-20 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-10 rounded-t-3xl shadow-inner">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center text-sm">

        {/* Left - Branding + Tagline */}
        <div className="md:justify-start justify-center flex flex-col md:items-start items-center mb-6 md:mb-0">
          <h2 className="text-lg font-semibold">Job Port</h2>
          <p className="text-gray-400 mt-1">
            Helping you land your dream job, beautifully.
          </p>
        </div>

        {/* Center - Social Icons */}
        <div className="flex justify-center gap-6 text-2xl">
          <a
            href="https://github.com/shivamkr082003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/shivam-kumar-138924288"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="md:justify-end justify-center flex flex-col md:items-end items-center text-gray-400">
          <p>&copy; 2025 Job Port. All rights reserved.</p>
          <a href="#" className="hover:text-white transition mt-1">
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>


  

  
  


    </div>
  );
};

export default AppLayout;


