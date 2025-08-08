import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

// Mock data for products
const productData = {
  toys: [
    {
      id: 1,
      name: "Bloques de Construcción Educativos",
      price: "$29.99",
      description: "Set de 100 piezas para desarrollo cognitivo",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Rompecabezas 3D Madera",
      price: "$19.99",
      description: "Rompecabezas de animales en madera natural",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Juego de Mesa Estrategia",
      price: "$45.99",
      description: "Juego familiar para 2-6 jugadores",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Peluche Interactivo",
      price: "$34.99",
      description: "Peluche que responde a caricias y sonidos",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    }
  ],
  home: [
    {
      id: 1,
      name: "Lámpara LED Moderna",
      price: "$89.99",
      description: "Lámpara de mesa con control remoto y múltiples colores",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Organizador de Cocina",
      price: "$24.99",
      description: "Set de contenedores herméticos para almacenamiento",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Cojines Decorativos",
      price: "$15.99",
      description: "Set de 2 cojines con diseños modernos",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Difusor de Aromas",
      price: "$39.99",
      description: "Difusor ultrasónico con temporizador",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"
    }
  ],
  parts: [
    {
      id: 1,
      name: "Filtro de Aceite Universal",
      price: "$12.99",
      description: "Compatible con múltiples modelos de vehículos",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Pastillas de Freno Premium",
      price: "$45.99",
      description: "Pastillas de freno de alto rendimiento",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Amortiguadores Delanteros",
      price: "$89.99",
      description: "Par de amortiguadores para suspensión delantera",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Batería Auto 12V",
      price: "$79.99",
      description: "Batería de larga duración 12V 60Ah",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop"
    }
  ],
  pets: [
    {
      id: 1,
      name: "Collar GPS para Mascotas",
      price: "$69.99",
      description: "Collar inteligente con rastreamento GPS",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Cama Ortopédica para Perros",
      price: "$59.99",
      description: "Cama de espuma viscoelástica para mascotas",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Juguete Interactivo",
      price: "$25.99",
      description: "Juguete que dispensa premios automáticamente",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Comedero Automático",
      price: "$49.99",
      description: "Dispensador de comida programable",
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop"
    }
  ]
};

const categoryNames = {
  toys: "Juguetes",
  home: "Hogar", 
  parts: "Repuestos",
  pets: "Mascotas"
};

const CatalogPage = () => {
  const { category } = useParams<{ category: string }>();
  
  if (!category || !productData[category as keyof typeof productData]) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Categoría no encontrada</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const products = productData[category as keyof typeof productData];
  const categoryName = categoryNames[category as keyof typeof categoryNames];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex-1">
              <Link to="/" className="inline-flex items-center text-primary-foreground/80 hover:text-primary-foreground mb-3 md:mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Link>
              <h1 className="text-2xl md:text-4xl font-bold">{categoryName}</h1>
              <p className="text-primary-foreground/80 mt-2 text-sm md:text-base">
                Explora nuestra selección de productos en {categoryName.toLowerCase()}
              </p>
            </div>
            <Badge variant="secondary" className="text-sm md:text-lg px-3 py-1 md:px-4 md:py-2 self-start md:self-auto">
              {products.length} productos
            </Badge>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-2 px-3 md:px-6 pt-3 md:pt-6">
                <CardTitle className="text-base md:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {product.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-3 md:px-6 pb-4 md:pb-6">
                <CardDescription className="mb-3 md:mb-4 line-clamp-2 text-sm">
                  {product.description}
                </CardDescription>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                  <span className="text-xl md:text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button size="sm" variant="outline" className="w-full sm:w-auto">
                    Ver detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;