import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Users, Truck, Globe, Shield, TrendingUp, CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

interface BusinessModelsSectionProps {
  onTabChange: (tab: string) => void;
  activeModel?: string;
}

const BusinessModelsSection = ({ onTabChange, activeModel = "importacion" }: BusinessModelsSectionProps) => {
  const businessModels = [
    {
      id: "importacion",
      title: "Importa con nosotros",
      description: "Gestionamos todo el proceso de importación por ti",
      icon: Package,
      color: "from-blue-500 to-blue-600",
      features: [
        "Gestión completa de documentación",
        "Negociación directa con fabricantes",
        "Control de calidad garantizado",
        "Seguimiento en tiempo real",
        "Asesoría legal y aduanera"
      ],
      benefits: [
        "Ahorro de hasta 40% en costos",
        "Productos certificados",
        "Entrega garantizada",
        "Soporte 24/7"
      ]
    },
    {
      id: "mayoreo",
      title: "Venta al Mayor de Productos",
      description: "Precios especiales para compras en volumen",
      icon: Users,
      color: "from-green-500 to-green-600",
      features: [
        "Precios preferenciales por volumen",
        "Catálogo exclusivo mayorista",
        "Términos de pago flexibles",
        "Envío gratuito en pedidos grandes",
        "Asesor comercial dedicado"
      ],
      benefits: [
        "Márgenes de ganancia optimizados",
        "Inventario garantizado",
        "Soporte comercial especializado",
        "Descuentos progresivos"
      ]
    }
  ];

  const stats = [
    { value: "500+", label: "Clientes Satisfechos", icon: Users },
    { value: "50+", label: "Países de Origen", icon: Globe },
    { value: "99%", label: "Entregas Exitosas", icon: Truck },
    { value: "15+", label: "Años de Experiencia", icon: Shield }
  ];

  const ModelCard = ({ model }: { model: typeof businessModels[0] }) => {
    const Icon = model.icon;
    return (
      <div className="flex flex-col gap-6 items-start bg-transparent p-0">
        <div className="flex items-center gap-4">
          <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${model.color}`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-1">{model.title}</h2>
            <p className="text-base text-muted-foreground">{model.description}</p>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center">
            <TrendingUp className="h-4 w-4 mr-2 text-primary" />
            Características Principales
          </h4>
          <ul className="space-y-2">
            {model.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button 
          className="w-full mt-4"
          onClick={() => onTabChange("contact")}
          variant="secondary"
          size="lg"
        >
          Solicitar Información
        </Button>
      </div>
    );
  };

  // --- Nueva lógica de animación entre tabs ---
  const [active, setActive] = useState<string>(activeModel);
  const [isFading, setIsFading] = useState(false);
  const [pending, setPending] = useState<string | null>(null);

  // Manejo de cambio desde los triggers (intercepta para animar)
  const handleTabChange = (value: string) => {
    if (value === active) return;
    setIsFading(true);
    setPending(value);
    window.setTimeout(() => {
      setActive(value);
      setIsFading(false);
      setPending(null);
      onTabChange(`business-${value}`);
    }, 260); // duración de la animación (ms)
  };

  // Si el prop externo cambia, animar igualmente
  useEffect(() => {
    if (activeModel !== active) {
      setIsFading(true);
      setPending(activeModel);
      const t = window.setTimeout(() => {
        setActive(activeModel);
        setIsFading(false);
        setPending(null);
      }, 260);
      return () => clearTimeout(t);
    }
  }, [activeModel, active]);

  return (
    <div className="space-y-12">

      <section className="text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          style={{ lineHeight: "1.15" }}
        >
          Modelos de Negocio
        </h2>
      </section>

      {/* Business Models Tabs - con animación al cambiar */}
      <section>
        <Tabs value={active} onValueChange={handleTabChange} className="w-full">
          <TabsList className="flex w-full justify-center gap-2 bg-transparent">
            <TabsTrigger value="importacion" className="px-6 py-3 rounded-full font-semibold text-primary data-[state=active]:bg-primary data-[state=active]:text-white transition-colors">
              Servicio de Importación
            </TabsTrigger>
            <TabsTrigger value="mayoreo" className="px-6 py-3 rounded-full font-semibold text-primary data-[state=active]:bg-primary data-[state=active]:text-white transition-colors">
              Venta al Mayor
            </TabsTrigger>
          </TabsList>

          {businessModels.map((model) => (
            <TabsContent key={model.id} value={model.id} className="mt-8">
              {/* Wrapper animado: fade + slight translate */}
              <div
                className={`transition-all duration-260 ease-out ${isFading && active === model.id ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"}`}
                style={{ willChange: "opacity, transform" }}
              >
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  {/* Left: texto detallado */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-3">{model.title}</h3>
                    <p className="text-muted-foreground mb-4" style={{ textAlign: "justify" }}>{model.description}</p>

                    <h4 className="font-semibold text-foreground mb-2 flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2 text-primary" />
                      Características Principales
                    </h4>
                    <ul className="space-y-2 mb-4">
                      {model.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <h4 className="font-semibold text-foreground mb-2">Beneficios</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground mb-4">
                      {model.benefits.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>

                    <Button className="mt-2" onClick={() => onTabChange("contact")} variant="secondary">Solicitar Información</Button>
                  </div>

                  {/* Right: galería / imágenes reales (dos columnas visuales) */}
                  <div className="grid grid-cols-2 gap-4">
                    {/* placeholders de imagen; reemplazar por imágenes reales */}
                    <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100">
                      <img src="/assets/business-1.jpg" alt="img1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100">
                      <img src="/assets/business-2.jpg" alt="img2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100">
                      <img src="/assets/business-3.jpg" alt="img3" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-40 rounded-lg overflow-hidden bg-gray-100">
                      <img src="/assets/business-4.jpg" alt="img4" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* NOTE: Se eliminaron 'Nuestros Resultados' y 'Proceso' según solicitud */}
      {/* CTA final (mantener una llamada a la acción) */}
      <section className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
        <h3 className="text-2xl font-bold mb-4">¿Listo para implementar un modelo?</h3>
        <p className="text-muted-foreground mb-6">Contáctanos para diseñar la solución a la medida de tu negocio.</p>
        <Button onClick={() => onTabChange("contact")} variant="secondary">Solicitar Consulta</Button>
      </section>
    </div>
  );
};

export default BusinessModelsSection;