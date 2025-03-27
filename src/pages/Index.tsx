
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import SubscriptionPlans from "@/components/SubscriptionPlans";
import PortfolioPreview from "@/components/PortfolioPreview";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <SubscriptionPlans />
        <PortfolioPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
