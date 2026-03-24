import React from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Pages
import HomePage from "@pages/HomePage";
import PortfolioPage from "@pages/PortfolioPage";
import AboutPage from "@pages/AboutPage";
import ContactPage from "@pages/ContactPage";

// Layout Components
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";
import ChatWidget from "@components/common/ChatWidget/ChatWidget";
import SEO from "@components/common/SEO/SEO";

// Styles
import "./index.css";

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <main className="main-content">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* fallback for unknown routes to prevent blank pages */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </AnimatePresence>
  );
}

function App() {
  const seoConfig = {
    title: "Eternal Moments Wedding Photography | Capture Your Love Story",
    description:
      "Professional wedding photography capturing authentic, romantic moments. Specializing in elegant, timeless wedding photos.",
    keywords:
      "wedding photographer, wedding photography, engagement photos, bridal portraits",
    ogImage: "https://eternalmoments.com/og-image.jpg",
    url: "https://eternalmoments.com",
  };

  return (
    <HelmetProvider>
      <SEO {...seoConfig} />
      <Router>
        <div className="app">
          <Header />
          <AppRoutes />
          <Footer />
          <ChatWidget />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
