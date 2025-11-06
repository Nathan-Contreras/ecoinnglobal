import React from "react";
import { Link } from "react-router-dom";

const NormandoContreras = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="h-96 md:h-auto">
          <img src="@/assets/team/normando_contreras.png" alt="Normando Contreras" className="w-full h-full object-cover" />
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-2">Normando Contreras</h2>
          <p className="text-sm text-muted-foreground mb-4">Gerente de Importaciones</p>
          <div className="text-base leading-relaxed">
            <p>Magíster en Administración, Mención Mercadeo. Especialista en Finanzas. Contador Público.

Profesional con una sólida trayectoria de más de 25 años en los sectores logístico y comercial, focalizado en el ámbito de empresas de consumo masivo. Combina una profunda experiencia práctica con una sólida formación académica en administración y finanzas.

Amplia experiencia en el diseño e implementación de estrategias comerciales y logísticas para optimizar la cadena de suministro y alcanzar objetivos de negocio en entornos de consumo masivo. Experto en optimización de procesos de servicio, enfocando la gestión hacia la eficiencia operativa, la reducción de costes y la mejora de la experiencia del cliente. Sólidos conocimientos como Especialista en Finanzas, que permiten la toma de decisiones estratégicas basadas en el análisis financiero y la rentabilidad. Dominio integral de procesos logísticos (almacenamiento, distribución, transporte) y comerciales, garantizando la disponibilidad y la rotación efectiva de productos de consumo masivo.</p>
            <p className="mt-4">Resumen curricular: [aquí va el resumen detallado del CV].</p>
          </div>

          <div className="mt-6 flex gap-3">
            <Link to="/" className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:opacity-95">
              Volver
            </Link>
            <a href="/assets/cv-normando-contreras.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 border border-border rounded">
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NormandoContreras;