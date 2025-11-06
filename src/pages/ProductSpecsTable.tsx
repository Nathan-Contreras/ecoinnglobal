import React from "react";

/** Acepta claves libres para poder agregar especificaciones sin errores de TS */
export interface ProductSpecs {
  // Campos comunes (opcionales)
  ancho?: string;
  longitud?: string;
  material?: string;
  adhesivo?: string;
  elasticidad?: string;
  resistenciaPeladura?: string;
  composicion?: string;
  ondaDeAgua?: string;
  colores?: string;
  caracteristicas?: string; // "Tipo:..., Material:..., ..."
  resistenciaAlAgua?: string;
  formatoDeCorte?: string;

  /** Claves adicionales (modelo, dimensiones, contenido, etc.) */
  [key: string]: string | undefined;
}

interface Props {
  specs: ProductSpecs;
}

const Row = ({ label, value }: { label: string; value: string }) => (
  <tr className="border-b last:border-b-0">
    <td className="py-3 px-4 font-medium text-sm text-foreground/90 w-1/3 align-top sticky left-0 bg-background z-10">
      {label}:
    </td>
    <td className="py-3 px-4 text-sm text-muted-foreground">{value}</td>
  </tr>
);

/** Convierte claves a etiquetas legibles: camelCase / snake_case / kebab-case → Title Case */
function prettyLabel(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (c) => c.toUpperCase());
}

/** Explota "Tipo: X, Material: Y, ..." -> [{label, value}, ...] */
function expandCaracteristicas(cadena?: string): { label: string; value: string }[] {
  if (!cadena || typeof cadena !== "string") return [];
  return cadena
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((pair) => {
      const idx = pair.indexOf(":");
      if (idx === -1) return { label: "Características", value: pair };
      const label = pair.slice(0, idx).trim();
      const value = pair.slice(idx + 1).trim();
      return { label: prettyLabel(label), value };
    });
}

const ProductSpecsTable = ({ specs }: Props) => {
  if (!specs || typeof specs !== "object") {
    return (
      <div className="text-sm text-muted-foreground border border-border rounded-md p-4">
        Sin especificaciones disponibles.
      </div>
    );
  }

  // Campos “normales” (se muestran primero y en este orden)
  const baseItems = [
    { label: "Ancho", value: specs.ancho },
    { label: "Longitud", value: specs.longitud },
    { label: "Material", value: specs.material },
    { label: "Adhesivo", value: specs.adhesivo },
    { label: "Elasticidad", value: specs.elasticidad },
    { label: "Resistencia a la peladura", value: specs.resistenciaPeladura },
    { label: "Composición", value: specs.composicion },
    { label: "Onda de agua", value: specs.ondaDeAgua },
    { label: "Colores", value: specs.colores },
    { label: "Resistencia al agua", value: specs.resistenciaAlAgua },
    { label: "Formato de corte", value: specs.formatoDeCorte },
  ].filter(
    (i) => typeof i.value === "string" && i.value.trim().length > 0
  ) as { label: string; value: string }[];

  // 1) Características expandibles (clave "caracteristicas")
  const exploded = expandCaracteristicas(specs.caracteristicas);

  // Evitar duplicados con lo ya listado en baseItems
  const seen = new Set(baseItems.map((i) => i.label.toLowerCase()));
  const dedupExploded = exploded.filter((e) => !seen.has(e.label.toLowerCase()));
  dedupExploded.forEach((e) => seen.add(e.label.toLowerCase()));

  // 2) Extras: cualquier otra clave presente en specs que no sea una de las "clásicas"
  const classicKeys = new Set([
    "ancho",
    "longitud",
    "material",
    "adhesivo",
    "elasticidad",
    "resistenciaPeladura",
    "composicion",
    "ondaDeAgua",
    "colores",
    "caracteristicas",
    "resistenciaAlAgua",
    "formatoDeCorte",
  ]);

  const extraEntries = Object.entries(specs)
    .filter(([k, v]) => !classicKeys.has(k) && typeof v === "string" && (v as string).trim().length > 0)
    .map(([k, v]) => ({ label: prettyLabel(k), value: v as string }))
    // Evitar duplicados contra lo que ya salió en exploded
    .filter((i) => !seen.has(i.label.toLowerCase()))
    // Orden alfabético para consistencia
    .sort((a, b) => a.label.localeCompare(b.label));

  const items = [...baseItems, ...dedupExploded, ...extraEntries];

  if (items.length === 0) {
    return (
      <div className="text-sm text-muted-foreground border border-border rounded-md p-4">
        Sin especificaciones disponibles.
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Desktop / Tablet: tabla con scroll */}
      <div className="hidden md:block rounded-md border border-border">
        <div className="overflow-x-auto max-w-full">
          <div className="max-h-[60vh] overflow-y-auto pr-2">
            <table className="w-full table-auto border-collapse">
              <tbody>
                {items.map((it, idx) => (
                  <Row key={`${it.label}-${idx}`} label={it.label} value={it.value} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Mobile: lista apilada */}
      <div className="block md:hidden">
        <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
          {items.map((it, idx) => (
            <div key={`${it.label}-${idx}`} className="bg-card/40 rounded-lg p-3 border border-border">
              <div className="text-sm font-medium text-foreground/90">{it.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{it.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSpecsTable;