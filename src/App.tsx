
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorksPage from "./pages/HowItWorksPage";
import PortfolioPage from "./pages/PortfolioPage";
import AnalysesPage from "./pages/AnalysesPage";
import UpdatesPage from "./pages/UpdatesPage";
import LoginPage from "./pages/LoginPage";
import SubscribePage from "./pages/SubscribePage";
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
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/analyses" element={<AnalysesPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/plans" element={<SubscribePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/subscribe" element={<SubscribePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
        <Sonner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
