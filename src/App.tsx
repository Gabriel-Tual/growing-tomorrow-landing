import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Emulate from "./pages/Emulate";
import Connect from "./pages/Connect";
import Do from "./pages/Do";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/emulate" element={<Emulate />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/do" element={<Do />} />
          {/* Placeholder routes for offers - to be built later */}
          <Route path="/growing-food" element={<NotFound />} />
          <Route path="/growing-connection" element={<NotFound />} />
          <Route path="/growing-landscape" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
