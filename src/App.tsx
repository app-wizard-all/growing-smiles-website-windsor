
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Dentist from "./pages/Dentist";
import ReferralPage from "./pages/ReferralPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Helmet>
        <title>Growing Smiles Children's Dentistry - Windsor Pediatric Dental Care</title>
        <meta name="description" content="Gentle, friendly pediatric dental care in Windsor. Book an appointment at Growing Smiles Children's Dentistry today." />
        <meta name="keywords" content="pediatric dentist, Windsor dentist, children's dentistry, dental care, Growing Smiles, kids dentist" />
        <meta name="author" content="Growing Smiles Children's Dentistry" />
        <meta property="og:title" content="Growing Smiles Children's Dentistry - Windsor Pediatric Dental Care" />
        <meta property="og:description" content="Gentle, friendly pediatric dental care in Windsor. Book an appointment at Growing Smiles Children's Dentistry today." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://thegrowingsmiles.ca" />
      </Helmet>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dentist" element={<Dentist />} />
          <Route path="/refer" element={<ReferralPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
