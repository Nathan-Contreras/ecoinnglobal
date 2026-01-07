import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import missionImg from "@/assets/about_section/mision.jpeg";
import visionImg from "@/assets/about_section/vision.jpg";
import valuesImg from "@/assets/about_section/values.jpg";

// 🔹 Fotos de los integrantes
import normandoPhoto1 from "@/assets/team/normando_team1.png";
import ronnyPhoto1 from "@/assets/team/ronny_team1.png";
import angelPhoto1 from "@/assets/team/angel_team1.png";
import tulioPhoto1 from "@/assets/team/tulio_team1.png";

import Profile, { TeamMember as TM } from "@/pages/team/Profile";

const AboutSection = () => {
  const values = [
    {
      title: "Investigación de Mercado Profunda",
      description:
        "Realizamos una investigación exhaustiva del mercado local para entender las necesidades y tendencias actuales, asegurando que los productos que importamos sean altamente relevantes y demandados en Venezuela.",
      color: "bg-primary",
    },
    {
      title: "Sourcing Global Verificado",
      description:
        "Nuestros expertos buscan y validan fábricas líderes en China con una amplia trayectoria en la producción de artículos de alta calidad. Solo trabajamos con proveedores verificados que cumplen con los más altos estándares.",
      color: "bg-secondary",
    },
    {
      title: "Logística Segura y Rápida",
      description:
        "Implementamos un proceso logístico seguro y eficiente que garantiza la llegada rápida de la mercancía.",
      color: "bg-info",
    },
    {
      title: "Entrega Confiable",
      description:
        "Nos encargamos de todos los trámites aduaneros y cumplimos estrictamente con todas las exigencias del régimen legal vigente en Venezuela, dándote total tranquilidad.",
      color: "bg-success",
    },
  ];

  // 🔹 Equipo
  const team: TM[] = [

    {
      slug: "angel-mendez",
      name: "Ángel Méndez",
      bio: "Gerente de Operaciones con 20 años de experiencia en áreas de logística, procesos y proyectos comerciales.",
      longBio:
        "Estudios de Gerencia en el IESA, Magíster en Gerencia de Empresas, Mercadeo de la UNET, Contador Público de la UCAT. Especializado en decisiones estratégicas, implementación de herramientas de control y optimización de la eficiencia operativa. Abriendo horizontes en el sector Retail. Papá, esposo y católico. Apasionado por la cocina y las brasas.",
      education:
        "<em>Estudios de Gerencia en el IESA</em> | <em>Magíster en Gerencia de Empresas, Mercadeo</em> (UNET) | <em>Contador Público</em> (UCAT)",
      highlights: [
        "<strong>Decisiones Estratégicas:</strong> Desarrollo e implementación de decisiones clave para la dirección estratégica de la empresa.",
        "<strong>Optimización de Operaciones:</strong> Implementación de herramientas de control y mejora de la eficiencia operativa.",
        "<strong>Procesos de Negociación:</strong> Amplia experiencia en procesos de negociación en el sector comercial.",
        "<strong>Expansión Retail:</strong> Contribución al crecimiento y apertura de nuevos horizontes en el sector Retail.",
      ],
      resume: [
        "Magíster en Gerencia de Empresas, Mercadeo (UNET).",
        "Contador Público (UCAT).",
        "20 años de experiencia en logística, procesos y proyectos comerciales.",
        "Especializado en decisiones estratégicas y optimización de operaciones.",
        "Papá, esposo, católico y apasionado por la cocina y las brasas.",
      ],
      img: angelPhoto1,  // Asegúrate de que la ruta sea correcta
      colorClass: "bg-primary",
      cvHref: "/assets/cv-angel-mendez.pdf",  // Asegúrate de que la ruta sea correcta
    },

    {
      slug: "ronny-pena",
      name: "Ronny Peña",
      bio: "Licenciado en Administración de Empresas con más de 27 años de experiencia en Empresas Polar y actualmente Director de Ecoinn Global.",
      longBio:
        "Licenciado en Administración de Empresas en la Universidad Rafael Urdaneta (1997), con Especialización en Gerencia Empresarial (Universidad Santa María) y en Recursos Humanos (Universidad Simón Rodríguez). En 2017 obtuvo la especialización en Relaciones Comerciales Internacionales (Universidad Católica del Táchira). Con una larga trayectoria en Empresas Polar, comenzó como Supervisor de Almacén y ascendió hasta Gerente Territorial de Operaciones Comerciales, gestionando diversas áreas como Almacén, Despacho y Gestión Operativa. Actualmente es Director y accionista de Ecoinn Global, una importadora con su propia marca GLOB, especializada en tecnología e innovación.",
      education:
        "<em>Licenciado en Administración de Empresas</em> (Universidad Rafael Urdaneta) | <em>Especialización en Gerencia Empresarial</em> (Universidad Santa María) | <em>Especialización en Recursos Humanos</em> (Universidad Simón Rodríguez) | <em>Especialización en Relaciones Comerciales Internacionales</em> (Universidad Católica del Táchira)",
      highlights: [
        "<strong>Trayectoria en Empresas Polar:</strong> Más de 27 años de experiencia en áreas de Almacén, Despacho y Gestión Operativa.",
        "<strong>Gerencia Ejecutiva:</strong> Gestión y supervisión de operaciones comerciales y corporativas a nivel nacional.",
        "<strong>Director y Accionista:</strong> Actualmente es Director y accionista en Ecoinn Global, con la marca GLOB especializada en tecnología.",
        "<strong>Jubilación Programada:</strong> Cierre de su ciclo laboral en Empresas Polar en 2025 tras una exitosa carrera.",
      ],
      resume: [
        "Licenciado en Administración de Empresas (1997).",
        "Especialización en Gerencia Empresarial (USM).",
        "Especialización en Recursos Humanos (USR).",
        "Especialización en Relaciones Comerciales Internacionales (UCAT).",
        "27 años de experiencia en Empresas Polar en diversas posiciones de liderazgo.",
        "Director y accionista de Ecoinn Global, con marca GLOB en el sector tecnológico.",
        "Jubilación programada para enero 2025 tras una carrera exitosa en Empresas Polar.",
      ],
      img: ronnyPhoto1,  // Asegúrate de que la ruta sea correcta
      colorClass: "bg-info",
      cvHref: "/assets/cv-ronny-pena.pdf",  // Asegúrate de que la ruta sea correcta
    },

    {
      slug: "normando-contreras",
      name: "Normando Contreras",
      bio: "Especialista en cadena de suministro y trámites aduaneros.",
      longBio:
        "Profesional con una sólida trayectoria de más de 25 años en los sectores logístico y comercial, focalizado en empresas de consumo masivo. Combina experiencia práctica con una base académica robusta en administración y finanzas.",
      education:
        "<em>Magíster en Administración, Mención Mercadeo</em> | <em>Especialista en Finanzas</em> / <em>Contador Público</em>",
      highlights: [
        "<strong>Estrategia & Operaciones:</strong> diseño e implementación de estrategias comerciales y logísticas para optimizar la <strong>cadena de suministro</strong>.",
        "<strong>Optimización de procesos de servicio:</strong> eficiencia operativa, reducción de costos y mejora de la experiencia del cliente.",
        "<strong>Finanzas para decisiones:</strong> análisis financiero y rentabilidad para soportar decisiones estratégicas.",
        "<strong>Dominio logístico integral:</strong> almacenamiento, distribución y transporte; gestión comercial orientada a disponibilidad y rotación efectiva.",
      ],
      resume: [
        "Magíster en Administración (Mención Mercadeo).",
        "Especialista en Finanzas. Contador Público colegiado.",
        "+25 años en consumo masivo: logística, supply chain y gestión comercial.",
        "Experto en optimización de procesos y experiencia de cliente.",
        "Diseño de estrategias comerciales y de distribución a nivel nacional.",
        "Liderazgo de equipos y gestión de indicadores (KPI/OKR).",
      ],
      img: normandoPhoto1,
      colorClass: "bg-secondary",
      cvHref: "/assets/cv-normando-contreras.pdf",
    },
    {
      slug: "tulio-mendoza",
      name: "Tulio Mendoza",
      bio: "Experto en trámites aduaneros y control documental.",
      longBio:
        "Profesional con amplia experiencia en el área de aduanas y comercio exterior. Garantiza la correcta gestión de documentos y la conformidad con las normativas vigentes.",
      img: tulioPhoto1,
      colorClass: "bg-success",
      cvHref: "/assets/cv-tulio-mendoza.pdf",
    },
  ];

  const [selectedMember, setSelectedMember] = useState<TM | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openMemberModal = (member: TM) => {
    setSelectedMember(member);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMemberModal = () => {
    setModalOpen(false);
    setSelectedMember(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="space-y-12">
      {/* Misión */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:pr-10 md:border-r md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Misión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Brindar a nuestros clientes acceso a productos de importación de la más alta calidad, ofreciendo un servicio excepcional, precios competitivos y una experiencia de compra que supere sus expectativas.
            </p>
          </div>
          <div className="w-full">
            <img
              src={missionImg}
              alt="Misión"
              className="w-full h-96 object-cover object-left shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Visión */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="order-first md:order-none">
            <img
              src={visionImg}
              alt="Visión"
              className="w-full h-96 object-cover object-left shadow-md"
            />
          </div>
          <div className="md:pl-10 md:border-l md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Visión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ser reconocidos como la empresa líder en importación y distribución de productos especializados en el país, expandiendo nuestro catálogo y presencia nacional para llevar innovación y calidad a cada hogar, mientras construimos relaciones duraderas basadas en la confianza y la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:pr-10 md:border-r md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Nuestros Valores</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Los principios que guían cada una de nuestras acciones y decisiones.
            </p>

            <div className="grid md:grid-cols-1 gap-4">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 mb-3"
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${value.color}`} />
                      <CardTitle className="text-lg">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full">
            <img
              src={valuesImg}
              alt="Valores"
              className="w-full h-96 object-cover object-left shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-3xl font-bold mb-6 text-foreground">Nuestro Equipo</h3>

        <style>{`
          .team-rect { --card-h: 260px; position: relative; height: var(--card-h); border-radius: 0; overflow: hidden; }
          @media (max-width:767px) { .team-rect { --card-h: 240px; } }
          .team-grid { display:grid; grid-template-columns:1fr; gap:1rem; }
          @media (min-width:768px) { .team-grid { grid-template-columns: 1fr 1fr; } }
          .team-photo-wrap { position: absolute; left: 0; top: 0; height: 100%; width: var(--card-h); overflow: hidden; background: transparent; display: block; }
          .team-photo { width: 100%; height: 100%; object-fit: cover; object-position: left center; display: block; }
          .team-gradient-right { position: absolute; inset: 0; z-index: 1; background: linear-gradient(270deg, rgba(0, 0, 0, 0.55) 0%, rgba(0, 0, 0, 0.40) 20%, rgba(0, 0, 0, 0.16) 42%, rgba(0, 0, 0, 0.00) 60%); pointer-events: none; }
          .team-content { position: relative; z-index: 2; height: 100%; margin-left: calc(var(--card-h) + 1rem); padding: 0.75rem 1rem 0.75rem 0.5rem; display: flex; flex-direction: column; justify-content: center; align-items: flex-start; color: rgba(255,255,255,0.97); }
          .arrow-btn { position: absolute; right: 12px; bottom: 12px; z-index: 3; background: rgba(255,255,255,0.12); border-radius: 999px; width: 48px; height: 48px; display: inline-flex; align-items: center; justify-content: center; transition: transform 180ms ease, background 160ms ease; }
          .arrow-btn:hover { transform: translateY(-3px); background: rgba(255,255,255,0.2); }
        `}</style>

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.slug} className={`team-rect ${member.colorClass}`}>
              <div className="team-photo-wrap" aria-hidden>
                <img src={member.img} alt={member.name} className="team-photo" />
              </div>
              <div className="team-gradient-right" />
              <div className="team-content">
                <div className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
                  {member.name}
                </div>
                <p className="mt-2 text-base md:text-lg opacity-95">{member.bio}</p>
              </div>
              <button
                aria-label={`Abrir perfil de ${member.name}`}
                onClick={() => openMemberModal(member)}
                className="arrow-btn"
                title="Ver detalle"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL RESPONSIVE CON SCROLL */}
      {modalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[90vh]">
            {/* Contenido scrollable */}
            <div className="overflow-y-auto max-h-[80vh]"> {/* Aquí añadimos scroll */}
              <Profile member={selectedMember} variant="modal" onClose={closeMemberModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutSection;
