
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import NewsletterSignup from "@/components/NewsletterSignup";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

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
        <div className="bg-gradient-finance">
          <SubscriptionPlans />
        </div>
        <div className="bg-white">
          <NewsletterSignup />
        </div>
        <div className="bg-gradient-finance">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
