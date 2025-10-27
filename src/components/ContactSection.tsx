import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "",
    product: "",
    quantity: "",
    message: "",
    newsletter: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Solicitud Enviada",
      description: "Nos pondremos en contacto contigo en las próximas 24 horas.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      category: "",
      product: "",
      quantity: "",
      message: "",
      newsletter: false
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      details: ["+58 (212) 258-7155", "+58 (412) 791-7318"],
      color: "bg-primary"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["ventas@ecoinnglobal.com", "ecoinnglobal@ecoinnglobal.com"],
      color: "bg-secondary"
    },
    {
      icon: MapPin,
      title: "Dirección",
      details: ["C.C. Macaracuay Plaza, Nivel C2, Local 3-E", "Caracas, Venezuela"],
      color: "bg-info"
    },
    {
      icon: Clock,
      title: "Horarios",
      details: [
        "Lunes - Viernes de 9:00 AM a 6:00 PM",
        "Atención web 24/7"
      ],
      color: "bg-success"
    }
  ];

  const categories = [
    { value: "toys", label: "Juguetes" },
    { value: "home", label: "Hogar" },
    { value: "parts", label: "Repuestos" },
    { value: "pets", label: "Mascotas" },
    { value: "other", label: "Otro" }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Solicitar Información
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          ¿Tienes preguntas sobre nuestros productos? ¡Estamos aquí para ayudarte! 
          Completa el formulario y nos pondremos en contacto contigo.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                <span>Formulario de Contacto</span>
              </CardTitle>
              <CardDescription>
                Completa todos los campos para que podamos brindarte la mejor atención
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      placeholder="Tu nombre completo"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="tu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa (Opcional)</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Categoría de Interés *</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange("category", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Cantidad Aproximada</Label>
                    <Input
                      id="quantity"
                      value={formData.quantity}
                      onChange={(e) => handleInputChange("quantity", e.target.value)}
                      placeholder="ej: 10 unidades"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="product">Producto Específico (Opcional)</Label>
                  <Input
                    id="product"
                    value={formData.product}
                    onChange={(e) => handleInputChange("product", e.target.value)}
                    placeholder="Describe el producto que buscas"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensaje *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Cuéntanos más detalles sobre lo que necesitas..."
                    rows={4}
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="newsletter"
                    checked={formData.newsletter}
                    onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                  />
                  <Label htmlFor="newsletter" className="text-sm">
                    Quiero recibir ofertas especiales y novedades por email
                  </Label>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Enviar Solicitud
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>
                Múltiples formas de ponerte en contacto con nosotros
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full ${
  info.title === "Teléfono"
    ? "bg-primary dark:bg-primary/80"
    : info.color
} flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-success/5">
            <CardHeader>
              <CardTitle>Tiempo de Respuesta</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Consultas técnicas y generales:</span>
                  <span className="font-semibold text-success">30 minutos</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cotizaciones Servicios:</span>
                  <span className="font-semibold text-info">24 horas</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cotizaciones Productos:</span>
                  <span className="font-semibold text-primary">4 horas</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-info/5 to-primary/5">
            <CardHeader>
              <CardTitle>¿Necesitas Ayuda Inmediata?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm mb-4">
                Para consultas urgentes, puedes contactarnos directamente por WhatsApp
              </p>
              <Button
                asChild
                variant="secondary"
                className="w-full bg-success text-success-foreground hover:bg-success/90 flex items-center justify-center"
              >
                <a
                  href="https://wa.me/584127917318"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Contactar por WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section - texto más corto, plegable, dos columnas con la quinta centrada */}
      <section className="my-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Preguntas Frecuentes</h3>

        {/* Estilos locales para triángulo y animación */}
        <style>{`
          details summary { position: relative; padding-bottom: 0.5rem; padding-right: 2rem; cursor: pointer; }
          /* Triángulo en el extremo derecho; apunta abajo cuando cerrado, arriba cuando abierto */
          details summary .faq-triangle {
            position: absolute;
            right: 0.25rem;
            top: 50%;
            transform: translateY(-50%) rotate(0deg);
            transform-origin: center;
            transition: transform 180ms ease, opacity 180ms ease;
            opacity: 1;
            pointer-events: none;
          }
          details[open] summary .faq-triangle {
            transform: translateY(-50%) rotate(180deg);
          }
          .faq-answer {
            opacity: 0;
            transform: translateY(-6px);
            transition: opacity 220ms ease, transform 220ms ease;
            will-change: opacity, transform;
          }
          details[open] .faq-answer {
            opacity: 1;
            transform: translateY(0);
          }
        `}</style>

        {(() => {
          const qas = [
            {
              q: "¿Cuál es el origen y cómo garantizan la calidad?",
              a: "Productos de fábricas verificadas en China. Sourcing riguroso y control de calidad antes del envío."
            },
            {
              q: "¿Hay MOQ (cantidad mínima)?",
              a: "Sí. Varía por producto y portafolio. Consulte a ventas para el detalle."
            },
            {
              q: "¿Hacen despachos a nivel nacional?",
              a: "Sí. Coordinamos logística y entregas a almacén o punto de venta con seguimiento."
            },
            {
              q: "¿Cómo es el proceso de importación y tiempos?",
              a: "Gestionamos proveedor, transporte y aduanas. Tiempos varían por producto/volumen; pregunte para su caso."
            },
            {
              q: "¿Qué respaldo documental ofrecen?",
              a: "Toda la mercancía cumple el régimen legal venezolano y cuenta con la documentación necesaria."
            }
          ];

          return (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {qas.map((item, idx) => {
                  const isFifth = idx === 4;
                  return (
                    <details
                      key={idx}
                      className={`${isFifth ? "md:col-span-2" : ""} p-3 rounded-md group`}
                    >
                      <summary className="font-semibold cursor-pointer list-none outline-none">
                        {item.q}
                        <span className="faq-triangle text-muted-foreground" aria-hidden>
                          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L7 7L13 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </summary>

                      {/* Contenido: la quinta respuesta se centra y limita su ancho */}
                      <div
                        className={`mt-2 text-muted-foreground faq-answer ${isFifth ? "mx-auto max-w-xl" : ""}`}
                        style={{ textAlign: isFifth ? "center" : "justify" }}
                      >
                        {item.a}
                      </div>
                    </details>
                  );
                })}
              </div>
            </div>
          );
        })()}
      </section>
    </div>
  );
};

export default ContactSection;