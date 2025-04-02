import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-10 sm:gap-20 py-10 sm:py-20">
      <section className="text-center">
        <h1 className="flex flex-col items-center justify-center gradient-title text-4xl font-extrabold sm:text-6xl lg:text-8xl tracking-tighter py-4">
          Find Your Dream Job{" "}
          <span>and get{" "}<img src="/logo.png" alt="Hired Logo" 
          className="h-14 sm:h-24 lg:h-32"/></span>
        </h1>
        <p className="text-gray-300 sm:mt-4 text-xs sm:text-xl"> 
          Explore thousands of jobs listings or find the perfect candidate
        </p>
      </section>
      <div className="flex gap-6 justify-center">
        <Link to="/jobs"> 
         <Button variant="blue" size="xl">Find Jobs</Button>
        </Link>
        <Link to="/post-job">
         <Button variant="destructive" size="xl">Post a Job</Button>
        </Link>
      </div>

    </main>
  )
};

export default LandingPage; 

