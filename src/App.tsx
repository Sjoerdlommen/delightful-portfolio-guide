
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PortfolioPage from "./pages/PortfolioPage";
import AnalysesPage from "./pages/AnalysesPage";
import UpdatesPage from "./pages/UpdatesPage";
import KnowledgePortalPage from "./pages/KnowledgePortalPage";
import LoginPage from "./pages/LoginPage";
import SubscribePage from "./pages/SubscribePage";
import PaymentPage from "./pages/PaymentPage";
import ContactPage from "./pages/ContactPage";
import FAQPage from "./pages/FAQPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import MededelingenPage from "./pages/MededelingenPage";
import NotFound from "./pages/NotFound";

// Create a new client with stable options
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/analyses" element={<AnalysesPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/knowledge-portal" element={<KnowledgePortalPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/terms" element={<DisclaimerPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
          <Route path="/mededelingen" element={<MededelingenPage />} />
          <Route path="/plans" element={<SubscribePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
