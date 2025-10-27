import React, { useState } from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTiktok, FaShareAlt, FaTimes } from "react-icons/fa";

const socials = [
  {
    id: "whatsapp",
    href: "https://wa.me/584127917318",
    label: "WhatsApp",
    icon: FaWhatsapp,
  },
  {
    id: "instagram",
    href: "https://instagram.com/ecoinnglobal",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    id: "tiktok",
    href: "https://tiktok.com/@ecoinnglobalvzla",
    label: "TikTok",
    icon: FaTiktok,
  },
  {
    id: "linkedin",
    href: "https://linkedin.com/company/ecoinn-global",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

const FloatingSocials: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-3">
      {/* Social links - show when open */}
      <div className={`flex flex-col items-end gap-3 ${open ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-2"} transition-all`}>
        {socials.map((s) => {
          const Icon = s.icon;
          return (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-primary shadow-lg hover:scale-105 transform transition"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

      {/* Toggle button */}
      <button
        aria-expanded={open}
        aria-label={open ? "Cerrar redes sociales" : "Abrir redes sociales"}
        onClick={() => setOpen((v) => !v)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center hover:scale-105 transform transition"
      >
        {open ? <FaTimes className="w-5 h-5" /> : <FaShareAlt className="w-5 h-5" />}
      </button>
    </div>
  );
};

export default FloatingSocials;
