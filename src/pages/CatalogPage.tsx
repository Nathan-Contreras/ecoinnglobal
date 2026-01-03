import React, { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
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
import { lookupSpecs } from "@/data/productSpecs";

// ✅ Ruta RELATIVA (este archivo está en src/pages → sube 1 nivel a src → baja a assets)
const importImage = (p: string) => new URL(`../assets/products/${p}`, import.meta.url).href;

// (opcional) placeholder si faltara alguna imagen
const FALLBACK_IMG =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23f2f2f2"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%23999" font-family="Arial" font-size="20">Imagen no disponible</text></svg>';

// 👇 Usa EXACTAMENTE los nombres/carpetas que mostraste: home, pets, supplies, toys
const productData = {
  toys: [
    {
      id: 4,
      name: "Balón de Fútbol",
      description: "Balón para prácticas de fútbol campo",
      image: importImage("toys/balon.jpg"),
    },
    {
      id: 5,
      name: "Patines en línea convertible",
      description: "Patines en línea con colores del mundial 2026 y kit de conversión.",
      image: importImage("toys/patines_en_linea.png"),
    },
    {
      id: 3,
      name: "Scooter para niños (Poli)",
      description: "Ruedas de poli para mejor deslizamiento.",
      image: importImage("toys/scooter_poli.png"),
    },
    {
      id: 1,
      name: "Scooter para niños (Acero)",
      description: "Scooter de acero para niños, ligero y resistente.",
      image: importImage("toys/scooter_acero.png"),
    },
    {
      id: 2,
      name: "Scooter para niños (Niños)",
      description: "Scooter pensado para los más pequeños.",
      image: importImage("toys/scooter_ninos.png"),
    },
  ],
  repuestos: [
    {
      id: 1,
      name: "Cauchos para moto",
      description: "Cauchos de alto rendimiento para motocicletas.",
      image: importImage("repuestos/cauchos_moto.png"),
    },
    {
      id: 2,
      name: "Cámara/Tripa",
      description: "Cauchos de alto rendimiento para motocicletas.",
      image: importImage("repuestos/camara_tripa.png"),
    },
    {
      id: 3,
      name: "Válvula",
      description: "Válvula para neumáticos sin cámara.",
      image: importImage("repuestos/valvula.png"),
    },
  ],
  home: [
    {
      id: 2,
      name: "Base de papel para Airfryer",
      description: "Base de papel desechable para cocinar en Airfryer.",
      image: importImage("home/papel_airfryer.png"),
    },
    {
      id: 1,
      name: "Encendedor USB Recargable",
      description: "Encendedor USB recargable, ideal para cocina y camping.",
      image: importImage("home/encendedor_usb.png"),
    },
  ],
  supplies: [
    {
      id: 2,
      name: "Papel film grado alimentación",
      description: "Ideal para uso de contacto con alimentos.",
      image: importImage("supplies/papel_film_alim.png"),
    },
    {
      id: 3,
      name: "Papel film industrial",
      description: "Película de alta resistencia para uso industrial.",
      image: importImage("supplies/papel_film_industrial.png"),
    },
    {
      id: 5,
      name: "Cuellero",
      description: "Fabricados con papel de celulosa o fibra no tejida (non woven), suave y desechable.",
      image: importImage("supplies/cuelleros.png"),
    },
    {
      id: 1,
      name: "Cinta Kinesiológica",
      description: "Cinta elástica para soporte muscular.",
      image: importImage("supplies/cinta_kinesiologica.png"),
    },
    {
      id: 4,
      name: "Vendas Adhesivas",
      description: "Fabricados en tela no tejida proporcionando elasticidad, suavidad y ligereza.",
      image: importImage("supplies/vendas_adhesivas.png"),
    }
  ],
  pets: [
    {
      id: 3,
      name: "Toallas húmedas",
      description: "Cuidado diario con ingredientes seguros.",
      image: importImage("pets/toallas_humedas.png"),
    },
    {
      id: 2,
      name: "Pad de entrenamiento",
      description: "Absorbentes para entrenamiento de mascotas.",
      image: importImage("pets/pad_entrenamiento.png"),
    },
    {
      id: 1,
      name: "Bolsas para desechos de mascotas",
      description: "Bolsas resistentes y biodegradables.",
      image: importImage("pets/bolsa_desechos.png"),
    },
  ],
  decoration: [
    {
      id: 1,
      name: "Wall Panel Acústico",
      description: "Panel acústico decorativo en MDF + poliéster, ideal para mejorar la acústica y la estética.",
      image: importImage("decoration/wall_panel_acustico.png"),
    },
    {
      id: 2,
      name: "Flat Wall Panel",
      description: "Panel plano tipo chapa de madera con textura 3D para revestimientos interiores.",
      image: importImage("decoration/flat_wall_panel.png"),
    },
    {
      id: 3,
      name: "Wall Panel 3D",
      description: "Panel de pared 3D en MDF/PVC para crear relieves y efectos volumétricos.",
      image: importImage("decoration/wall_panel_3d.png"),
    },
    {
      id: 4,
      name: "Tubos de separación para interiores",
      description: "Tubos WPC decorativos para separar espacios interiores con estética cálida.",
      image: importImage("decoration/tubos_separacion_interiores.png"),
    },
    {
      id: 5,
      name: "Tubos de techos para interiores",
      description: "Perfiles WPC para techos interiores con look de madera.",
      image: importImage("decoration/tubos_techos_interiores.png"),
    },
    {
      id: 6,
      name: "Tubos para exteriores",
      description: "Tubos WPC de alta densidad para persianas, cercas y pérgolas exteriores.",
      image: importImage("decoration/tubos_exteriores.png"),
    },
    {
      id: 7,
      name: "Wall Panel para exteriores",
      description: "Revestimiento exterior con veta de madera 3D y sistema machihembrado.",
      image: importImage("decoration/wall_panel_exteriores.png"),
    },
    {
      id: 8,
      name: "Estructura para pérgola",
      description: "Pérgola modular en aluminio + WPC, ideal para patios y terrazas.",
      image: importImage("decoration/estructura_pergola.png"),
    },
    {
      id: 9,
      name: "Láminas Techos UPVC",
      description: "Lámina termoacústica para techado y revestimiento, fabricada en material UPVC.",
      image: importImage("decoration/lamina.png"),
    },
  ],
};

const categoryNames = {
  toys: "Juguetes",
  home: "Hogar",
  supplies: "Insumos",
  pets: "Mascotas",
  decoration: "Decoración",
  repuestos: "Repuestos",
} as const;

type CategoryKey = keyof typeof productData;

const CatalogPage = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState<(typeof productData)[CategoryKey][number] & { specs?: ProductSpecs } | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const normalized = category === "parts" ? "supplies" : category;

  useEffect(() => {
    if (category === "parts") {
      navigate("/catalog/supplies", { replace: true });
    }
  }, [category, navigate]);

  const validCategory = useMemo(
    () => (normalized && Object.hasOwn(productData, normalized) ? (normalized as CategoryKey) : null),
    [normalized]
  );

  if (!validCategory) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Categoría no encontrada</h1>
          <Link to="/">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const dataKey = normalized as keyof typeof productData;
  const products = productData[dataKey] ?? [];
  const categoryName = categoryNames[(dataKey as keyof typeof categoryNames)] ?? dataKey;

  const productsWithSpecs = useMemo(
    () =>
      (products as any[]).map((p) => ({
        ...p,
        specs: lookupSpecs(validCategory as string, p.id, p.name),
      })),
    [products, validCategory]
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-green-500 via-primary to-blue-500 text-white">
        <div className="container mx-auto px-4 py-6 md:py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex-1">
              <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-3">
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
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {productsWithSpecs.map((product, idx) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 10, scale: 0.995 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.42, ease: "easeOut" } },
              }}
              whileHover={{ scale: 1.03, translateY: -6 }}
              className="h-[360px] sm:h-[420px] transition-shadow duration-200"
            >
              <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col">
                <div className="relative flex-none h-1/2 bg-white flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.src = FALLBACK_IMG; }}
                    className="w-full h-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="pb-2 px-3 md:px-6 pt-3 md:pt-6 flex-none">
                  <CardTitle className="text-base md:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-3 md:px-6 pb-4 md:pb-6 flex flex-col justify-between flex-grow overflow-hidden">
                  <div>
                    <CardDescription className="mb-3 md:mb-4 line-clamp-3 text-sm">
                      {product.description}
                    </CardDescription>
                  </div>
                  <div className="mt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        setSelectedProduct(product);
                        setDialogOpen(true);
                      }}
                    >
                      Ver detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dialog con especificaciones */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="max-h-[85vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle>{selectedProduct?.name ?? "Detalles del producto"}</DialogTitle>
            <DialogDescription>{selectedProduct?.description ?? "Especificaciones del producto"}</DialogDescription>
          </DialogHeader>

          <div className="mt-4 max-h-[70vh] overflow-y-auto pr-2">
            <ProductSpecsTable
              specs={
                selectedProduct?.specs ?? 
                (selectedProduct
                  ? (lookupSpecs(validCategory as string, selectedProduct.id, selectedProduct.name) as ProductSpecs)
                  : {})
              }
            />
          </div>

          <DialogFooter className="mt-4">
            <Button onClick={() => setDialogOpen(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CatalogPage;
