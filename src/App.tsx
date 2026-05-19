import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";

import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/layout/FloatingWhatsApp";

import { TooltipProvider } from "./components/ui/tooltip";
import { Toaster } from "./components/ui/toaster";

import Home from "./pages/home";
import About from "./pages/about";
import Pengurus from "./pages/pengurus";
import Anggota from "./pages/anggota";
// import Kegiatan from "@/pages/kegiatan";
// import NotFound from "@/pages/not-found";

function App() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
    >
      <TooltipProvider>
        <BrowserRouter>
          <div className="flex min-h-screen flex-col">
            <Navbar />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tentang-kami" element={<About />} />
                <Route path="/pengurus" element={<Pengurus />} />
                <Route path="/anggota" element={<Anggota />} />
 {/*                <Route path="/kegiatan" element={<Kegiatan />} />
                <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </main>

            <Footer />
          </div>

          <FloatingWhatsApp />
        </BrowserRouter>

        <Toaster />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;