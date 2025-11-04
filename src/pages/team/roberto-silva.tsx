import React from "react";
import { Link } from "react-router-dom";

const RobertoSilva = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="h-96 md:h-auto">
          <img src="/assets/team-4.jpg" alt="Roberto Silva" className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">Roberto Silva</h2>
          <p className="text-sm text-muted-foreground mb-4">Coordinador de Logística</p>
          <div className="text-base leading-relaxed">
            <p>Experto en operaciones logísticas y distribución nacional, responsable de la coordinación y ejecución de entregas.</p>
            <p className="mt-4">Resumen curricular: [aquí va el resumen detallado del CV].</p>
          </div>

          <div className="mt-6 flex gap-3">
            <Link to="/" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:opacity-95">
              Volver
            </Link>
            <a href="/assets/cv-roberto-silva.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-border rounded">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobertoSilva;