import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Users, Award, Clock } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { number: "5+", label: "Años de experiencia", icon: Clock },
    { number: "1000+", label: "Productos en catálogo", icon: Award },
    { number: "500+", label: "Clientes satisfechos", icon: Users },
    { number: "15+", label: "Países de origen", icon: Globe }
  ];

  const values = [
    {
      title: "Calidad Garantizada",
      description: "Todos nuestros productos pasan por rigurosos controles de calidad antes de llegar a nuestros clientes.",
      color: "bg-primary"
    },
    {
      title: "Precios Competitivos",
      description: "Trabajamos directamente con fabricantes para ofrecerte los mejores precios del mercado.",
      color: "bg-secondary"
    },
    {
      title: "Atención Personalizada",
      description: "Nuestro equipo de expertos está disponible para asesorarte en cada paso de tu compra.",
      color: "bg-info"
    },
    {
      title: "Entrega Confiable",
      description: "Sistema de logística optimizado para garantizar entregas puntuales y productos en perfecto estado.",
      color: "bg-success"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">
          Sobre EcoInn Global
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Somos una empresa especializada en la importación y distribución de productos de alta calidad. 
          Con más de 5 años en el mercado, nos hemos consolidado como líderes en la importación de 
          juguetes, artículos para el hogar, repuestos automotrices y productos para mascotas.
        </p>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="text-center border-0 bg-card/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary rounded-full mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Mission & Vision */}
      <section>
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Nuestra Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Brindar a nuestros clientes acceso a productos de importación de la más alta calidad, 
                ofreciendo un servicio excepcional, precios competitivos y una experiencia de compra 
                que supere sus expectativas. Nos comprometemos a ser el puente entre los mejores 
                fabricantes internacionales y el mercado local.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary">Nuestra Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como la empresa líder en importación y distribución de productos 
                especializados en el país, expandiendo nuestro catálogo y presencia nacional para 
                llevar innovación y calidad a cada hogar, mientras construimos relaciones duraderas 
                basadas en la confianza y la excelencia.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section>
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Nuestros Valores
          </h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Los principios que guían cada una de nuestras acciones y decisiones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${value.color}`}></div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-accent/30 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-foreground mb-6">
            Nuestro Equipo
          </h3>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Contamos con un equipo de profesionales altamente capacitados, dedicados a 
            brindarte el mejor servicio y asesoramiento especializado en cada categoría de productos.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
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