import { useState } from "react";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import BusinessModelsSection from "@/components/BusinessModelsSection";
import ContactSection from "@/components/ContactSection";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import FloatingSocials from "@/components/FloatingSocials";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [activeBusinessModel, setActiveBusinessModel] = useState("importacion");

  const handleTabChange = (tab: string) => {
    if (tab.startsWith("business-")) {
      const model = tab.replace("business-", "");
      setActiveTab("business");
      setActiveBusinessModel(model);
    } else {
      setActiveTab(tab);
    }
  };

  const renderActiveSection = () => {
    switch (activeTab) {
      case "home":
        return <HomeSection onTabChange={handleTabChange} />;
      case "about":
        return <AboutSection />;
      case "business":
        return <BusinessModelsSection onTabChange={handleTabChange} activeModel={activeBusinessModel} />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection onTabChange={handleTabChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="container mx-auto px-4 py-8">
        {renderActiveSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-secondary mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">EcoInn Global</h3>
            <p className="mb-2">
              Innovación, Calidad y Sostenibilidad
            </p>
            {/* Redes sociales */}
            <div className="flex justify-center space-x-6 mb-4">
              <a
                href="https://wa.me/584127917318"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="hover:text-green-400 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="https://instagram.com/ecoinnglobal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-pink-400 transition-colors"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://tiktok.com/@ecoinnglobalvzla"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-blue-300 transition-colors"
              >
                <FaTiktok size={20} />
              </a>
              <a
                href="https://linkedin.com/company/ecoinn-global"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-blue-300 transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            <div className="flex justify-center space-x-6 text-sm">
              <span>ventas@ecoinnglobal.com</span>
              <span>•</span>
              <span>+58 (212) 258-7155</span>
              <span>•</span>
              <span>C.C. Macaracuay Plaza, Nivel C2, Local 3-E</span>
            </div>
            <p className="text-xs mt-4 opacity-80">
              © 2025 EcoInn Global. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
      {/* Floating social button */}
      <FloatingSocials />
    </div>
  );
};

export default Index;