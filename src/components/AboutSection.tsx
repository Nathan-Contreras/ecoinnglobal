import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

import missionImg from '@/assets/about_section/mision.jpg';
import visionImg from '@/assets/about_section/vision.jpg';
import valuesImg from '@/assets/about_section/vision.jpg';

const AboutSection = () => {
  const values = [
    {
      title: "Investigación de Mercado Profunda",
      description: "Realizamos una investigación exhaustiva del mercado local para entender las necesidades y tendencias actuales, asegurando que los productos que importamos sean altamente relevantes y demandados en Venezuela.",
      color: "bg-primary"
    },
    {
      title: "Sourcing Global Verificado",
      description: "Nuestros expertos buscan y validan fábricas líderes en China con una amplia trayectoria en la producción de artículos de alta calidad. Solo trabajamos con proveedores verificados que cumplen con los más altos estándares.",
      color: "bg-secondary"
    },
    {
      title: "Logística Segura y Rápida",
      description: "Implementamos un proceso logístico seguro y eficiente que garantiza la llegada rápida de la mercancía.",
      color: "bg-info"
    },
    {
      title: "Entrega Confiable",
      description: "Nos encargamos de todos los trámites aduaneros y cumplimos estrictamente con todas las exigencias del régimen legal vigente en Venezuela, dándote total tranquilidad.",
      color: "bg-success"
    }
  ];

  // Equipo: imágenes en /public/assets/team-1.jpg .. team-4.jpg (reemplazar por fotos reales)
  const team = [
    {
      slug: "angel-mendez",
      name: "Ángel Méndez",
      bio: "Profesional con amplia experiencia en gestión empresarial y comercio internacional.",
      longBio:
        "Profesional con amplia experiencia en gestión empresarial y comercio internacional. Responsable de la dirección estratégica y operativa de la compañía, con foco en expansión y relaciones comerciales.",
      img: "/assets/team-1.jpg",
      colorClass: "bg-primary"
    },
    {
      slug: "normando-contreras",
      name: "Normando Contreras",
      bio: "Especialista en cadena de suministro y trámites aduaneros.",
      longBio:
        "Especialista en cadena de suministro y trámites aduaneros, con amplia trayectoria en operaciones internacionales y coordinación logística.",
      img: "@/assets/team/normando_contreras.png",
      colorClass: "bg-secondary"
    },
    {
      slug: "maria-lopez",
      name: "María López",
      bio: "Líder en control de calidad y aseguramiento de productos.",
      longBio:
        "Líder en control de calidad y aseguramiento de productos, experta en procesos de inspección y certificación para cadenas de suministro.",
      img: "/assets/team-3.jpg",
      colorClass: "bg-info"
    },
    {
      slug: "roberto-silva",
      name: "Roberto Silva",
      bio: "Experto en operaciones logísticas y distribución nacional.",
      longBio:
        "Experto en operaciones logísticas y distribución nacional, responsable de la planificación y ejecución de entregas a nivel nacional.",
      img: "/assets/team-4.jpg",
      colorClass: "bg-success"
    }
  ];

  // --- Nuevo estado para modal interno ---
  const [selectedMember, setSelectedMember] = useState<typeof team[number] | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openMemberModal = (member: typeof team[number]) => {
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
      {/* Misión: texto a la izquierda, imagen grande a la derecha */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:pr-10 md:border-r md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Misión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Brindar a nuestros clientes acceso a productos de importación de la más alta calidad, ofreciendo un servicio excepcional, precios competitivos y una experiencia de compra que supere sus expectativas. Nos comprometemos a ser el puente entre los mejores fabricantes internacionales y el mercado local.
            </p>
          </div>

          <div className="w-full">
            <img src={missionImg} alt="Misión" className="w-full h-96 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Visión: imagen a la izquierda, texto a la derecha (alternado) */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="order-first md:order-none">
            <img src={visionImg} alt="Visión" className="w-full h-96 object-cover rounded-lg shadow-md" />
          </div>

          <div className="md:pl-10 md:border-l md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Visión</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ser reconocidos como la empresa líder en importación y distribución de productos especializados en el país, expandiendo nuestro catálogo y presencia nacional para llevar innovación y calidad a cada hogar, mientras construimos relaciones duraderas basadas en la confianza y la excelencia.
            </p>
          </div>
        </div>
      </section>

      {/* Valores: vuelve a alternar (texto izquierda, imagen derecha) */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="md:pr-10 md:border-r md:border-gray-200">
            <h3 className="text-3xl font-bold mb-4">Nuestros Valores</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Los principios que guían cada una de nuestras acciones y decisiones.
            </p>

            <div className="grid md:grid-cols-1 gap-4">
              {values.map((value, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 mb-3">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${value.color}`}></div>
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
            <img src={valuesImg} alt="Valores" className="w-full h-96 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Nuestro Equipo: dos columnas, rectángulos con foto integrada (abre modal interno) */}
      <section className="container mx-auto px-4 py-8">
        <h3 className="text-3xl font-bold mb-6 text-foreground">Nuestro Equipo</h3>

        <style>{`
          .team-grid { display:grid; grid-template-columns:1fr; gap:1rem; }
          @media (min-width:768px) { .team-grid { grid-template-columns: 1fr 1fr; } }
          .team-rect { display:flex; border-radius:12px; overflow:hidden; align-items:stretch; min-height:160px; }
          .team-photo-wrap { flex:0 0 42%; min-height:160px; overflow:hidden; }
          .team-photo { width:100%; height:100%; object-fit:cover; display:block; }
          .team-content { flex:1; padding:1.25rem; display:flex; flex-direction:column; justify-content:center; color:rgba(255,255,255,0.95); }
          .arrow-btn { margin-left:auto; background: rgba(255,255,255,0.12); border-radius:999px; width:40px; height:40px; display:inline-flex; align-items:center; justify-content:center; transition: transform 180ms ease, background 160ms ease; }
          .arrow-btn:hover { transform: translateY(-3px); background: rgba(255,255,255,0.18); }
        `}</style>

        <div className="team-grid">
          {team.map((member) => (
            <div key={member.slug} className={`team-rect ${member.colorClass}`}>
              <div className="team-photo-wrap" aria-hidden>
                <img src={member.img} alt={member.name} className="team-photo" />
              </div>

              <div className="team-content">
                <div className="flex items-start gap-4">
                  <div>
                    <div className="text-2xl font-bold">{member.name}</div>
                  </div>

                  {/* Abre modal interno */}
                  <button
                    aria-label={`Abrir perfil de ${member.name}`}
                    onClick={() => openMemberModal(member)}
                    className="arrow-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                <p className="mt-3 text-sm max-w-prose opacity-95">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Modal interno para perfil del miembro --- */}
      {modalOpen && selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-5xl bg-white rounded-lg shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
            {/* Imagen grande a la izquierda */}
            <div className="h-64 md:h-auto">
              <img src={selectedMember.img} alt={selectedMember.name} className="w-full h-full object-cover" />
            </div>

            {/* Contenido a la derecha */}
            <div className="p-6 md:p-8 relative">
              <button
                onClick={closeMemberModal}
                className="absolute top-4 right-4 p-2 rounded-full text-muted-foreground hover:bg-muted/10"
                aria-label="Cerrar perfil"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <h2 className="text-2xl font-bold mb-1">{selectedMember.name}</h2>

              <div className="text-sm leading-relaxed mb-6">
                <p>{selectedMember.longBio}</p>
                {/* Puedes extender con más contenido curricular aquí */}
              </div>

              <div className="flex gap-3">
                <a
                  href={`/assets/cv-${selectedMember.slug}.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded hover:opacity-95"
                >
                  Descargar CV
                </a>

                <button
                  onClick={closeMemberModal}
                  className="inline-flex items-center px-4 py-2 border border-border rounded"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ...existing other sections below ... */}
    </div>
  );
};

export default AboutSection;