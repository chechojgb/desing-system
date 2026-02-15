import React from 'react';
import { ExternalLink, ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ComponentShowcase from '../components/docs/ComponentShowcase';


const LinksPage = () => {
  return (
    <div className="py-10 px-6 max-w-5xl mx-auto">
      <header className="mb-16">
        <div className="text-[#AF6DD6] font-mono text-sm mb-2 font-bold tracking-widest uppercase">Componentes Atómicos</div>
        <h1 className="text-5xl font-black text-white tracking-tighter mb-4">ENLACES <span className="text-[#D6AF6D]">.</span></h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
          Sistemas de navegación textual con micro-interacciones. Desde enlaces sutiles dentro de párrafos hasta llamadas a la acción con iconos.
        </p>
      </header>

      {/* 1. ENLACES CON SUBRAYADO ANIMADO */}
    <ComponentShowcase 
    title="Subrayado Animado (Zallar Underline)"
    description="El estándar para enlaces dentro de bloques de texto. El subrayado crece desde el centro al hacer hover."
    color="#AF6DD6" // Aquí defines el color del acento para esta card
    code={`<Link to="#" className="relative text-[#AF6DD6] font-medium group">
    Explorar documentación
    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#AF6DD6] transition-all duration-300 group-hover:w-full"></span>
</Link>`}
    >
    <Link to="#" className="relative text-[#AF6DD6] font-medium group text-lg">
        Explorar documentación
        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#AF6DD6] transition-all duration-300 group-hover:w-full"></span>
    </Link>

    <Link to="#" className="relative text-[#D6AF6D] font-medium group text-lg">
        Ver planes premium
        <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#D6AF6D] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
    </ComponentShowcase>

      {/* 2. ENLACES CON ICONOS DINÁMICOS */}
    <ComponentShowcase 
title="Enlaces con Iconos"
description="Ideales para redirecciones externas o pasos siguientes en un flujo."
color="#AF6DD6" // Aquí defines el color del acento para esta card
code={`<Link to="#" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
    Ir al dashboard
    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
</Link>`}
>
    <Link to="#" className="flex items-center gap-2 text-gray-400 hover:text-[#6DD6AF] transition-all group font-bold">
        Ir al dashboard
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
    </Link>

    <Link to="#" className="flex items-center gap-2 text-[#D6AF6D] hover:underline font-bold">
        Visitar sitio oficial
        <ExternalLink className="size-4" />
    </Link>
    </ComponentShowcase>

    {/* 3. BREADCRUMBS STYLE */}    
    <ComponentShowcase 
    title="Navegación en Línea (Breadcrumbs)"
    description="Para indicar jerarquía de rutas dentro del SaaS."
    color="#AF6DD6" // Aquí defines el color del acento para esta card
code={`<div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-white/5 px-6 py-3 rounded-full border border-white/10">
    <Link to="#" className="hover:text-white transition-colors">SaaS</Link>
    <ChevronRight size={14} className="text-gray-700" />
    <Link to="#" className="hover:text-white transition-colors">Componentes</Link>
    <ChevronRight size={14} className="text-gray-700" />
    <span className="text-[#AF6DD6] font-bold">Enlaces</span>
</div>`}
>
        <div className="flex items-center gap-2 text-sm font-medium text-gray-500 bg-white/5 px-6 py-3 rounded-full border border-white/10">
          <Link to="#" className="hover:text-white transition-colors">SaaS</Link>
          <ChevronRight size={14} className="text-gray-700" />
          <Link to="#" className="hover:text-white transition-colors">Componentes</Link>
          <ChevronRight size={14} className="text-gray-700" />
          <span className="text-[#AF6DD6] font-bold">Enlaces</span>
        </div>
    </ComponentShowcase>



      

    </div>
  );
};

export default LinksPage;
