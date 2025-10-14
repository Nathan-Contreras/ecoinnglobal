import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Package, Truck, CircleDollarSign, Star, Download } from "lucide-react";
import { Link } from "react-router-dom";
import importBusinessImage from "@/assets/import-business.jpg";
import toysImage from "@/assets/toys-category.jpg";
import homeImage from "@/assets/home-category.jpg";
import partsImage from "@/assets/parts-category.jpg";
import petsImage from "@/assets/pets-category.jpg";
import serviceImportImage from "@/assets/service-import.jpg";
import serviceSuppliersImage from "@/assets/service-suppliers.jpg";
import serviceConsultationImage from "@/assets/service-consultation.jpg";
import logoGlob from "../assets/logo_glob.png";

interface HomeSectionProps {
  onTabChange: (tab: string) => void;
}

const HomeSection = ({ onTabChange }: HomeSectionProps) => {
  const categories = [
    {
      id: "pets",
      name: "Mascotas",
      description: "Accesorios y productos para mascotas",
      image: petsImage,
    },
    {
      id: "home",
      name: "Hogar",
      description: "Artículos para el hogar y decoración",
      image: homeImage,
    },
    {
      id: "supplies",
      name: "Insumos",
      description: "Materiales y suministros para tu negocio",
      image: partsImage, // Cambia la imagen si tienes una específica para insumos
    },
    {
      id: "toys",
      name: "Juguetes",
      description: "Juguetes educativos y de entretenimiento",
      image: toysImage,
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
      id: "suppliers",
      name: "Aliados Recomendados",
      description: "Conectamos tu proyecto con instaladores expertos y confiables",
      image: serviceSuppliersImage,
      features: ["Instaladores certificados", "Cobertura nacional", "Soporte continuo"]
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
      icon: CircleDollarSign,
      title: "Mejores Precios",
      description: "Los precios más competitivos del mercado"
    },
    {
      icon: Star,
      title: "Atención Personalizada",
      description: "Asesoramiento especializado para cada cliente"
    }
  ];

  return (
    <>
      {/* Hero a todo lo ancho */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] aspect-[3/1.1] min-h-[320px] max-h-[520px]">
        {/* Imagen de fondo */}
        <img
          src={importBusinessImage}
          alt="Servicios profesionales de importación y comercialización internacional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Capa oscura para contraste */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        {/* Logo marca de agua */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none z-0">
          <img
            src="/lovable-uploads/1cf72272-446d-47a1-9934-5b191c36b54b.png"
            alt="EcoInn Global Background Logo"
            className="w-96 h-auto"
          />
        </div>
        {/* Contenido sobrepuesto */}
        <div className="relative z-10 flex flex-col justify-center h-full pl-8 pr-4 lg:pl-24 max-w-2xl">
          <p className="text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Tu socio estratégico en importación y comercialización internacional
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
            Productos que inspiran, precios que sorprenden. Tu guía experta para importar con seguridad
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-loose drop-shadow">
            Ecoinn Global C.A. Nos dedicamos a traer al mercado venezolano productos innovadores con la mejor relación calidad-precio, haciendo que la excelencia sea accesible.<br /><br />
            Es tu aliado estratégico en la importación y comercialización de productos de excelente calidad, diseñados para impulsar tu negocio y satisfacer a tus clientes, asegurando la mejor relación precio-calidad-beneficio.
          </p>
          <Button
            size="lg"
            onClick={() => onTabChange("business")}
            className="text-lg px-8 py-4 font-semibold bg-primary/90 hover:bg-primary"
          >
            Descubre Nuestros Modelos de Negocio
          </Button>
        </div>
      </section>
      {/* Franja degradada invertida a todo lo ancho */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-2 bg-gradient-to-r from-green-500 via-primary to-blue-500" />

      {/* Resto del contenido en caja */}
      <div className="space-y-12 container mx-auto px-4">
        {/* Categories Grid */}
        <section className="mt-16">
          <div className="flex flex-col items-center mb-8">
            <img
              src={logoGlob}
              alt="EcoInn Global Logo"
              className="h-20 w-auto mb-4"
              style={{ maxWidth: "180px" }}
            />
            <h3 className="text-3xl font-bold">Categorías de productos</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.id} to={`/catalog/${category.id}`}>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-40 h-40 rounded-full overflow-hidden shadow-lg bg-gradient-to-b from-card to-accent/20 mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
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

        {/* Services Section */}
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

          <div className="grid gap-10 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col items-center text-center space-y-6 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg shadow-primary/10 border-4 border-primary/10 bg-gradient-to-b from-card to-accent/20">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <h4 className="text-2xl font-semibold text-foreground">{service.name}</h4>
                  <p className="text-muted-foreground text-base leading-relaxed max-w-xs mx-auto">{service.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">

                  </div>
                  <Button variant="outline" onClick={() => onTabChange("business")} className="group">
                    <span className="mr-2">Descubrir más</span>
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>
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
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <a href="./catalogo-ecoinn.pdf" download="catalogo-ecoinn.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Descargar Catálogo PDF
                </a>
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
    </>
  );
};

export default HomeSection;