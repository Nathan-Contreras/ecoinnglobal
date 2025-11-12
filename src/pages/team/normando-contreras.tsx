import React from "react";
import { Link } from "react-router-dom";
import normandoPhoto from "@/assets/team/normando_team1.png";

type Variant = "page" | "modal";

interface NormandoProfileProps {
  variant?: Variant;
  onClose?: () => void; // opcional: útil en el modal para cerrar con botón
}

const NormandoProfile: React.FC<NormandoProfileProps> = ({ variant = "page", onClose }) => {
  const isPage = variant === "page";

  return (
    <div
      className={
        isPage
          ? "max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2"
          : "w-full bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2"
      }
    >
      {/* Foto */}
      <div className={isPage ? "h-96 md:h-auto" : "h-full w-full md:h-auto md:w-full"}>
        <img
          src={normandoPhoto}
          alt="Normando Contreras"
          className={isPage ? "w-full h-full object-cover" : "max-h-full max-w-full object-cover w-full h-full"}
        />
      </div>

      {/* Contenido */}
      <div className="p-8 relative">
        {/* Botón cerrar solo en modal */}
        {!isPage && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-muted/10"
            aria-label="Cerrar perfil"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}

        <h2 className="text-3xl md:text-4xl font-bold mb-1">Normando Contreras</h2>
        <p className="text-sm md:text-base text-muted-foreground mb-5">Gerente de Importaciones</p>

        <div className="text-base md:text-lg leading-relaxed space-y-4">
          <p>
            <em>Magíster en Administración, Mención Mercadeo</em> |{" "}
            <em>Especialista en Finanzas</em> / <em>Contador Público</em>
          </p>

          <p>
            Profesional con una sólida trayectoria de <strong>más de 25 años</strong> en los sectores{" "}
            <strong>logístico</strong> y <strong>comercial</strong>, focalizado en{" "}
            <strong>empresas de consumo masivo</strong>. Combina experiencia práctica con una base académica
            robusta en administración y finanzas.
          </p>

          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Estrategia & Operaciones:</strong> diseño e implementación de estrategias comerciales y
              logísticas para optimizar la <strong>cadena de suministro</strong>.
            </li>
            <li>
              <strong>Optimización de procesos de servicio:</strong> eficiencia operativa, reducción de costos y
              mejora de la experiencia del cliente.
            </li>
            <li>
              <strong>Finanzas para decisiones:</strong> análisis financiero y rentabilidad para soportar decisiones
              estratégicas.
            </li>
            <li>
              <strong>Dominio logístico integral:</strong> almacenamiento, distribución y transporte; gestión
              comercial orientada a disponibilidad y rotación efectiva.
            </li>
          </ul>

          <div className="mt-4 border rounded-lg p-5 bg-muted/30">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Resumen curricular</h3>
            <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
              <li>Magíster en Administración (Mención Mercadeo).</li>
              <li>Especialista en Finanzas. Contador Público colegiado.</li>
              <li>+25 años en consumo masivo: logística, supply chain y gestión comercial.</li>
              <li>Experto en optimización de procesos y experiencia de cliente.</li>
              <li>Diseño de estrategias comerciales y de distribución a nivel nacional.</li>
              <li>Liderazgo de equipos y gestión de indicadores (KPI/OKR).</li>
            </ul>
          </div>
        </div>

        {/* Acciones */}
        <div className="mt-6 flex gap-3 px-8 pb-8">
          {isPage ? (
            <>
              <Link
                to="/"
                className="inline-flex items-center px-5 py-2.5 bg-primary text-white rounded-lg hover:opacity-95"
              >
                Volver
              </Link>
              <a
                href="/assets/cv-normando-contreras.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-border rounded-lg"
              >
                Descargar CV
              </a>
            </>
          ) : (
            <>
              <a
                href="/assets/cv-normando-contreras.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md"
              >
                Descargar CV
              </a>
              <button
                onClick={onClose}
                className="inline-flex items-center px-4 py-2 border border-border rounded-md"
              >
                Cerrar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NormandoProfile;