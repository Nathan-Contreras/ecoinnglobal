import React from "react";

export interface ProductSpecs {
  ancho?: string;
  longitud?: string;
  material?: string;
  adhesivo?: string;
  elasticidad?: string;
  resistenciaPeladura?: string;
  composicion?: string;
  ondaDeAgua?: string;
  colores?: string;
  caracteristicas?: string;
  resistenciaAlAgua?: string;
  formatoDeCorte?: string;
}

interface Props {
  specs: ProductSpecs;
}

/* helper para filas de tabla (usada en desktop) */
const row = (label: string, value?: string) => (
  <tr className="border-b last:border-b-0">
    <td className="py-3 px-4 font-medium text-sm text-foreground/90 w-1/3 align-top">{label}</td>
    <td className="py-3 px-4 text-sm text-muted-foreground">{value ?? "-"}</td>
  </tr>
);

/* componente responsive: table en md+, lista vertical en mobile */
const ProductSpecsTable = ({ specs }: Props) => {
  return (
    <div className="w-full">
      {/* Desktop / Tablet: tabla */}
      <div className="hidden md:block overflow-x-auto rounded-md border border-border">
        <table className="w-full table-auto border-collapse">
          <tbody>
            {row("Ancho:", specs.ancho)}
            {row("Longitud:", specs.longitud)}
            {row("Material:", specs.material)}
            {row("Adhesivo:", specs.adhesivo)}
            {row("Elasticidad:", specs.elasticidad)}
            {row("Resistencia a la peladura:", specs.resistenciaPeladura)}
            {row("Composición:", specs.composicion)}
            {row("Onda de agua:", specs.ondaDeAgua)}
            {row("Colores:", specs.colores)}
            {row("Características:", specs.caracteristicas)}
            {row("Resistencia al agua:", specs.resistenciaAlAgua)}
            {row("Formato de corte:", specs.formatoDeCorte)}
          </tbody>
        </table>
      </div>

      {/* Mobile: listado apilado */}
      <div className="block md:hidden space-y-3">
        {[
          ["Ancho", specs.ancho],
          ["Longitud", specs.longitud],
          ["Material", specs.material],
          ["Adhesivo", specs.adhesivo],
          ["Elasticidad", specs.elasticidad],
          ["Resistencia a la peladura", specs.resistenciaPeladura],
          ["Composición", specs.composicion],
          ["Onda de agua", specs.ondaDeAgua],
          ["Colores", specs.colores],
          ["Características", specs.caracteristicas],
          ["Resistencia al agua", specs.resistenciaAlAgua],
          ["Formato de corte", specs.formatoDeCorte],
        ].map(([label, value]) => (
          <div key={label as string} className="bg-card/40 rounded-lg p-3 border border-border">
            <div className="text-sm font-medium text-foreground/90">{label}</div>
            <div className="mt-1 text-sm text-muted-foreground">{value ?? "-"}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecsTable;