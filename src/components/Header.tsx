
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, Package, Home, Phone, Sun, Moon, ChevronDown } from "lucide-react";
import { useTheme } from "next-themes";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  
  const tabs = [
    { id: "home", label: "Principal", icon: Home },
    { id: "about", label: "Sobre Nosotros", icon: Package },
  ];

  const businessModels = [
    { id: "importacion", label: "Importación" },
    { id: "mayoreo", label: "Comercialización e Importación" },
    { id: "proveedores", label: "Proveedores" },
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
          
          <nav className="hidden md:flex space-x-1 ml-auto mr-4">
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
            {/* Business Models Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={activeTab === "business" ? "secondary" : "ghost"}
                  className={`flex items-center space-x-2 ${
                    activeTab === "business" 
                      ? "text-secondary-foreground" 
                      : "text-primary-foreground hover:bg-white/20"
                  }`}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Modelos de Negocio</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="center" 
                className="w-48 bg-background border border-border shadow-lg z-50"
              >
                {businessModels.map((model) => (
                  <DropdownMenuItem
                    key={model.id}
                    onClick={() => onTabChange(`business-${model.id}`)}
                    className="cursor-pointer hover:bg-accent focus:bg-accent"
                  >
                    {model.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Call to Action Button */}
            <Button
              onClick={() => onTabChange("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 border-2 border-accent-foreground/20 shadow-lg ring-2 ring-accent/30 ring-offset-2 ring-offset-primary animate-pulse"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Solicitar Información</span>
            </Button>
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-primary-foreground" />
              <Switch
                checked={isDark}
                onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
                className="data-[state=checked]:bg-primary-foreground data-[state=unchecked]:bg-primary-foreground/30"
              />
              <Moon className="h-4 w-4 text-primary-foreground" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" className="text-primary-foreground">
                <Package className="h-6 w-6" />
              </Button>
            </div>
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
            {/* Mobile Business Models Button */}
            <Button
              variant={activeTab === "business" ? "secondary" : "ghost"}
              onClick={() => onTabChange("business")}
              className={`flex items-center space-x-2 ${
                activeTab === "business" 
                  ? "text-secondary-foreground" 
                  : "text-primary-foreground hover:bg-white/20"
              }`}
            >
              <ShoppingCart className="h-4 w-4" />
              <span className="text-sm">Modelos de Negocio</span>
            </Button>
            {/* Mobile Call to Action Button */}
            <Button
              onClick={() => onTabChange("contact")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 border border-accent-foreground/20 shadow-md col-span-2"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm font-semibold">Solicitar Información</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
