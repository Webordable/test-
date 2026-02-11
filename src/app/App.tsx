import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Capabilities from "./components/Capabilities";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import WhyUs from "./components/WhyUs";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  return (
    <LanguageProvider>
      <main className="font-sans antialiased text-slate-900 bg-white selection:bg-[#F73B20] selection:text-white">
        <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        html {
            scroll-behavior: smooth;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <Capabilities />
      <Portfolio />
      <Process />
      <WhyUs />
      <CTA />
      <Footer />
      <LanguageSwitcher />
    </main>
    </LanguageProvider>
  );
};

export default App;
