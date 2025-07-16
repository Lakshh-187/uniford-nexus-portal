
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
import Office from "./pages/Office";
import UNSIP from "./pages/UNSIP";
import UIS1 from "./pages/UIS1";
import UIS2 from "./pages/UIS2";
import UIS3 from "./pages/UIS3";
import InvoiceGenerator from "./pages/InvoiceGenerator";
import Frontliner from "./pages/Frontliner";
import Blogs from "./pages/Blogs";
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
                <Route path="/office" element={<Office />} />
                <Route path="/unsip" element={<UNSIP />} />
                <Route path="/uis-1" element={<UIS1 />} />
                <Route path="/uis-2" element={<UIS2 />} />
                <Route path="/uis-3" element={<UIS3 />} />
                <Route path="/invoice-generator" element={<InvoiceGenerator />} />
                <Route path="/frontliner" element={<Frontliner />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
