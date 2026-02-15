import React from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { Info, HelpCircle, Settings } from 'lucide-react';

const Tooltip = ({ text, position = "top", children, color = "#AF6DD6" }) => {
  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-3",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-3",
    left: "right-full top-1/2 -translate-y-1/2 mr-3",
    right: "left-full top-1/2 -translate-y-1/2 ml-3"
  };

  const arrowClasses = {
    top: "top-full left-1/2 -translate-x-1/2 border-t-black/80",
    bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-black/80",
    left: "left-full top-1/2 -translate-y-1/2 border-l-black/80",
    right: "right-full top-1/2 -translate-y-1/2 border-r-black/80"
  };

  return (
    <div className="relative group inline-block">
      {children}
      {/* El Tooltip */}
      <div className={`absolute z-50 hidden group-hover:flex flex-col items-center animate-tooltip ${positionClasses[position]}`}>
        <div className="bg-black/80 backdrop-blur-md text-white text-[11px] font-bold py-1.5 px-3 rounded-lg border border-white/10 whitespace-nowrap shadow-2xl">
          {text}
        </div>
        {/* Flecha */}
        <div className={`w-0 h-0 border-[6px] border-transparent ${arrowClasses[position]}`}></div>
      </div>
    </div>
  );
};

const TooltipsPage = () => {
  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          TOOLTIPS <span className="text-[#AF6DD6]">?</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Pequeños contenedores informativos que aparecen al interactuar con elementos, 
          ideales para guiar al usuario en el SaaS de Zallar.
        </p>
      </div>

      {/* EJEMPLO 1: POSICIONES */}
      <ComponentShowcase 
        title="Posicionamiento Dinámico"
        description="Los tooltips pueden aparecer en los cuatro ejes cardinales según el espacio disponible."
        color="#AF6DD6"
        code={`<Tooltip text="Tooltip arriba" position="top">
  <button className="...">Arriba</button>
</Tooltip>`}
      >
        <div className="flex flex-wrap gap-12 justify-center">
          <Tooltip text="Información útil arriba" position="top">
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#AF6DD6] hover:bg-[#AF6DD6] hover:text-white transition-all">
              <Info size={20} />
            </button>
          </Tooltip>

          <Tooltip text="Configuración abajo" position="bottom">
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#D6AF6D] hover:bg-[#D6AF6D] hover:text-[#1A1A1B] transition-all">
              <Settings size={20} />
            </button>
          </Tooltip>

          <Tooltip text="Ayuda a la derecha" position="right">
            <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#6DD6AF] hover:bg-[#6DD6AF] hover:text-[#1A1A1B] transition-all">
              <HelpCircle size={20} />
            </button>
          </Tooltip>
        </div>
      </ComponentShowcase>

      {/* EJEMPLO 2: ESTILO ZALLAR PREMIUM */}
      <ComponentShowcase 
        title="Variante de Estilo"
        description="Tooltip oscuro con bordes suaves y tipografía compacta para un look minimalista."
        color="#AF6DD6"
        code={`<Tooltip text="Guardar cambios en el servidor" position="top">
  <button className="bg-[#6DD6AF] ...">Guardar</button>
</Tooltip>`}
      >
        <Tooltip text="Guardar cambios en el servidor" position="top">
          <button className="bg-[#6DD6AF] text-[#1A1A1B] px-8 py-3 rounded-xl font-bold shadow-lg shadow-[#6DD6AF]/20 active:scale-95 transition-all">
            Acción con Tooltip
          </button>
        </Tooltip>
      </ComponentShowcase>
    </div>
  );
};

export default TooltipsPage;