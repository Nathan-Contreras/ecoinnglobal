import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Package, Truck, Shield, Star, Download } from "lucide-react";
import { Link } from "react-router-dom";
import Autoplay from "embla-carousel-autoplay";
import heroImage from "@/assets/hero-catalog.jpg";
import importBusinessImage from "@/assets/import-business.jpg";
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
      name: "Comercialización e Importación",
      description: "Servicios completos de comercialización e importación para tu negocio",
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
      <section className="relative rounded-2xl overflow-hidden bg-card border">
        {/* Background Logo Watermark */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none z-0">
          <img 
            src="/lovable-uploads/1cf72272-446d-47a1-9934-5b191c36b54b.png" 
            alt="EcoInn Global Background Logo" 
            className="w-96 h-auto"
          />
        </div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-0 min-h-[500px]">
          {/* Content Side */}
          <div className="flex flex-col justify-center p-8 lg:p-12 space-y-6">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Transformamos Tu Negocio con Importación Inteligente
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Ofrecemos soluciones completas de importación y comercialización que incluyen gestión de proveedores internacionales, 
                consultoría especializada, y servicios de logística integral. Desde la selección de productos hasta la entrega en tu negocio, 
                te acompañamos en cada paso para maximizar tu rentabilidad.
              </p>
              <Button 
                size="lg" 
                onClick={() => onTabChange("business")}
                className="text-lg px-8 py-4 font-semibold"
              >
                Descubre Nuestros Modelos de Negocio
              </Button>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative h-64 lg:h-auto">
            <img 
              src={importBusinessImage} 
              alt="Servicios profesionales de importación y comercialización internacional" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/10"></div>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/catalog/${category.id}`}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg bg-gradient-to-b from-card to-accent/20 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-secondary text-secondary-foreground">
                    {category.count}
                  </Badge>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-primary mb-1">{category.name}</h4>
                  <p className="text-muted-foreground text-sm">{category.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Carousel */}
      <section>
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary mb-6">
            <Package className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nuestros Servicios
          </h3>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
            Descubre las diferentes formas en que podemos transformar tu negocio con nuestras soluciones integrales
          </p>
        </div>

        <Carousel 
          className="w-full max-w-7xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {services.map((service, index) => (
              <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="group relative">
                  <Card className="group-hover:shadow-[var(--shadow-modern)] transition-all duration-500 cursor-pointer h-full overflow-hidden border-0 bg-gradient-to-br from-card to-accent/10 backdrop-blur-sm animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                    <div className="relative h-72 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20" />
                      <div className="absolute bottom-6 left-6 right-6 text-white z-30">
                        <h4 className="text-2xl font-bold mb-3 group-hover:text-primary-foreground transition-colors duration-300">{service.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature, idx) => (
                            <Badge key={idx} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-all duration-300">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6 relative">
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                      <CardDescription className="text-base leading-relaxed mb-6 text-muted-foreground">
                        {service.description}
                      </CardDescription>
                      <Button 
                        className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                        onClick={() => onTabChange("business")}
                      >
                        <span className="mr-2">Descubrir más</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-0 shadow-lg" />
          <CarouselNext className="right-2 bg-white/90 hover:bg-white border-0 shadow-lg" />
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

      {/* Download Catalog Section */}
      <section className="bg-card border rounded-2xl p-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Download className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Descarga Nuestro Catálogo Completo
          </h3>
          <p className="text-muted-foreground text-lg mb-8">
            Accede a toda nuestra gama de productos con precios, especificaciones y detalles técnicos. 
            Ideal para planificar tu próxima importación.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3">
              <Download className="mr-2 h-5 w-5" />
              Descargar Catálogo PDF
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onTabChange("contact")}
              className="text-lg px-8 py-3"
            >
              Solicitar Catálogo Físico
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Archivo PDF • 15.2 MB • Actualizado mensualmente
          </p>
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