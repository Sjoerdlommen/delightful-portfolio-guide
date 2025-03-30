
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import NewsletterSignup from "@/components/NewsletterSignup";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-10 border-y border-gray-100">
          <HowItWorks />
        </div>
        <div className="py-10">
          <SubscriptionPlans />
        </div>
        <div className="py-10 border-y border-gray-100">
          <NewsletterSignup />
        </div>
        <div className="py-10">
          <Testimonials />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
