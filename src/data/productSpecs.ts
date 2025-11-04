import { ProductSpecs } from "@/pages/ProductSpecsTable";

// Default spec used as fallback
export const defaultSpec: ProductSpecs = {
  ancho: "5cm",
  longitud: "5m(16.4ft)",
  material: "Algodón; Rayón; Nylon",
  adhesivo: "Adhesivo Acrílico, gran capacidad de adhesión",
  elasticidad: "Estiramiento hasta 170%-180%",
  resistenciaPeladura: "1.4 n/cm - 1.8 n/cm.",
  composicion: "95% Algodón y 5% tejido elástico",
  ondaDeAgua: "Diseño de efecto ondulado",
  colores: "Azul, Crema y Negro",
  caracteristicas: "Transpirable, ecológico",
  resistenciaAlAgua: "Reduce la filtración en un 50%",
  formatoDeCorte: "Continuo para cortar según necesidad",
};

// Specs keyed by category-id (ej. "pets-1"). Populate here for products defined in productData.
export const specsMapByCategoryId: Record<string, ProductSpecs> = {
  "toys-1": defaultSpec,
  "toys-2": defaultSpec,
  "toys-3": defaultSpec,
  "toys-4": defaultSpec,
  "home-1": defaultSpec,
  "home-2": defaultSpec,
  "home-3": defaultSpec,
  "home-4": defaultSpec,
  "parts-1": defaultSpec,
  "parts-2": defaultSpec,
  "parts-3": defaultSpec,
  "parts-4": defaultSpec,
  "pets-1": defaultSpec,
  "pets-2": defaultSpec,
  "pets-3": defaultSpec,
  "pets-4": defaultSpec,
};

// Helper to build a slug from a product name for fallback lookup
const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[\s,_/]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

// Specs keyed by slugified product name (for products not present in productData sample)
export const specsMapByNameSlug: Record<string, ProductSpecs> = {
  // Papel Film grado alimentación
  [slugify("Papel Film grado alimentación")]: {
    ancho: "35cm",
    longitud: "1500m",
    composicion: "Polietileno de alta calidad apto para contacto con alimentos",
    caracteristicas: "Transparente cristalino, 10.5 micras de espesor, Peso neto: 5.3 kg",
  },
  // Papel Film Industrial
  [slugify("Papel Film Industrial")]: {
    ancho: "35cm",
    longitud: "1500m",
    composicion: "Polietileno de alta calidad apto para contacto directo con alimentos",
    caracteristicas: "Transparente cristalino, 10.5 micras de espesor, Peso neto: 5.3 kg",
  },
  // Cintas Kinesiológica
  [slugify("Cintas Kinesiológica")]: {
    ancho: "5cm",
    longitud: "5m (16.4ft)",
    material: "Algodón; Rayón; Nylon",
    adhesivo: "Adhesivo Acrílico",
    elasticidad: "Estiramiento hasta 170%-180%",
    resistenciaPeladura: "1.4 n/cm - 1.8 n/cm",
    composicion: "95% Algodón y 5% tejido elástico",
    ondaDeAgua: "Diseño de efecto ondulado",
    colores: "Azul, Crema y Negro",
    caracteristicas: "Transpirable, ecológico",
    resistenciaAlAgua: "Reduce la filtración en un 50%",
    formatoDeCorte: "Continuo",
  },
  // Wall Panel Acústico
  [slugify("Wall Panel Acústico")]: {
    caracteristicas: "Modelo: CWS-01/CWS-02, Tipo: Paneles Acústicos, Material: Chapa de madera natural + MDF + tablero de fibra de poliéster, Dimensión: 600x21mm, Longitud: 2.80 metros",
  },
  // Flat Wall Panel
  [slugify("Flat Wall Panel")]: {
    caracteristicas: "Tipo: Chapa de madera, Dimensiones: 1220x2800mm, Longitud: 8 mm, Material: Compuesto de madera y plástico",
  },
  // Wall Panel 3D
  [slugify("Wall Panel 3D")]: {
    caracteristicas: "Tipo: Panel de pared 3D, Dimensiones: 600 x 600 x 9 mm, Superficie: Recubrimiento, Material: PVC + MDF",
  },
  // Tubos Separación para interiores
  [slugify("Tubos Separación para interiores")]: {
    caracteristicas: "Modelos: TU50-40; TU100-50, Tipo: Tubo de madera, Superficie: Recubrimiento, Dimensión: 50mm * 40mm, Longitud: 2.9 m o personalizado, Material: Compuesto de madera y plástico",
  },
  // Tubos de Techos para interiores
  [slugify("Tubos de Techos para interiores")]: {
    caracteristicas: "Modelo: CE50-90 y CE50-60, Tipo: Techo, Superficie: estándar y recubrimiento, Dimensión: 50mm x 90mm y 50mm x 60mm, Longitud: 2.9 m, Material: Compuesto de madera y plástico",
  },
  // Tubos para exteriores
  [slugify("Tubos para exteriores")]: {
    caracteristicas: "Modelo: CT-04, Superficie: estándar y recubrimiento, Dimensión: 100mm x 50mm, Longitud: 2.9 m, Material: Fibra de madera y HDPE",
  },
  // Wall Panel para exteriores
  [slugify("Wall Panel para exteriores")]: {
    caracteristicas: "Modelo: CO-09, Superficie: Veta de madera 3D, Dimensión: 219mm x 26mm, Longitud: 2.9 m, Material: Fibra de madera y HDPE",
  },
  // Estructura para Pérgola
  [slugify("Estructura para Pérgola")]: {
    caracteristicas: "Superficie cubierta: 3 × 3 metros, Altura total: 2.70 metros, Área útil aproximada: 9 m², Sistema: Armable y modular, Estructura: Aluminio anodizado perfiles cuadrados (50×50 mm), Uniones: Acero inoxidable, Techo: Paneles WPC, Color: Gris grafito / Roble natural, Tornillería: Galvanizada",
  },
  // Pads de Entrenamiento para Mascotas
  [slugify("Pads de Entrenamiento para Mascotas")]: {
    caracteristicas: "Cantidad por paquete: 30 unidades, Tamaños: 40x60 cm y 60x60 cm, Duración: 3 años, Capacidad de absorción: 800–1000 ml, Tiempo de absorción: <5s, Espesor: 1.5–2.0 mm, Material base: PE film antideslizante, Estructura: 6 capas",
  },
  // Toallas Húmedas para Mascotas
  [slugify("Toallas Húmedas para Mascotas")]: {
    caracteristicas: "Contenido: 100 toallas por paquete, Dimensiones: 15x20 cm, Empaque: Bolsa resellable con tapa plástica, Peso neto: ~500 g, Duración: 3 años, Ingredientes: Water, Propylene Glycol, Cocamidopropyl Betaine, Chamomilla Recutita Extract, Glycerin, Honeysuckle Flower Extract, Cetylpyridinium Chloride, Benzalkonium Chloride, Citric Acid",
  },
  // Bolsas para Desechos de Mascotas
  [slugify("Bolsas para Desechos de Mascotas")]: {
    caracteristicas: "Contenido: 6 rollos x 15 bolsas (90 bolsas), Tamaño: 22x32 cm, Color: Naranja, Material: HDPE o PLA+PBAT, Espesor: 15–20 micras, Resistencia: hasta 1.5 kg",
  },
  // Base de papel para Airfryer
  [slugify("Base de papel para Airfryer")]: {
    caracteristicas: "Contenido: 100 unidades, Dimensiones: 20x4 cm, Resistencia térmica: Hasta 220°C, Material: Papel de pulpa de madera virgen, Recubrimiento: Silicona alimentaria (libre de BPA)",
  },
  // Encendedor USB
  [slugify("Encendedor USB")]: {
    caracteristicas: "Tipo: Encendedor eléctrico de plasma, Material: Plástico, Recarga: USB, Batería: 170 mAh, Autonomía: ~70 encendidos, Tiempo de recarga: <1h, Colores: Negro, Plateado, Rojo, Dorado, Azul, Rosado, Gris",
  },
  // Scooter para niños (Modelo 200)
  [slugify("Scooter para niños (Modelo 200)")]: {
    caracteristicas: "Modelo: 200, Colores: Blanco Azul, Dimensiones: 3688104cm, Peso: 4 kg, Ruedas: Poliuretano, Material cuerpo: Acero, Plegable: Si, Altura ajustable: Si, Carga máxima: 100 kg",
  },
  // Scooter para niños (Modelo YLKB-602)
  [slugify("Scooter para niños (Modelo YLKB-602)")]: {
    caracteristicas: "Modelo: YLKB-602, Colores: Verde Azul Rosado, Dimensiones: 285272cm, Ruedas: Poliuretano, Numero de ruedas: 3-luces y sonido, Material cuerpo: Acero, Plegable: Si, Altura ajustable: Si, Carga máxima: 100 kg",
  },
  // Scooter para niños (Modelo 2026)
  [slugify("Scooter para niños (Modelo 2026)")]: {
    caracteristicas: "Modelo: 2026, Colores: Verde, Dimensiones: 3473104cm, Ruedas: Poliuretano, Numero de ruedas: 3-luces, Material cuerpo: Aluminio, Plegable: Si, Altura ajustable: Si, Carga máxima: 100 kg",
  },
  // Caucho para Motos
  [slugify("Caucho para Motos")]: {
    caracteristicas: "Neumáticos tubeless, Material: Caucho natural tailandés con polímeros técnicos, Uso: urbano/delivery/semi-rural, Construcción: 8 lonas reforzadas (8PR), Garantía: 20 mil Km, Tamaños: 90/90-18 TL 8PR, 110/90-16 TL 8PR, 275-18 TL 8PR",
  },
};

// Lookup: intenta composite key -> id -> slug -> default
export function lookupSpecs(category?: string, id?: number | string, name?: string): ProductSpecs {
  if (category && id) {
    const key = `${category}-${id}`;
    if (specsMapByCategoryId[key]) return specsMapByCategoryId[key];
  }
  if (id && specsMapByCategoryId[String(id)]) return specsMapByCategoryId[String(id)];
  if (name) {
    const s = slugify(name);
    if (specsMapByNameSlug[s]) return specsMapByNameSlug[s];
  }
  return defaultSpec;
}

export default {
  defaultSpec,
  specsMapByCategoryId,
  specsMapByNameSlug,
  lookupSpecs,
};
