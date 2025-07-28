import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Package, Truck, Shield, Star } from "lucide-react";
import heroImage from "@/assets/hero-catalog.jpg";
import toysImage from "@/assets/toys-category.jpg";
import homeImage from "@/assets/home-category.jpg";
import partsImage from "@/assets/parts-category.jpg";
import petsImage from "@/assets/pets-category.jpg";
import serviceImportImage from "@/assets/service-import.jpg";
import serviceWholesaleImage from "@/assets/service-wholesale.jpg";
import serviceSuppliersImage from "@/assets/service-suppliers.jpg";
import serviceConsultationImage from "@/assets/service-consultation.jpg";

interface HomeSectionProps {
  onTabChange: (tab: string) => void;
}

const HomeSection = ({ onTabChange }: HomeSectionProps) => {
  const categories = [
    {
      id: "toys",
      name: "Juguetes",
      description: "Juguetes educativos y de entretenimiento",
      image: toysImage,
      count: "150+ productos"
    },
    {
      id: "home",
      name: "Hogar",
      description: "Artículos para el hogar y decoración",
      image: homeImage,
      count: "200+ productos"
    },
    {
      id: "parts",
      name: "Repuestos",
      description: "Repuestos automotrices de calidad",
      image: partsImage,
      count: "300+ productos"
    },
    {
      id: "pets",
      name: "Mascotas",
      description: "Accesorios y productos para mascotas",
      image: petsImage,
      count: "100+ productos"
    }
  ];

  const services = [
    {
      id: "import",
      name: "Servicio de Importación",
      description: "Importamos productos directamente desde origen con los mejores precios",
      image: serviceImportImage,
      features: ["Gestión completa", "Mejores precios", "Calidad garantizada"]
    },
    {
      id: "wholesale",
      name: "Venta al Mayor",
      description: "Productos al por mayor para distribuidores y comerciantes",
      image: serviceWholesaleImage,
      features: ["Precios especiales", "Grandes volúmenes", "Flexibilidad"]
    },
    {
      id: "suppliers",
      name: "Proveedores Recomendados",
      description: "Red de proveedores confiables y verificados internacionalmente",
      image: serviceSuppliersImage,
      features: ["Proveedores verificados", "Calidad asegurada", "Confiabilidad"]
    },
    {
      id: "consultation",
      name: "Consultoría Personalizada",
      description: "Asesoramiento especializado para encontrar los productos ideales",
      image: serviceConsultationImage,
      features: ["Atención personalizada", "Experiencia", "Resultados garantizados"]
    }
  ];

  const features = [
    {
      icon: Package,
      title: "Productos de Calidad",
      description: "Seleccionamos solo los mejores productos de importación"
    },
    {
      icon: Truck,
      title: "Envío Rápido",
      description: "Entrega rápida y segura a todo el país"
    },
    {
      icon: Shield,
      title: "Garantía",
      description: "Todos nuestros productos incluyen garantía"
    },
    {
      icon: Star,
      title: "Atención Personalizada",
      description: "Asesoramiento especializado para cada cliente"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-96 rounded-2xl overflow-hidden">
        <img 
          src={heroImage} 
          alt="Catálogo de productos de importación" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Catálogo de Importación
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Los mejores productos de importación para tu hogar, negocio y familia
            </p>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onTabChange("business")}
              className="text-lg px-8 py-3"
            >
              Ver Modelos de Negocio
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Nuestras Categorías
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explora nuestra amplia gama de productos organizados por categorías
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem key={category.id} className="md:basis-1/2 lg:basis-1/4">
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer bg-gradient-to-b from-card to-accent/20 h-full">
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <img 
                        src={category.image} 
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
                        {category.count}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="mb-2 text-primary">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Services Carousel */}
      <section>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubre las diferentes formas en que podemos ayudarte con tus importaciones
          </p>
        </div>

        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {services.map((service) => (
              <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/2">
                <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer h-full overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-2xl font-bold mb-2">{service.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-4 w-full"
                      onClick={() => onTabChange("business")}
                    >
                      Más Información
                    </Button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      {/* Features Section */}
      <section className="bg-accent/30 rounded-2xl p-8">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            ¿Por qué elegirnos?
          </h3>
          <p className="text-muted-foreground text-lg">
            Razones que nos hacen tu mejor opción para productos de importación
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">
          ¿Listo para hacer tu pedido?
        </h3>
        <p className="text-xl mb-6">
          Contáctanos para obtener más información sobre nuestros productos
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          onClick={() => onTabChange("contact")}
          className="text-lg px-8 py-3"
        >
          Solicitar Información
        </Button>
      </section>
    </div>
  );
};

export default HomeSection;