
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import NewsletterSignup from "@/components/NewsletterSignup";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-white via-finance-gray/30 to-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <SubscriptionPlans />
        <NewsletterSignup />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
