import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import ProductSpecsTable, { ProductSpecs } from "@/pages/ProductSpecsTable";
import { lookupSpecs, defaultSpec as defaultProductSpec } from "@/data/productSpecs";

const productData = {
  toys: [
    {
      id: 1,
      name: "Scooter para niños (Acero)",
      description: "Scooter de acero para niños, ligero y resistente.",
      image: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Scooter para niños (Aluminio)",
      description: "Scooter de aluminio para niños, ligero y resistente.",
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Scoorter para niños (Poliuretano)",
      description: "Scooter de poliuretano para niños, ligero y resistente.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    },
  ],
  home: [
    {
      id: 1,
      name: "Base de papel para Airfryer",
      description: "Base de papel desechable para cocinar en Airfryer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Encendedor USB Recargable",
      description: "Encendedor USB recargable, ideal para cocina y camping",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
    },
  ],
  parts: [
    {
      id: 1,
      name: "Papel Film grado alimentación",
      description: "Ideal para uso intensivo",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Papel film industrial",
      description: "Papel film de alta resistencia para uso industrial",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Cinta Kinesiológica",
      description: "Cinta elástica para soporte muscular.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
  ],
  pets: [
    {
      id: 1,
      name: "Pads de Entrenamiento para Mascotas",
      description: "Entrenamiento de cachorros y mascotas adultas, protección de superficies.",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Toallas Húmedas para Mascotas",
      description: "Ingredientes naturales y seguros para el cuidado diario de tu mascota.",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Bolsas para desechos de Mascotas",
      description: "Bolsas resistentes y biodegradables para desechos de mascotas.",
      image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400&h=300&fit=crop"
    },
  ]
};

const categoryNames = {
  toys: "Juguetes",
  home: "Hogar", 
  parts: "Insumos",
  pets: "Mascotas"
};

const CatalogPage = () => {
  const { category } = useParams<{ category: string }>();
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const getSpecsForProduct = (product: any, categoryKey?: string): ProductSpecs => {
    return lookupSpecs(categoryKey ?? category ?? undefined, product?.id ?? undefined, product?.name ?? undefined) as ProductSpecs;
  };
  
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
  const productsWithSpecs = (products as any[]).map((p) => ({
    ...p,
    specs: lookupSpecs(category as string, p.id, p.name),
  }));

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-green-500 via-primary to-blue-500 text-white">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex-1">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-3 md:mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al catálogo
              </Link>
              <h1 className="text-2xl md:text-4xl font-bold">{categoryName}</h1>
              <p className="text-white/80 mt-2 text-sm md:text-base">
                Explora nuestra selección de productos en {categoryName.toLowerCase()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {productsWithSpecs.map((product) => (
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full sm:w-auto"
                    onClick={() => {
                      // guardamos el producto enriquecido (incluye .specs)
                      setSelectedProduct(product);
                      setDialogOpen(true);
                    }}
                  >
                    Ver detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Dialog con especificaciones */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedProduct ? selectedProduct.name : "Detalles del producto"}</DialogTitle>
            <DialogDescription>
              {selectedProduct ? selectedProduct.description : "Especificaciones del producto"}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4">
            {/* Si el producto seleccionado ya trae specs, las usamos directamente.
                Si no, se recalcan con getSpecsForProduct como fallback. */}
            <ProductSpecsTable
              specs={
                selectedProduct
                  ? (selectedProduct.specs ?? getSpecsForProduct(selectedProduct, category))
                  : defaultProductSpec
              }
            />
          </div>

          <DialogFooter className="mt-4">
            <div className="w-full flex justify-end">
              <Button onClick={() => setDialogOpen(false)}>Cerrar</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CatalogPage;