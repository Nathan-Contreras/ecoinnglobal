import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Package, Truck, CircleDollarSign, Star, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
      {/* Hero a todo lo ancho - dividido en dos columnas (texto izquierda, carrusel derecha) */}
      <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[360px] max-h-[720px]">
        <img
          src={importBusinessImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center h-full px-6 lg:px-20 py-12">
          {/* Left: texto (slogan + descripción) */}
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight drop-shadow-lg">
              Productos que inspiran, precios que sorprenden. Tu guía experta para importar con seguridad
            </h2>

            <div style={{ textAlign: "justify", maxWidth: "820px" }}>
              <p className="text-lg text-white/95 mb-4 leading-relaxed drop-shadow">
                Ecoinn Global C.A. Nos dedicamos a traer al mercado venezolano productos innovadores con la mejor relación calidad-precio, haciendo que la excelencia sea accesible.
              </p>

              <p className="text-lg text-white/90 mb-6 leading-relaxed drop-shadow">
                Es tu aliado estratégico en la importación y comercialización de productos de excelente calidad, diseñados para impulsar tu negocio y satisfacer a tus clientes, asegurando la mejor relación precio-calidad-beneficio.
              </p>
            </div>

            {/* NOTE: botón "Descubre Nuestros Modelos de Negocio" eliminado por solicitud */}
          </div>

          {/* Right: carrusel de fotos (placeholder) */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg bg-black/20">
              {/* Carousel placeholder - imágenes que nos enviarán */}
              <div className="absolute inset-0 flex items-center justify-center text-white/60">
                <span className="text-sm md:text-base">Carrusel de fotos (imágenes a subir)</span>
              </div>
              {/* Aquí se integrará el carrusel con las imágenes que Angel/usuario entregue */}
            </div>
          </div>
        </div>
      </section>

      {/* Franja degradada invertida a todo lo ancho */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen h-2 bg-gradient-to-r from-green-500 via-primary to-blue-500" />

      {/* Ajuste: aumentar separación vertical entre secciones */}
      <section className="mt-8">
        <div className="flex flex-col items-center mb-2">
          <img
            src={logoGlob}
            alt="EcoInn Global Logo"
            className="h-40 w-auto mb-1"
            style={{ maxWidth: "320px" }}
          />
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nuestros Productos
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 container mx-auto">
          {categories.map((category) => (
            <Link key={category.id} to={`/catalog/${category.id}`}>
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="w-44 h-44 rounded-full overflow-hidden shadow-lg bg-gradient-to-b from-card to-accent/20 mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center max-w-[220px]">
                  <h4 className="text-lg font-semibold text-primary mb-1">{category.name}</h4>
                  <p className="text-muted-foreground text-sm" style={{ textAlign: "justify" }}>
                    {category.description}
                  </p>
                  <div className="mt-4">
                    {/* Ver detalles llevará a ficha técnica; quitar precio (no mostrado aquí) */}
                    <button className="text-primary font-medium">Ver ficha técnica &gt;</button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Separador adicional */}
      <div className="h-8" />

      {/* Services Section - más separación respecto a categorías */}
      <section className="container mx-auto px-4 mt-12">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary mb-6 shadow-md">
            <Package className="h-12 w-12 text-white" />
          </div>
          <motion.h3
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
            initial={{ filter: "blur(10px)", opacity: 0 }}
            whileInView={{ filter: "blur(0px)", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Nuestros Servicios
          </motion.h3>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            Descubre cómo acompañamos tu negocio en cada etapa de la importación y comercialización.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center space-y-6"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative w-44 h-44 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-primary/10 bg-gradient-to-b from-card to-accent/20">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 max-w-xs">
                <h4 className="text-2xl font-semibold text-foreground">{service.name}</h4>
                <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.id === "import" ? (
                    <Button variant="outline" onClick={() => onTabChange("business-import")}>
                      Describir servicio de importación
                    </Button>
                  ) : service.id === "suppliers" ? (
                    <Button variant="outline" onClick={() => onTabChange("business-aliados")}>
                      Aliados comerciales
                    </Button>
                  ) : (
                    <Button variant="outline" onClick={() => onTabChange("contact")}>
                      Solicitar Consultoría
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Más separación antes de siguientes bloques */}
      <div className="h-12" />

      {/* Why choose us - mostrar carrusel de imágenes reales (placeholder) */}
      <section className="container mx-auto px-4">
        <div className="bg-accent/30 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h3>
            <p className="text-muted-foreground text-lg">Razones que nos hacen tu mejor opción</p>
          </div>

          <div className="w-full h-64 rounded-lg overflow-hidden bg-black/10 flex items-center justify-center">
            <span className="text-muted-foreground">Carrusel de imágenes reales (a subir)</span>
          </div>
        </div>
      </section>

      {/* Download Catalog Section - actualizar PDF (Angel lo subirá) */}
      <div className="h-10" />
      <section className="container mx-auto px-4">
        <div className="bg-card border rounded-2xl p-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Download className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Descarga Nuestro Catálogo Completo</h3>
            <p className="text-muted-foreground text-lg mb-8">
              Accede a toda nuestra gama de productos con precios, especificaciones y detalles técnicos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-3" asChild>
                <a href="/assets/catalogo-ecoinn.pdf" download="catalogo-ecoinn.pdf">
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
            <p className="text-sm text-muted-foreground mt-4">Archivo PDF • actualizado</p>
          </div>
        </div>
      </section>

      {/* CTA Section - separación aplicada */}
      <div className="h-10" />
      <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-4">¿Listo para hacer tu pedido?</h3>
        <p className="text-xl mb-6">Contáctanos para obtener más información sobre nuestros productos</p>
        <Button size="lg" variant="secondary" onClick={() => onTabChange("contact")} className="text-lg px-8 py-3">
          Solicitar Información
        </Button>
      </section>
    </>
  );
};

export default HomeSection;