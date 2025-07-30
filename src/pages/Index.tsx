import { useState } from "react";
import Header from "@/components/Header";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import BusinessModelsSection from "@/components/BusinessModelsSection";
import ContactSection from "@/components/ContactSection";

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
            <p className="mb-4">
              Tu socio confiable para productos de importación de calidad
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span>ventas@ecoinn-global.com</span>
              <span>•</span>
              <span>+1 (555) 123-4567</span>
              <span>•</span>
              <span>Av. Principal 123, Ciudad</span>
            </div>
            <p className="text-xs mt-4 opacity-80">
              © 2024 EcoInn Global. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;