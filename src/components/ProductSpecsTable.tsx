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

const row = (label: string, value?: string) => (
  <tr className="border-b last:border-b-0">
    <td className="py-3 px-4 font-medium text-sm text-foreground/90 w-1/3 align-top">{label}</td>
    <td className="py-3 px-4 text-sm text-muted-foreground">{value ?? "-"}</td>
  </tr>
);

const ProductSpecsTable = ({ specs }: Props) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse border border-border rounded-md">
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
  );
};

export default ProductSpecsTable;
