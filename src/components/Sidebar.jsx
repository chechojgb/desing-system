import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Sub-componente para los items colapsables (Sección de Componentes)
const CollapseItem = ({ title, icon, children, activePathPrefix }) => {
  const location = useLocation();
  // Se expande automáticamente si estamos en una ruta que pertenece a este grupo
  const [isExpanded, setIsExpanded] = useState(location.pathname.startsWith(activePathPrefix));

  return (
    <div className="flex flex-col">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={`flex items-center justify-between gap-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 
          ${isExpanded 
            ? 'bg-[#AF6DD6]/10 text-[#AF6DD6]' 
            : 'text-neutral-400 hover:bg-white/5 hover:text-white'
          }`}
      >
        <span className="shrink-0 transition-colors">{icon}</span>
        <span className="mr-auto text-left">{title}</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`size-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
        >
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-1' : 'grid-rows-[0fr] opacity-0'}`}>
        <ul className="overflow-hidden border-l border-white/5 ml-5 space-y-1">
          {children}
        </ul>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Clase para los links normales
  const linkClass = (path) => `
    flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-all
    ${location.pathname === path 
      ? 'bg-[#D6AF6D]/10 text-[#D6AF6D] font-bold shadow-[inset_0_0_10px_rgba(214,175,109,0.05)]' 
      : 'text-neutral-400 hover:bg-white/5 hover:text-white'}
  `;

  // Clase para los sub-links
  const subLinkClass = (path) => `
    block py-2 pl-4 text-sm transition-all
    ${location.pathname === path ? 'text-[#6DD6AF] font-bold' : 'text-neutral-500 hover:text-[#6DD6AF]'}
  `;

  return (
    <>
      {/* Overlay Móvil con Blur Zallar */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-30 bg-[#1A1A1B]/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Navegación Sidebar */}
      <nav className={`
        fixed left-0 z-40 flex h-[calc(100vh-64px)] w-64 flex-col border-r border-white/5 bg-[#1A1A1B] p-4 
        transition-transform duration-300 md:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        <div className="flex flex-1 flex-col gap-6 overflow-y-auto custom-scrollbar">
          
          {/* SECCIÓN: FUNDAMENTOS */}
          <div className="space-y-1">
            <h3 className="px-3 text-[10px] font-bold uppercase tracking-[2px] text-neutral-600 mb-2">Fundamentos</h3>
            
            <Link to="/documentacion" className={linkClass('/documentacion')}>
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Introducción
            </Link>

            <Link to="/tokens/colors" className={linkClass('/tokens/colors')}>
              <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
              Colores Zallar
            </Link>
          </div>

          {/* SECCIÓN: LIBRERÍA (Colapsable) */}
          <div className="space-y-1">
            <h3 className="px-3 text-[10px] font-bold uppercase tracking-[2px] text-neutral-600 mb-2">Librería</h3>
            
            <CollapseItem 
              title="Componentes" 
              activePathPrefix="/componentes"
              icon={<svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
            >
              <li><Link to="/componentes/botones" className={subLinkClass('/componentes/botones')}>Botones</Link></li>
              <li><Link to="/componentes/inputs" className={subLinkClass('/componentes/inputs')}>Inputs & Form</Link></li>
              <li><Link to="/componentes/cards" className={subLinkClass('/componentes/cards')}>Tarjetas</Link></li>
              <li><Link to="/componentes/modales" className={subLinkClass('/componentes/modales')}>Modales</Link></li>
            </CollapseItem>

            <CollapseItem 
              title="Layouts" 
              activePathPrefix="/layouts"
              icon={<svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7" /></svg>}
            >
              <li><Link to="/layouts/grids" className={subLinkClass('/layouts/grids')}>Sistemas de Grid</Link></li>
              <li><Link to="/layouts/navbars" className={subLinkClass('/layouts/navbars')}>Navegación</Link></li>
            </CollapseItem>
          </div>

        </div>


      </nav>

      {/* Botón Flotante para Móvil */}
      <button 
        onClick={() => setIsSidebarOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#AF6DD6] text-white shadow-lg md:hidden"
      >
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
      </button>
    </>
  );
};

export default Sidebar;