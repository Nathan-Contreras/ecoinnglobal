import React from "react";

export interface TeamMember {
  slug: string;
  name: string;
  bio: string;
  longBio: string;
  img: string;
  colorClass?: string;
  role?: string;
  cvHref?: string;

  // Campos extendidos para información rica
  highlights?: string[]; // bullets principales (acepta HTML)
  resume?: string[];     // resumen curricular (texto plano)
  education?: string;    // línea inicial con títulos (acepta HTML)
}

type Variant = "page" | "modal";

interface ProfileProps {
  member: TeamMember;
  variant?: Variant;
  onClose?: () => void;
}

const Profile: React.FC<ProfileProps> = ({ member, variant = "page", onClose }) => {
  const isPage = variant === "page";
  const cvUrl = member.cvHref ?? `/assets/cv-${member.slug}.pdf`;

  return (
    <div
      className={
        isPage
          ? "max-w-5xl w-full bg-white rounded-xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-2"
          : "w-full bg-white overflow-hidden grid grid-cols-1 md:grid-cols-2"
      }
    >
      {/* FOTO */}
      <div className={isPage ? "h-96 md:h-auto" : "h-full w-full md:h-auto md:w-full"}>
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENIDO */}
      <div className="p-8 relative">
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

        <h2 className="text-3xl md:text-4xl font-bold mb-1">{member.name}</h2>
        {member.role && (
          <p className="text-sm md:text-base text-muted-foreground mb-5">{member.role}</p>
        )}

        <div className="text-base md:text-lg leading-relaxed space-y-4">
          {/* Línea de formación (HTML permitido) */}
          {member.education && (
            <p dangerouslySetInnerHTML={{ __html: member.education }} />
          )}

          {/* Biografía larga */}
          {member.longBio && <p>{member.longBio}</p>}

          {/* Bullets principales (HTML permitido) */}
          {member.highlights && member.highlights.length > 0 && (
            <ul className="list-disc pl-5 space-y-2">
              {member.highlights.map((item, i) => (
                <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          )}

          {/* Resumen curricular */}
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
        </div>

        {/* BOTONES */}
        <div className="mt-6 flex gap-3">
          {cvUrl && (
            <a
              href={cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md"
            >
              Descargar CV
            </a>
          )}

          {!isPage && onClose && (
            <button
              onClick={onClose}
              className="inline-flex items-center px-4 py-2 border border-border rounded-md"
            >
              Cerrar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
