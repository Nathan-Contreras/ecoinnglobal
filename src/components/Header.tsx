import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Package, Home, Phone } from "lucide-react";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const tabs = [
    { id: "home", label: "Principal", icon: Home },
    { id: "about", label: "Sobre Nosotros", icon: Package },
    { id: "business", label: "Modelos de Negocio", icon: ShoppingCart },
    { id: "contact", label: "Solicitar Información", icon: Phone },
  ];

  return (
    <header className="bg-gradient-to-r from-primary to-secondary shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/356e712d-91e3-4364-b62a-8843ac219e02.png" 
              alt="EcoInn Global Logo" 
              className="h-10 w-auto bg-white rounded-md p-1"
            />
            <h1 className="text-2xl font-bold text-primary-foreground">
              EcoInn Global
            </h1>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "secondary" : "ghost"}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 ${
                    activeTab === tab.id 
                      ? "text-secondary-foreground" 
                      : "text-primary-foreground hover:bg-white/20"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </Button>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" className="text-primary-foreground">
              <Package className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile navigation */}
        <nav className="md:hidden pb-4">
          <div className="grid grid-cols-2 gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "secondary" : "ghost"}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 ${
                    activeTab === tab.id 
                      ? "text-secondary-foreground" 
                      : "text-primary-foreground hover:bg-white/20"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{tab.label}</span>
                </Button>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;