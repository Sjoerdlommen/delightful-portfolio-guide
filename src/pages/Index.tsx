
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import NewsletterSignup from "@/components/NewsletterSignup";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-10 border-y border-gray-100 bg-white">
          <HowItWorks />
        </div>
        <div className="py-10 bg-gradient-finance">
          <SubscriptionPlans />
        </div>
        <div className="py-10 border-y border-gray-100 bg-white">
          <NewsletterSignup />
        </div>
        <div className="py-10 bg-gradient-finance">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
