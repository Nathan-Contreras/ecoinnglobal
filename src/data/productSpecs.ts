import { ProductSpecs } from "@/pages/ProductSpecsTable";

/* ========= Fallback general ========= */
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

/* ========= Utilidad slug ========= */
const slugify = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[\s,_/]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

/* ========= BLOQUES REUTILIZABLES ========= */
const encendedorUSB: ProductSpecs = {
  tipo: "Encendedor eléctrico de plasma",
  material: "Plástico de alta calidad",
  recarga: "USB (5V)",
  bateria: "170 mAh",
  autonomia: "≈70 encendidos por carga",
  tiempoRecarga: "< 1 hora",
  colores: "Negro, Plateado, Rojo, Dorado, Azul, Rosado, Gris",
  beneficios:
    "Sin llama abierta ni combustible, ecológico, recarga rápida, diseño elegante y versátil",
  uso: "Cigarrillos, velas, parrillas, camping",
};

const cintaKine: ProductSpecs = {
  ancho: "5cm",
  longitud: "5m (16.4ft)",
  material: "Algodón; Rayón; Nylon",
  adhesivo: "Acrílico (alta adhesión)",
  elasticidad: "170%–180%",
  resistenciaPeladura: "1.4–1.8 N/cm",
  composicion: "95% Algodón, 5% tejido elástico",
  ondaDeAgua: "Diseño ondulado",
  colores: "Azul, Crema, Negro",
  caracteristicas: "Transpirable, ecológica",
  resistenciaAlAgua: "Reduce filtración ~50%",
  formatoDeCorte: "Continuo",
};

const padsMascotas: ProductSpecs = {
  contenido: "30 unidades por paquete",
  tamanosDisponibles: "40×60 cm y 60×60 cm",
  duracion: "3 años desde la fecha de fabricación",
  usoPrevisto:
    "Entrenamiento de cachorros y mascotas adultas; protección de superficies",
  estructura: "6 capas de protección avanzada",
  capas: `
    1. Tela no tejida (Non-woven fabric): Capa superior suave, permite el paso rápido de la orina y brinda protección antibacterial.
    2. Capa atrayente de feromonas: Estimula a la mascota a usar el pad correctamente.
    3. Capa ultra absorbente: Difunde la orina de forma uniforme para una absorción eficiente.
    4. Pulpa de celulosa + SAP: Núcleo que convierte el líquido en gel, evitando el retorno de humedad.
    5. Capa de bloqueo de humedad: Refuerza la retención de líquidos, evitando filtraciones.
    6. Película de polietileno (PE film): Base impermeable y antideslizante que protege pisos y superficies.
  `,
  capacidadAbsorcion: "800–1000 ml (según tamaño)",
  tiempoAbsorcion: "< 5 segundos",
  espesor: "1.5–2.0 mm",
  materialBase: "PE film antideslizante",
  color: "Blanco con bordes sellados (azul o verde)",
  beneficios: `
    ✅ Ultra absorbente: hasta 5 veces su peso en líquido (800–1000 ml).
    ✅ Entrenamiento efectivo: con atrayente de feromonas incorporado.
    ✅ Protección total: evita filtraciones y mantiene seco el entorno.
    ✅ Base antideslizante y superficie antibacterial.
    ✅ Ideal para hogares, clínicas veterinarias y criaderos.
  `,
  recomendaciones: `
    - Colocar con la cara blanca hacia arriba.
    - Cambiar después de cada uso.
    - Mantener en lugar fresco y seco.
    - No desechar en el inodoro.
  `,
};

const toallasMascotas: ProductSpecs = {
  contenido: "100 toallas por paquete",
  dimensiones: "15×20 cm",
  empaque: "Bolsa resellable con tapa plástica (~500 g)",
  duracion: "3 años desde la fecha de fabricación",
  ingredientes: `
    - Agua: Base acuosa y disolvente natural.
    - Propilenglicol: Humectante que mantiene la humedad.
    - Betaína de coco (Cocamidopropyl Betaine): Limpiador suave derivado del coco.
    - Extracto de manzanilla (Chamomilla Recutita): Calma e hidrata la piel.
    - Glicerina: Hidratante natural.
    - Extracto de madreselva (Honeysuckle Flower Extract): Suaviza y refresca.
    - Cloruro de cetilpiridinio (Cetylpyridinium Chloride): Antiséptico que combate bacterias.
    - Cloruro de benzalconio (Benzalkonium Chloride): Conservante antimicrobiano.
    - Ácido cítrico (Citric Acid): Regula el pH.
  `,
  beneficios: `
    ✅ Libre de alcohol y parabenos.
    ✅ Apta para perros y gatos de todas las razas.
    ✅ Enriquecida con extractos botánicos calmantes.
    ✅ No deja residuos pegajosos.
    ✅ Ideal para el hogar, paseos o viajes.
    ✅ Empaque práctico y reciclable.
  `,
  instrucciones: `
    - Uso externo únicamente.
    - Evitar contacto con los ojos.
    - Mantener fuera del alcance de los niños.
    - Almacenar en lugar fresco y seco.
    - Suspender uso si se presenta irritación.
  `,
};

const bolsasDesechos: ProductSpecs = {
  contenido: "120 bolsas (8 rollos × 15)",
  dimensionesBolsa: "23 × 33 cm",
  grosor: "15–18 µm",
  material: "PLA + PBAT (biodegradable)",
  resistencia: "Hasta 3 kg",
  fragancia: "Sin fragancia",
  compatibilidad: "Dispensadores estándar (núcleo ≈ 2.7 cm)",
  colores: "Negro, Verde, Azul",
  incluyeDispensador: "Opcional (con clip para correa)",
  beneficios: `
    ✅ Biodegradables y resistentes.
    ✅ Fácil desprendimiento por perforación.
    ✅ Tamaño cómodo para recoger y anudar.
    ✅ Compatibles con dispensadores estándar.
  `,
  instrucciones: `
    - Mantener en lugar fresco y seco.
    - No exponer a luz solar directa por periodos prolongados.
    - Desechar en contenedores adecuados.
  `,
};

const cauchosMoto: ProductSpecs = {
  tipo: "Neumáticos para motocicletas (tubeless)",
  material: "Caucho natural tailandés con polímeros técnicos",
  construccion: "8 lonas reforzadas (8PR)",
  garantia: "20.000 km",
  tamanos:
    "90/90-18 TL 8PR; 110/90-16 TL 8PR; 275-18 TL 8PR (tubeless, alta carga)",
  beneficios:
    "Alta durabilidad y agarre en seco/mojado; reduce pinchazos y facilita montaje",
  recomendaciones:
    "Montaje profesional con lubricante no agresivo; presión 28–36 PSI; revisar banda y válvula",
};

/* ========= Mapa por category-id (robusto) =========
   En CatalogPage.tsx:
   pets: id=1 → "Bolsas para desechos de mascotas"
         id=2 → "Pad de entrenamiento"
         id=3 → "Toallas húmedas"
   supplies: id=1 → "Cauchos para moto"
*/
export const specsMapByCategoryId: Record<string, ProductSpecs> = {
  "pets-1": bolsasDesechos,
  "pets-2": padsMascotas,
  "pets-3": toallasMascotas,
  "supplies-1": cauchosMoto,
};

/* ========= MAPA POR NOMBRE (SLUG) ========= */
export const specsMapByNameSlug: Record<string, ProductSpecs> = {
  /* ---------- INSUMOS (PELÍCULAS) ---------- */
  [slugify("Papel Film grado alimentación")]: {
    formato: "Rollo 35 cm x 1.500 m",
    pesoNeto: "5.3 kg",
    material: "Polietileno de alta calidad (grado alimenticio)",
    espesor: "10.5 micras",
    apariencia: "Transparente cristalino",
    beneficios:
      "Barrera contra humedad/aire, alta adherencia y elasticidad, no transfiere olores/sabores",
    usos:
      "Cocinas profesionales, vitrinas, hogares; refrigeración y congelación (hasta -40°C); no apto horno/microondas",
    guia:
      "Colocar en dispensador, cortar longitud necesaria y presionar para sellar; no reutilizar entre crudo/cocido",
  },
  [slugify("Papel Film Industrial")]: {
    formato: "Rollo 35 cm x 1.500 m",
    pesoNeto: "5.3 kg",
    material: "Polietileno de alta calidad",
    espesor: "10.5 micras",
    apariencia: "Transparente cristalino",
    beneficios:
      "Barrera protectora, alta adherencia y elasticidad, multiusos en supermercados/restaurantes",
    usos:
      "Refrigeración y congelación (hasta -40°C); no apto para cocción (horno/microondas)",
    guia:
      "Usar con dispensador; almacenar horizontal; evitar fuentes de calor directo",
  },

  /* ---------- INSUMOS (CINTA KINESIOLÓGICA) ---------- */
  [slugify("Cinta Kinesiológica")]: cintaKine,
  [slugify("Cintas Kinesiológica")]: cintaKine,

  /* ---------- HOGAR ---------- */
  [slugify("Base de papel para Airfryer")]: {
    contenido: "100 unidades",
    dimensiones: "Ø 20 cm x 4 cm (alto de borde)",
    material: "Papel de pulpa de madera virgen",
    recubrimiento: "Silicona alimentaria (libre de BPA)",
    resistenciaTermica: "Hasta 220°C",
    beneficios:
      "Antiadherente, ahorra aceite/tiempo, biodegradable y empaque reciclable",
    compatibilidad:
      "Air Fryers de cualquier marca, hornos convencionales y vaporeras (no microondas/lavavajillas)",
    guia:
      "Colocar 1 base en la canasta, añadir alimentos sin exceder capacidad y cocinar; no reutilizar",
  },
  [slugify("Encendedor USB")]: encendedorUSB,
  [slugify("Encendedor USB Recargable")]: encendedorUSB,

  /* ---------- MASCOTAS ---------- */
  // Claves originales largas
  [slugify("Pads de Entrenamiento para Mascotas")]: padsMascotas,
  [slugify("Toallas Húmedas para Mascotas")]: toallasMascotas,
  // Aliases para coincidir con CatalogPage.tsx
  [slugify("Bolsas para desechos de mascotas")]: bolsasDesechos,
  [slugify("Bolsas para desechos")]: bolsasDesechos,
  [slugify("Bolsas biodegradables para perros")]: bolsasDesechos,
  [slugify("Bolsas para heces de mascotas")]: bolsasDesechos,
  [slugify("Pad de entrenamiento")]: padsMascotas,
  [slugify("Pads de Entrenamiento")]: padsMascotas,
  [slugify("Toallas húmedas")]: toallasMascotas,
  [slugify("Toallitas húmedas")]: toallasMascotas,

  /* ---------- JUGUETES (SCOOTERS) ---------- */
  [slugify("Scooter para niños (Acero)")]: {
    modelo: "200",
    colores: "Blanco, Azul",
    dimensiones: "36 × 88 × 104 cm",
    peso: "4 kg",
    materialRuedas: "Poliuretano (PU)",
    numeroRuedas: "2",
    materialCuerpo: "Acero",
    plegable: "Sí",
    alturaAjustable: "Sí",
    cargaMaxima: "100 kg",
  },
  [slugify("Scooter para niños (Niños)")]: {
    modelo: "YLKB-602",
    colores: "Verde, Azul, Rosado",
    dimensiones: "28 × 52 × 72 cm",
    materialRuedas: "Poliuretano (PU)",
    numeroRuedas: "3 (luces y sonido)",
    materialCuerpo: "Acero",
    plegable: "Sí",
    alturaAjustable: "Sí",
    cargaMaxima: "100 kg",
  },
  [slugify("Scooter para niños (Poli)")]: {
    modelo: "2026",
    colores: "Verde",
    dimensiones: "34 × 73 × 104 cm",
    materialRuedas: "Poliuretano (PU)",
    numeroRuedas: "3 (luces)",
    materialCuerpo: "Aluminio",
    plegable: "Sí",
    alturaAjustable: "Sí",
    cargaMaxima: "100 kg",
  },

  /* ---------- REPUESTOS ---------- */
  // Original del documento
  [slugify("Caucho para Motos")]: cauchosMoto,
  // Aliases para coincidir con CatalogPage.tsx (plural y minúsculas)
  [slugify("Cauchos para moto")]: cauchosMoto,
  [slugify("Caucho para moto")]: cauchosMoto,

  /* ---------- DECORACIÓN (si usas estos en el sitio) ---------- */
  [slugify("Wall Panel Acústico")]: {
    modelo: "CWS-01/CWS-02",
    tipo: "Paneles acústicos",
    material: "Chapa de madera natural + MDF + fibra de poliéster",
    dimensionModulo: "600 × 21 mm",
    longitud: "2.80 m",
    descripcion:
      "Absorción sonora efectiva y estética cálida para ambientes serenos",
  },
  [slugify("Flat Wall Panel")]: {
    tipo: "Chapa de madera",
    dimensiones: "1220 × 2800 mm",
    espesor: "8 mm",
    material: "Compuesto de madera y plástico",
    descripcion:
      "Texturas 5D (madera, piedra, tela, metal y colores sólidos); sin moho ni descascarillado",
  },
  [slugify("Wall Panel 3D")]: {
    tipo: "Panel de pared 3D",
    dimensiones: "600 × 600 × 9 mm",
    superficie: "Recubrimiento",
    material: "PVC + MDF",
    descripcion:
      "Paneles modulares que permiten patrones creativos con relieve",
  },
  [slugify("Tubos Separación para interiores")]: {
    modelos: "TU50-40; TU100-50",
    tipo: "Tubo de madera",
    superficie: "Recubrimiento",
    dimension: "50 × 40 mm",
    longitud: "2.9 m (o personalizado)",
    material: "Compuesto de madera y plástico (WPC)",
  },
  [slugify("Tubos de Techos para interiores")]: {
    modelos: "CE50-90; CE50-60",
    tipo: "Techo",
    superficie: "Estándar y recubrimiento",
    dimension: "50 × 90 mm y 50 × 60 mm",
    longitud: "2.9 m",
    material: "Compuesto de madera y plástico (WPC)",
  },
  [slugify("Tubos para exteriores")]: {
    modelo: "CT-04",
    superficie: "Estándar y recubrimiento",
    dimension: "100 × 50 mm",
    longitud: "2.9 m",
    material: "Fibra de madera y HDPE",
  },
  [slugify("Wall Panel para exteriores")]: {
    modelo: "CO-09",
    superficie: "Veta de madera 3D",
    dimension: "219 × 26 mm",
    longitud: "2.9 m",
    material: "Fibra de madera y HDPE",
  },
  [slugify("Estructura para Pérgola")]: {
    superficieCubierta: "3 × 3 m (≈9 m²)",
    alturaTotal: "2.70 m",
    sistema: "Armable y modular (kit de instalación)",
    estructura: "Aluminio anodizado 50×50 mm (anticorrosivo)",
    uniones: "Acero inoxidable con tratamiento anticorrosivo",
    techo: "Paneles WPC (acabado tipo madera)",
    color: "Estructura: gris grafito; Techo: roble natural",
    tornilleria: "Galvanizada, apta para exteriores",
  },
};

/** ========= Lookup: (1) nombre → (2) category-id → (3) vacío ========= */
export function lookupSpecs(
  category?: string,
  id?: number | string,
  name?: string
): ProductSpecs {
  // 1) por nombre (slug)
  if (name) {
    const s = slugify(name.trim());
    if (specsMapByNameSlug[s]) return specsMapByNameSlug[s];
  }

  // 2) por category-id
  if (category && id) {
    const key = `${category}-${id}`;
    if (specsMapByCategoryId[key]) return specsMapByCategoryId[key];
  }
  if (id && specsMapByCategoryId[String(id)]) {
    return specsMapByCategoryId[String(id)];
  }

  // 3) sin fallback forzado: retorna objeto vacío (la tabla lo admite)
  return {};
}

export default {
  defaultSpec,
  specsMapByCategoryId,
  specsMapByNameSlug,
  lookupSpecs,
};