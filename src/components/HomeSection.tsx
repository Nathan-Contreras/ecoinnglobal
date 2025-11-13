import { Button } from "@/components/ui/button";
import { Card, CardContent} from "@/components/ui/card";
import { Package, Truck, CircleDollarSign, Star, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import importBusinessImage from "@/assets/import-business.jpg";
import toysImage from "@/assets/categories/toys-category.jpg";
import homeImage from "@/assets/categories/home-category.jpg";
import partsImage from "@/assets/categories/parts-category.jpg";
import decorImage from "@/assets/categories/home-category.jpg";
import petsImage from "@/assets/categories/pets-category.jpeg";
import serviceImportImage from "@/assets/services/service-import.jpg";
import serviceSuppliersImage from "@/assets/services/service-suppliers.jpg";
import serviceConsultationImage from "@/assets/services/service-consultation.jpg";
import logoGlob from "../assets/logo_glob.png";
import whyVideo from "@/assets/por_que_elegirnos/porquelegirnos.mp4";
import carousel1 from "@/assets/carrusel_hero/carrusel_1.jpg";
import carousel2 from "@/assets/carrusel_hero/carrusel_2.jpg";
import carousel3 from "@/assets/carrusel_hero/carrusel_3.jpg";

<br />
interface HomeSectionProps {
  onTabChange: (tab: string) => void;
}

const HomeSection = ({ onTabChange }: HomeSectionProps) => {
  // reemplaza el array original de categories por este (añade Decoración)
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
      id: "parts", // mantiene id actual usado en rutas (alias tratado en CatalogPage)
      name: "Insumos",
      description: "Materiales y suministros para tu negocio",
      image: partsImage,
    },
    {
      id: "toys",
      name: "Juguetes",
      description: "Juguetes educativos y de entretenimiento",
      image: toysImage,
    },
    {
      id: "decoration",
      name: "Decoración",
      description: "Decoración y complementos para interiores",
      image: decorImage,
    },
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

  const slides = [carousel1, carousel2, carousel3];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % slides.length);
    }, 5000); // 5s por slide
    return () => clearInterval(timer);
  }, [paused, slides.length]);

  // estado para deslizar categorías en escritorio (solo lg+)
  const [catStart, setCatStart] = useState(0);

  // número visible en escritorio (fijo en 4 según tu requisito)
  const visibleDesktop = 4;
  const maxStart = Math.max(0, categories.length - visibleDesktop);

  const slideNext = () => {
    // avanza y vuelve a 0 si llega al final (loop)
    setCatStart((s) => (s >= maxStart ? 0 : s + 1));
  };

  const slidePrev = () => {
    setCatStart((s) => (s <= 0 ? maxStart : s - 1));
  };

  return (
    <>
      {/* Hero a todo lo ancho - dividido en dos columnas (texto izquierda, carrusel derecha) */}
  <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-20 lg:-mt-24 min-h-[480px] max-h-[900px]">
        <div className="absolute inset-0 w-full h-full bg-[#0A2540]"></div>

        {/* spacer (evita usar <br />) */}
        <div className="my-16" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center h-full px-6 lg:px-20 py-12">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 z-30 relative">
            <div style={{ maxWidth: "820px" }}>
              <p className="text-xl text-white/95 mb-4 leading-relaxed drop-shadow">
                Ecoinn Global C.A. Nos dedicamos a traer al mercado venezolano productos innovadores con la mejor relación calidad-precio, haciendo que la excelencia sea accesible.
              </p>

              <p className="text-xl text-white/90 mb-6 leading-relaxed drop-shadow">
                Es tu aliado estratégico en la importación y comercialización de productos de excelente calidad, diseñados para impulsar tu negocio y satisfacer a tus clientes, asegurando la mejor relación precio-calidad-beneficio.
              </p>

              <p className="text-xl text-white/90 mb-6 leading-relaxed drop-shadow">
                Somos profesionales venezolanos que apostamos al crecimiento y desarrollo del comercio local, a través de las relaciones comerciales intercontinentales con aliados estratégicos en China, quien es hoy en día el mayor generador de intercambio comercial con países de América.
              </p>

              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                <span className="block">Productos que inspiran, precios que sorprenden.</span>
                <span className="block text-white/95">Tu guía experta para importar con seguridad</span>
              </h2>

            </div>

          </div>

          {/* Carrusel: ocupa de la mitad de la pantalla (left:50%) hasta el borde derecho, responsive
              Ahora sin fade: las imágenes están colocadas en fila y se desplazan con translateX para
              dar la sensación de imágenes pegadas que pasan. */}
          <div
            className="hidden lg:block lg:absolute lg:inset-y-0 lg:left-1/2 lg:right-0 lg:w-1/2"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            aria-hidden="true"
          >
            <div className="relative w-full h-full overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full flex"
                style={{
                  width: `${slides.length * 100}%`,
                  transform: `translateX(-${currentSlide * (100 / slides.length)}%)`,
                  transition: "transform 700ms ease-in-out",
                }}
              >
                {slides.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Slide ${i + 1}`}
                    className="w-[calc(100%/3)] h-full object-cover flex-shrink-0"
                    style={{ width: `${100 / slides.length}%` }}
                  />
                ))}
              </div>

              {/* indicadores (opcionales) */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-40">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/40"}`}
                    aria-label={`Ir a slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* fallback / mobile: mostrar carrusel en flujo normal debajo del texto */}
          <div className="w-full lg:hidden mt-8">
            <div
              className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg bg-black/10"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <AnimatePresence initial={false} mode="popLayout">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide]}
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: "0%", opacity: 1 }}
                  exit={{ x: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                  alt={`Hero slide ${currentSlide + 1}`}
                />
              </AnimatePresence>
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full ${i === currentSlide ? "bg-white" : "bg-white/40"}`}
                    aria-label={`Ir a slide ${i + 1}`}
                  />
                ))}
              </div>
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
          <br /><br />
        </div>
        {/* Único carousel de categorías (muestra 4 en escritorio, responsive en pantallas pequeñas)
            se mantiene una sola renderización y las flechas desplazan la ventana mostrando siempre up to visibleCount items */}
        <div className="container mx-auto px-4 mt-6">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-400 ease-in-out"
                style={{
                  width: `${(categories.length / visibleDesktop) * 100}%`,
                  /* 1) desplazamiento exacto de 1 ítem */
                  transform: `translateX(-${catStart * (100 / categories.length)}%)`,
                }}
              >
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    to={`/catalog/${category.id}`}
                    className="group flex-shrink-0"
                    style={{ width: `${100 / categories.length}%` }}
                  >
                    <div className="p-6 flex flex-col items-center cursor-pointer">
                      <div
                        className="
                          w-64 h-64 rounded-full overflow-hidden shadow-lg mb-4
                          bg-gradient-to-b from-green-500 via-primary to-blue-500 mx-auto
                          transition-transform duration-300
                          group-hover:scale-105 hover:scale-105
                        "
                      >
                        <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                      </div>

                      <div className="w-full max-w-[220px] mb-3 mx-auto">
                        <div className="h-1 w-full rounded bg-gradient-to-r from-green-500 via-primary to-blue-500" />
                      </div>

                      <div className="text-center max-w-[220px] mx-auto">
                        <h4 className="text-[26px] font-semibold text-primary mb-1">{category.name}</h4>
                        <p className="text-muted-foreground text-sm text-center">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </Link>
))}

              </div>
            </div>

            <button
              aria-label="Anterior categorías"
              onClick={slidePrev}
              className="
                absolute left-2 top-1/2 -translate-y-1/2
                w-12 h-12 rounded-full
                bg-primary text-white
                shadow-lg ring-2 ring-white/70
                hover:scale-105 hover:bg-primary/90
                transition-all
                focus:outline-none focus:ring-4 focus:ring-white
              "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Flecha siguiente (más visible) */}
            <button
              aria-label="Siguiente categorías"
              onClick={slideNext}
              className="
                absolute right-2 top-1/2 -translate-y-1/2
                w-12 h-12 rounded-full
                bg-primary text-white
                shadow-lg ring-2 ring-white/70
                hover:scale-105 hover:bg-primary/90
                transition-all
                focus:outline-none focus:ring-4 focus:ring-white
              "
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <div className="h-8" />

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
            <motion.div
              key={service.id}
              className="flex flex-col items-center text-center space-y-6"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: index * 0.12, ease: "easeOut" }}
            >
              <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300 bg-gradient-to-b from-green-500 via-primary to-blue-500">
                <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3 max-w-xs">
                <h4 className="text-2xl font-semibold text-foreground">{service.name}</h4>
                <p className="text-muted-foreground text-base leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {service.id === "import" ? (
                    <Button
                      onClick={() => onTabChange("business-import")}
                      className="bg-primary text-primary-foreground shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition-all px-4 py-2 focus-outline"
                    >
                      Importa con nosotros
                    </Button>
                  ) : service.id === "suppliers" ? (
                    <Button
                      onClick={() => onTabChange("business-aliados")}
                      className="bg-primary text-primary-foreground shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition-all px-4 py-2 focus-outline"
                    >
                      Descubre nuestros aliados
                    </Button>
                  ) : (
                    <Button
                      onClick={() => onTabChange("contact")}
                      className="bg-primary text-primary-foreground shadow-lg hover:opacity-95 transform hover:-translate-y-0.5 transition-all px-4 py-2 focus-outline"
                    >
                      Solicitar Consultoría
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
         </div>
      </section>

      {/* Más separación antes de siguientes bloques */}
      <div className="h-12" />

      <section className="w-full bg-primary text-white dark:bg-card dark:text-white">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Video a la izquierda */}
            <div className="w-full">
              <video
                src={whyVideo}
                className="w-full h-auto rounded-lg shadow-lg object-cover"
                controls
                playsInline
                autoPlay
                muted
                loop
              />
            </div>

            {/* Texto a la derecha */}
            <div className="w-full">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Por qué elegirnos
              </h3>
              <p className="text-lg mb-6 leading-relaxed text-white/95">
                Seleccionamos proveedores verificados, gestionamos la logística y garantizamos respaldo documental para que su importación llegue segura y a tiempo. Somos su aliado para llevar productos de calidad al mercado venezolano.
              </p>
              <Button
                onClick={() => onTabChange("about")}
                className="
                  bg-white text-primary font-semibold px-6 py-3 shadow-lg transition
                  hover:bg-white/90 hover:text-primary
                  dark:bg-primary dark:text-primary-foreground
                  dark:hover:bg-primary/90 dark:hover:text-primary-foreground
                  focus-outline
                "
              >
                Conoce más
              </Button>

            </div>
          </div>
        </div>
      </section>

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
                <a href="/ecoinnglobal/catalogo-ecoinn.pdf" download="catalogo-ecoinn.pdf">
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
