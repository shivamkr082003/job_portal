import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import companies from "../data/companies.json";
import faqs from "../data/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <main className="flex flex-col gap-24 px-4 sm:px-10 py-10 sm:py-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="gradient-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
          Find Your Dream Job
        </h1>
        <div className="mt-4 flex justify-center items-center gap-3 sm:gap-6">
          <span className="text-xl sm:text-2xl text-gray-200">and get</span>
          <img src="/logo.png" className="h-14 sm:h-24 lg:h-28" alt="Hirrd Logo" />
        </div>
        <p className="text-gray-400 mt-4 sm:text-lg">
          Explore thousands of job listings or find the perfect candidate
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/jobs">
            <Button variant="blue" size="lg" className="w-full sm:w-auto">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button variant="destructive" size="lg" className="w-full sm:w-auto">
              Post a Job
            </Button>
          </Link>
        </div>
      </section>

      {/* Company Logos Carousel */}
      <section className="w-full">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="relative"
        >
          <CarouselContent className="flex gap-8 items-center">
            {companies.map(({ name, id, path }) => (
              <CarouselItem key={id} className="basis-1/3 sm:basis-1/6 flex justify-center">
                <img src={path} alt={name} className="h-10 sm:h-14 object-contain grayscale hover:grayscale-0 transition duration-300" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      {/* Banner Image */}
      <section className="w-full">
        <img src="/banner.jpeg" className="w-full rounded-xl shadow-md" alt="Job Portal Banner" />
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">For Job Seekers</CardTitle>
          </CardHeader>
          <CardContent>
            Search and apply for jobs, track applications, and grow your career.
          </CardContent>
        </Card>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">For Employers</CardTitle>
          </CardHeader>
          <CardContent>
            Post jobs, manage applications, and hire top candidates efficiently.
          </CardContent>
        </Card>
      </section>

      {/* FAQs Section */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
        <Accordion type="multiple" className="bg-muted/20 rounded-xl p-4 sm:p-6">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
};

export default LandingPage;


