import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Package, Users, HandHeart, Truck, Globe, Shield, TrendingUp, CheckCircle } from "lucide-react";

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
    },
    {
      id: "aliados",
      title: "Aliados de Instalación",
      description: "Red de aliados confiables y verificados",
      icon: HandHeart,
      color: "from-purple-500 to-purple-600",
      features: [
        "Aliados pre-verificados",
        "Evaluación de calidad continua",
        "Conexión directa con fabricantes",
        "Negociación de precios especiales",
        "Garantía de cumplimiento"
      ],
      benefits: [
        "Confiabilidad garantizada",
        "Mejores precios del mercado",
        "Calidad certificada",
        "Relaciones a largo plazo"
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

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h2
          className="text-5xl md:text-6xl font-extrabold mb-4 font-inter bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent"
          style={{ lineHeight: "1.15" }}
        >
          Modelos de Negocio
        </h2>
      </section>

      {/* Business Models Tabs */}
      <section>
        <Tabs value={activeModel} onValueChange={(value) => onTabChange(`business-${value}`)} className="w-full">
          <TabsList className="flex w-full justify-center gap-2 bg-transparent">
            <TabsTrigger value="importacion" className="px-6 py-3 rounded-full font-semibold text-primary data-[state=active]:bg-primary data-[state=active]:text-white transition-colors">
              Importa con nosotros
            </TabsTrigger>
            <TabsTrigger value="mayoreo" className="px-6 py-3 rounded-full font-semibold text-primary data-[state=active]:bg-primary data-[state=active]:text-white transition-colors">
              Venta al Mayor
            </TabsTrigger>
            <TabsTrigger value="aliados" className="px-6 py-3 rounded-full font-semibold text-primary data-[state=active]:bg-primary data-[state=active]:text-white transition-colors">
              Aliados de Instalación
            </TabsTrigger>
          </TabsList>
          {businessModels.map((model) => (
            <TabsContent key={model.id} value={model.id} className="mt-8">
              <div className="max-w-3xl mx-auto">
                <ModelCard model={model} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Statistics */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Nuestros Resultados
          </h3>
          <p className="text-muted-foreground text-lg">
            Números que respaldan nuestra experiencia y confiabilidad
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-3">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-accent/30 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Nuestro Proceso
          </h3>
          <p className="text-muted-foreground text-lg">
            Un enfoque estructurado para garantizar el éxito de tu negocio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white font-bold text-xl mb-4">
              1
            </div>
            <h4 className="text-lg font-semibold mb-2">Consulta Inicial</h4>
            <p className="text-muted-foreground">
              Analizamos tus necesidades y objetivos comerciales para definir la mejor estrategia
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white font-bold text-xl mb-4">
              2
            </div>
            <h4 className="text-lg font-semibold mb-2">Desarrollo de Propuesta</h4>
            <p className="text-muted-foreground">
              Creamos una propuesta personalizada con términos, precios y cronogramas específicos
            </p>
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full text-white font-bold text-xl mb-4">
              3
            </div>
            <h4 className="text-lg font-semibold mb-2">Ejecución y Seguimiento</h4>
            <p className="text-muted-foreground">
              Implementamos la solución con seguimiento continuo y soporte dedicado
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          ¿Listo para hacer crecer tu negocio?
        </h3>
        <p className="text-xl mb-6">
          Contáctanos para una consulta personalizada y descubre cómo podemos ayudarte
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          onClick={() => onTabChange("contact")}
          className="text-lg px-8 py-3"
        >
          Solicitar Consulta Gratuita
        </Button>
      </section>
    </div>
  );
};

export default BusinessModelsSection;