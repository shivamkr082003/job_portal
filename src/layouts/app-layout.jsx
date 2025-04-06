import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="absolute inset-0 -z-10 grid-background"></div>

      <main className="flex-grow container mx-auto px-4">
        <Header />
        <Outlet />
      </main>

      <footer className="mt-8 p-6 text-center bg-gray-800 text-white">
        Made with 💗 by Shivam
      </footer>
    </div>
  );
};

export default AppLayout;


