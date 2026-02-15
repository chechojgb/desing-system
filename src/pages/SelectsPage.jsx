import React, { useState } from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { ChevronDown, Globe, Shield, Zap, Check } from 'lucide-react';

const SelectsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Plan Pro");

  const options = [
    { name: "Plan Starter", icon: <Zap size={14} /> },
    { name: "Plan Pro", icon: <Shield size={14} /> },
    { name: "Plan Enterprise", icon: <Globe size={14} /> },
  ];

  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#D6AF6D]/10 blur-[100px]"></div>
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          SELECTS <span className="text-[#AF6DD6]">&</span> DROPDOWNS
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Selectores de opción única y menús desplegables con micro-interacciones 
          y soporte para iconos de estado.
        </p>
      </div>

      {/* 1. SELECT NATIVO ESTILIZADO */}
      <ComponentShowcase 
        title="Select Nativo Zallar"
        description="Una versión refinada del select estándar de HTML. Ligero y funcional para formularios rápidos."
        color="#6DD6AF"
        minHeight="400px"
        code={`<div className="relative">
  <select className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#6DD6AF] transition-all">
    <option>Región: Norteamérica</option>
    <option>Región: Europa</option>
  </select>
  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={18} />
</div>`}
      >
        <div className="w-full max-w-xs relative">
          <select className="w-full bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white appearance-none focus:outline-none focus:border-[#6DD6AF] focus:ring-1 focus:ring-[#6DD6AF]/30 transition-all cursor-pointer">
            <option className="bg-[#1f1f20]">Proyectos Activos</option>
            <option className="bg-[#1f1f20]">Archivados</option>
            <option className="bg-[#1f1f20]">En Revisión</option>
          </select>
          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6DD6AF] pointer-events-none" size={18} />
        </div>
      </ComponentShowcase>

      {/* 2. CUSTOM DROPDOWN (PREMIUM) */}
      <ComponentShowcase 
        title="Custom Select (Premium)"
        description="Componente totalmente personalizado con soporte para iconos y animaciones de entrada."
        color="#6DD6AF"
        minHeight="400px"
        code={`// Estructura de menú desplegable con React State
<div className="relative">
  <button onClick={() => setIsOpen(!isOpen)} className="...">
    {selected} <ChevronDown />
  </button>
  {isOpen && (
    <div className="absolute top-full mt-2 w-full bg-[#1f1f20] border border-white/10 rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
      {options.map(opt => <div className="hover:bg-[#AF6DD6] ...">{opt}</div>)}
    </div>
  )}
</div>`}
      >
        <div className="w-full max-w-xs relative">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-black/40 border border-white/10 rounded-xl py-3 px-4 text-white hover:border-[#AF6DD6] transition-all"
          >
            <span className="flex items-center gap-2 font-medium">
               {options.find(o => o.name === selected)?.icon}
               {selected}
            </span>
            <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#AF6DD6]' : 'text-gray-500'}`} size={18} />
          </button>

          {isOpen && (
            <div className="absolute z-50 top-full left-0 mt-2 w-full bg-[#1A1A1B] border border-white/10 rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
              {options.map((opt) => (
                <div 
                  key={opt.name}
                  onClick={() => { setSelected(opt.name); setIsOpen(false); }}
                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-300 hover:bg-[#AF6DD6] hover:text-white cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    {opt.icon}
                    {opt.name}
                  </div>
                  {selected === opt.name && <Check size={14} className="text-[#6DD6AF]" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </ComponentShowcase>
    </div>
  );
};

export default SelectsPage;