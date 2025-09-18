import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services"; 
import Solutions from "./pages/Solutions";
import CaseStudies from "./pages/CaseStudies";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AIDataServices from "./pages/services/AIDataServices";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/ai-data" element={<AIDataServices />} />
            {/* Placeholder routes for other service pages */}
            <Route path="/services/edtech" element={<AIDataServices />} />
            <Route path="/services/content" element={<AIDataServices />} />
            <Route path="/services/marketing" element={<AIDataServices />} />
            <Route path="/services/social-media" element={<AIDataServices />} />
            <Route path="/services/technology" element={<AIDataServices />} />
            <Route path="/services/talent" element={<AIDataServices />} />
            {/* Placeholder routes for other pages */}
            <Route path="/careers" element={<About />} />
            <Route path="/partnership" element={<Contact />} />
            <Route path="/consultation" element={<Contact />} />
            <Route path="/support" element={<Contact />} />
            <Route path="/docs" element={<Blog />} />
            <Route path="/api" element={<Blog />} />
            <Route path="/privacy" element={<About />} />
            <Route path="/terms" element={<About />} />
            <Route path="/cookies" element={<About />} />
            <Route path="/gdpr" element={<About />} />
            <Route path="/security" element={<About />} />
            <Route path="/sitemap" element={<Services />} />
            <Route path="/accessibility" element={<About />} />
            <Route path="/pricing" element={<Solutions />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
