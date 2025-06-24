
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminPanel from "./components/AdminPanel";
import Index from "./pages/Index";
import Grants from "./pages/Grants";
import Team from "./pages/Team";
import Authentication from "./pages/Authentication";
import About from "./pages/About";
import TemplateGenerator from "./pages/TemplateGenerator";
import MOUCollaboration from "./pages/MOUCollaboration";
import LetterGenerator from "./pages/LetterGenerator";
import AdvancedDocumentGenerator from "./pages/AdvancedDocumentGenerator";
import TechSupportPortal from "./pages/TechSupportPortal";
import StampSignature from "./pages/StampSignature";
import Donation from "./pages/Donation";
import PolicyAgreement from "./pages/PolicyAgreement";
import LOC from "./pages/LOC";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <AdminPanel />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/grants" element={<Grants />} />
                <Route path="/team" element={<Team />} />
                <Route path="/authentication" element={<Authentication />} />
                <Route path="/about" element={<About />} />
                <Route path="/template-generator" element={<TemplateGenerator />} />
                <Route path="/mou-collaboration" element={<MOUCollaboration />} />
                <Route path="/letter-generator" element={<LetterGenerator />} />
                <Route path="/advanced-document-generator" element={<AdvancedDocumentGenerator />} />
                <Route path="/tech-support-portal" element={<TechSupportPortal />} />
                <Route path="/stamp-signature" element={<StampSignature />} />
                <Route path="/donation" element={<Donation />} />
                <Route path="/policy-agreement" element={<PolicyAgreement />} />
                <Route path="/loc" element={<LOC />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmelProvider>
);

export default App;
