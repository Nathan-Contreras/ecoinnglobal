import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Reemplazar imports de imágenes por rutas públicas (si están en public/assets)
const missionImg = "/assets/mission.jpg";
const visionImg = "/assets/vision.jpg";
const valuesImg = "/assets/values.jpg";

const AboutSection = () => {
  const values = [
    {
      title: "Investigación de Mercado Profunda",
      description: "Realizamos una investigación exhaustiva del mercado local para entender las necesidades y tendencias actuales, asegurando que los productos que importamos sean altamente relevantes y demandados en Venezuela.",
      color: "bg-primary"
    },
    {
      title: "Sourcing Global Verificado",
      description: "Nuestros expertos buscan y validan fábricas líderes en China con una amplia trayectoria en la producción de artículos de alta calidad. Solo trabajamos con proveedores verificados que cumplen con los más altos estándares.",
      color: "bg-secondary"
    },
    {
      title: "Logística Segura y Rápida",
      description: "Implementamos un proceso logístico seguro y eficiente que garantiza la llegada rápida de la mercancía.",
      color: "bg-info"
    },
    {
      title: "Entrega Confiable",
      description: "Nos encargamos de todos los trámites aduaneros y cumplimos estrictamente con todas las exigencias del régimen legal vigente en Venezuela, dándote total tranquilidad.",
      color: "bg-success"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Misión: texto a la izquierda, imagen grande a la derecha */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:pr-10 md:border-r md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Misión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Brindar a nuestros clientes acceso a productos de importación de la más alta calidad, ofreciendo un servicio excepcional, precios competitivos y una experiencia de compra que supere sus expectativas. Nos comprometemos a ser el puente entre los mejores fabricantes internacionales y el mercado local.
            </p>
          </div>

          <div className="w-full">
            <img src={missionImg} alt="Misión" className="w-full h-96 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Visión: imagen a la izquierda, texto a la derecha (alternado) */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="order-first md:order-none">
            <img src={visionImg} alt="Visión" className="w-full h-96 object-cover rounded-lg shadow-md" />
          </div>

          <div className="md:pl-10 md:border-l md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Visión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ser reconocidos como la empresa líder en importación y distribución de productos especializados en el país, expandiendo nuestro catálogo y presencia nacional para llevar innovación y calidad a cada hogar, mientras construimos relaciones duraderas basadas en la confianza y la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Valores: vuelve a alternar (texto izquierda, imagen derecha) */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:pr-10 md:border-r md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Nuestros Valores</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Los principios que guían cada una de nuestras acciones y decisiones.
            </p>

            <div className="grid md:grid-cols-1 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 mb-3">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${value.color}`}></div>
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full">
            <img src={valuesImg} alt="Valores" className="w-full h-96 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Equipo (se mantiene) */}
      <section className="bg-accent/30 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Nuestro Equipo
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contamos con un equipo de profesionales altamente capacitados, dedicados a 
            brindarte el mejor servicio y asesoramiento especializado en cada categoría de productos.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-5xl mx-auto">
            {[ 
              { name: "Angel Mendez", role: "Directora General", specialty: "Gestión Empresarial" },
              { name: "Normando Contreras", role: "Gerente de Importaciones", specialty: "Comercio Internacional" },
              { name: "María López", role: "Especialista en Calidad", specialty: "Control de Calidad" },
              { name: "Roberto Silva", role: "Coordinador de Logística", specialty: "Supply Chain" },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-muted-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{member.name}</h4>
                  <p className="text-sm text-primary font-medium mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;