import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Heart, ShoppingCart, Eye } from "lucide-react";

interface ProductsSectionProps {
  onTabChange: (tab: string) => void;
}

const ProductsSection = ({ onTabChange }: ProductsSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Todos los Productos" },
    { id: "toys", label: "Juguetes" },
    { id: "home", label: "Hogar" },
    { id: "parts", label: "Repuestos" },
    { id: "pets", label: "Mascotas" }
  ];

  const products = [
    {
      id: 1,
      name: "Robot Educativo STEM",
      category: "toys",
      price: 89.99,
      originalPrice: 120.00,
      rating: 4.8,
      reviews: 124,
      image: "/placeholder.svg",
      badge: "Más Vendido",
      badgeColor: "bg-red-500"
    },
    {
      id: 2,
      name: "Set de Herramientas Cocina Premium",
      category: "home",
      price: 156.50,
      originalPrice: 200.00,
      rating: 4.9,
      reviews: 89,
      image: "/placeholder.svg",
      badge: "Oferta",
      badgeColor: "bg-green-500"
    },
    {
      id: 3,
      name: "Filtro de Aire Automotriz",
      category: "parts",
      price: 45.99,
      originalPrice: 65.00,
      rating: 4.7,
      reviews: 203,
      image: "/placeholder.svg",
      badge: "Calidad Premium",
      badgeColor: "bg-blue-500"
    },
    {
      id: 4,
      name: "Cama Ortopédica para Mascotas",
      category: "pets",
      price: 78.99,
      originalPrice: 95.00,
      rating: 4.6,
      reviews: 156,
      image: "/placeholder.svg",
      badge: "Recomendado",
      badgeColor: "bg-purple-500"
    },
    {
      id: 5,
      name: "Puzzle 3D Arquitectura",
      category: "toys",
      price: 34.99,
      originalPrice: 45.00,
      rating: 4.5,
      reviews: 92,
      image: "/placeholder.svg",
      badge: "Nuevo",
      badgeColor: "bg-orange-500"
    },
    {
      id: 6,
      name: "Organizador de Baño Bambú",
      category: "home",
      price: 67.50,
      originalPrice: 85.00,
      rating: 4.8,
      reviews: 78,
      image: "/placeholder.svg",
      badge: "Eco-Friendly",
      badgeColor: "bg-green-600"
    },
    {
      id: 7,
      name: "Kit de Frenos Cerámicos",
      category: "parts",
      price: 234.99,
      originalPrice: 280.00,
      rating: 4.9,
      reviews: 145,
      image: "/placeholder.svg",
      badge: "Profesional",
      badgeColor: "bg-gray-700"
    },
    {
      id: 8,
      name: "Juguete Interactivo para Gatos",
      category: "pets",
      price: 29.99,
      originalPrice: 40.00,
      rating: 4.4,
      reviews: 267,
      image: "/placeholder.svg",
      badge: "Bestseller",
      badgeColor: "bg-yellow-500"
    }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const ProductCard = ({ product }: { product: typeof products[0] }) => {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    return (
      <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardHeader className="p-0 relative">
          <div className="relative h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge 
              className={`absolute top-2 left-2 text-white ${product.badgeColor}`}
            >
              {product.badge}
            </Badge>
            {discount > 0 && (
              <Badge className="absolute top-2 right-2 bg-red-500 text-white">
                -{discount}%
              </Badge>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <div className="flex space-x-2">
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Eye className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="secondary" className="rounded-full">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div className="flex items-center mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating) 
                      ? "text-yellow-400 fill-current" 
                      : "text-gray-300"
                  }`} 
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-1">
              ({product.reviews})
            </span>
          </div>
          
          <CardTitle className="text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
          
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-sm text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
          
          <Button 
            className="w-full"
            onClick={() => onTabChange("contact")}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Solicitar Información
          </Button>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">
          Productos Más Vendidos
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Descubre los productos favoritos de nuestros clientes, seleccionados por su calidad y popularidad
        </p>
      </section>

      {/* Category Filter */}
      <section className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            onClick={() => setSelectedCategory(category.id)}
            className="transition-all duration-200"
          >
            {category.label}
          </Button>
        ))}
      </section>

      {/* Products Grid */}
      <section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">
            Estadísticas de Ventas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">850+</div>
              <p className="text-muted-foreground">Productos Vendidos</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <p className="text-muted-foreground">Satisfacción Cliente</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-info mb-2">4.8</div>
              <p className="text-muted-foreground">Calificación Promedio</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">24h</div>
              <p className="text-muted-foreground">Tiempo de Respuesta</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">
          ¿No encontraste lo que buscas?
        </h3>
        <p className="text-lg mb-6">
          Contáctanos y te ayudaremos a encontrar el producto perfecto para ti
        </p>
        <Button 
          size="lg" 
          variant="secondary"
          onClick={() => onTabChange("contact")}
        >
          Contactar Asesor
        </Button>
      </section>
    </div>
  );
};

export default ProductsSection;