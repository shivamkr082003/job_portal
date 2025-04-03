
import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="grid-background"></div>

      {/* Main content takes all available space */}
      <main className="flex-grow w-full max-w-screen-xl mx-auto px-4">
        <Header />
        <Outlet />
      </main>

      {/* Footer sticks to the bottom */}
      <footer className="p-10 text-center bg-gray-800">
        Made with 💗 by Shivam
      </footer>
    </div>
  );
};

export default AppLayout;

