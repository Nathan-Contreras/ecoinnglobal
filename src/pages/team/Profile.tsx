import React, { useEffect } from "react";

export interface TeamMember {
  slug: string;
  name: string;
  bio: string;
  longBio: string;
  img: string;
  colorClass?: string;
  role?: string;
  cvHref?: string;

  highlights?: string[];
  resume?: string[];
  education?: string;
  additionalResumes?: string[];
}

type Variant = "page" | "modal";

interface ProfileProps {
  member: TeamMember;
  variant?: Variant;
  onClose?: () => void;
}

const Profile: React.FC<ProfileProps> = ({ member, variant = "page", onClose }) => {
  const isPage = variant === "page";

  // Cerrar el modal si se hace clic fuera de él
  const handleClickOutside = (e: React.MouseEvent) => {
    const modal = e.target as HTMLElement;
    if (modal.classList.contains("modal-overlay")) {
      onClose && onClose();
    }
  };

  useEffect(() => {
    if (variant === "modal") {
      document.body.style.overflow = "hidden"; // Deshabilitar desplazamiento cuando el modal está abierto
    }

    return () => {
      document.body.style.overflow = "auto"; // Restaurar desplazamiento cuando el modal se cierre
    };
  }, [variant]);

  return (
    <div
      className={`${
        isPage ? "" : "modal-overlay"
      } fixed inset-0 flex justify-center items-center bg-black/50`}
      onClick={handleClickOutside}
    >
      <div
        className={`w-full max-w-3xl bg-white rounded-xl shadow-lg p-8 overflow-hidden flex flex-col`}
      >
        {/* Botón Cerrar (solo modal) */}
        {!isPage && onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-muted/10"
            aria-label="Cerrar perfil"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* Título y Subtítulo */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{member.name}</h2>
          {member.role && (
            <p className="text-sm md:text-base text-muted-foreground mb-5">{member.role}</p>
          )}
        </div>

        {/* Información del perfil */}
        <div
          className="text-base md:text-lg leading-relaxed space-y-4 overflow-y-auto" // Añadimos scroll aquí
          style={{ maxHeight: "70vh" }} // Establecemos una altura máxima
        >
          {member.education && <p dangerouslySetInnerHTML={{ __html: member.education }} />}
          {member.longBio && <p>{member.longBio}</p>}

          {member.highlights && member.highlights.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {member.highlights.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}

          {member.resume && member.resume.length > 0 && (
            <div className="mt-4 border rounded-lg p-5 bg-muted/30">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Resumen curricular</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                {member.resume.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}

          {member.additionalResumes && member.additionalResumes.length > 0 && (
            <div className="mt-4 border rounded-lg p-5 bg-muted/30">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Resúmenes adicionales</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base">
                {member.additionalResumes.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
