import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, Package, Home, Phone, Sun, Moon, ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [mobileOpen, setMobileOpen] = useState(false);

  const [businessHover, setBusinessHover] = useState(false);

  const tabs = [
    { id: "home", label: "Principal", icon: Home },
    { id: "about", label: "Sobre Nosotros", icon: Package },
  ];

  const businessModels = [
    { id: "mayoreo", label: "Importación y Comercialización" },
    { id: "importacion", label: "Servicio de Importación" },    
  ];

  const hideTimer = useRef<number | null>(null);

  const showBusinessMenu = () => {
    if (hideTimer.current) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
    setBusinessHover(true);
  };

  const hideBusinessMenuWithDelay = (delay = 600) => {
    if (hideTimer.current) window.clearTimeout(hideTimer.current);
    hideTimer.current = window.setTimeout(() => {
      setBusinessHover(false);
      hideTimer.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (hideTimer.current) window.clearTimeout(hideTimer.current);
    };
  }, []);

  // helper: navega usando onTabChange y fuerza scroll arriba
  const navigateAndScrollTop = (tabId: string) => {
    onTabChange(tabId);
    // pequeño timeout para asegurar que cualquier render basado en estado ocurra antes del scroll
    setTimeout(() => {
      try {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      } catch (e) {
        /* noop */
      }
    }, 8);
  };

  return (
    <>
      <header className="bg-white shadow-none border-b-0 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center" style={{ marginLeft: "1.5rem" }}>
              <img
                src="/ecoinnglobal/uploads/logo_base.png"
                alt="EcoInn Global Logo"
                className="h-28 w-auto md:h-28 sm:h-24 object-contain"
                style={{ minWidth: "100px", objectPosition: "top" }}
              />
            </div>
            
            <nav className="hidden md:flex space-x-1 ml-auto mr-4 items-center">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "secondary" : "ghost"}
                    onClick={() => navigateAndScrollTop(tab.id)}
                    className={`flex items-center space-x-2 ${
                      activeTab === tab.id 
                        ? "text-secondary-foreground" 
                        : "text-gray-800 dark:text-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </Button>
                );
              })}

              {/* Desktop: mostrar menú de modelos al hacer hover */}
              <div
                className="relative"
                onMouseEnter={showBusinessMenu}
                onMouseLeave={() => hideBusinessMenuWithDelay(600)}
                onFocus={showBusinessMenu}
                onBlur={() => hideBusinessMenuWithDelay(300)}
              >
                <Button
                  variant={activeTab.startsWith("business") ? "secondary" : "ghost"}
                  className={`flex items-center space-x-2 ${
                    activeTab.startsWith("business")
                      ? "text-secondary-foreground"
                      : "text-gray-800 dark:text-gray-200 hover:bg-gray-100"
                  }`}
                  aria-haspopup="menu"
                  aria-expanded={businessHover}
                >
                  <ShoppingCart className="h-4 w-4" />
                  <span>Modelos de Negocio</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>

                {businessHover && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-background border border-border shadow-lg z-50 rounded-md overflow-hidden"
                    onMouseEnter={showBusinessMenu}
                    onMouseLeave={() => hideBusinessMenuWithDelay(400)}
                  >
                    {businessModels.map((model) => (
                      <button
                        key={model.id}
                        onClick={() => navigateAndScrollTop(`business-${model.id}`)}
                        className="w-full text-center px-4 py-3 hover:bg-accent focus:bg-accent"
                      >
                        {model.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant={activeTab === "contact" ? "default" : "outline"}
                onClick={() => navigateAndScrollTop("contact")}
                className={`flex items-center space-x-2 ${
                  activeTab === "contact" 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span>Solicitar Información</span>
              </Button>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Cambiar tema"
                  onClick={() => setTheme(isDark ? "light" : "dark")}
                  className="text-gray-800 dark:text-gray-200 hover:bg-white/20"
                >
                  <span
                    className="inline-block transition-all duration-500 ease-in-out"
                    style={{
                      transform: isDark
                        ? "rotate(180deg) scale(1.2)"
                        : "rotate(0deg) scale(1.2)",
                    }}
                  >
                    {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
                  </span>
                </Button>
              </div>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  className="text-gray-800 dark:text-gray-200"
                  onClick={() => setMobileOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-2 bg-gradient-to-r from-blue-500 via-primary to-green-500" />
      </header>

      {/* Drawer lateral móvil */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex">
          <aside className="ml-auto w-64 h-full bg-white dark:bg-gray-900 flex flex-col p-6 shadow-xl animate-slide-in">
            <div className="flex justify-end mb-6">
              <Button variant="ghost" onClick={() => setMobileOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <div className="flex flex-col gap-2 flex-grow">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "secondary" : "ghost"}
                    onClick={() => {
                      navigateAndScrollTop(tab.id);
                      setMobileOpen(false);
                    }}
                    className={`justify-start flex items-center space-x-2 w-full ${
                      activeTab === tab.id 
                        ? "text-secondary-foreground" 
                        : "text-gray-800 dark:text-gray-200 hover:bg-primary/10"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-base">{tab.label}</span>
                  </Button>
                );
              })}
              {/* Business Models (mobile keeps DropdownMenu) */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={activeTab === "business" ? "secondary" : "ghost"}
                    className={`justify-start flex items-center space-x-2 w-full py-3 text-base ${
                      activeTab === "business" 
                        ? "text-secondary-foreground" 
                        : "text-gray-800 dark:text-gray-200 hover:bg-primary/10"
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="text-base">Modelos de Negocio</span>
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="start" 
                  className="w-56 bg-background border border-border shadow-lg z-50"
                >
                  {businessModels.map((model) => (
                    <DropdownMenuItem
                      key={model.id}
                      onClick={() => {
                        navigateAndScrollTop(`business-${model.id}`);
                        setMobileOpen(false);
                      }}
                      className="cursor-pointer hover:bg-accent focus:bg-accent py-3 text-base"
                    >
                      {model.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                variant={activeTab === "contact" ? "default" : "outline"}
                onClick={() => {
                  navigateAndScrollTop("contact");
                  setMobileOpen(false);
                }}
                className={`justify-start flex items-center space-x-2 w-full ${
                  activeTab === "contact" 
                    ? "bg-blue-600 text-white hover:bg-blue-700" 
                    : "bg-blue-600 text-white hover:bg-blue-700 border-blue-600"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="text-base">Solicitar Información</span>
              </Button>
            </div>
            <div className="mt-auto pt-6 flex items-center space-x-2 justify-center border-t border-border">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Cambiar tema"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="text-gray-800 dark:text-gray-200 hover:bg-white/20"
              >
                {isDark ? <Moon className="h-6 w-6" /> : <Sun className="h-6 w-6" />}
              </Button>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};

export default Header;
