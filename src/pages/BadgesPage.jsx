import React from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { ShieldCheck, Zap, Star, Clock } from 'lucide-react';

const BadgesPage = () => {
  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          BADGES <span className="text-[#D6AF6D]">.</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Pequeños indicadores visuales para estados, categorías y niveles de cuenta.
        </p>
      </div>

      {/* 1. BADGES DE IDENTIDAD (Estilo Gold) */}
      <ComponentShowcase 
        title="Badges de Nivel Superior"
        description="Diseñados para destacar planes de suscripción o cuentas con privilegios especiales."
        color="#D6AF6D"
        code={`<div className="px-3 py-1 bg-[#D6AF6D]/10 border border-[#D6AF6D]/50 rounded-full flex items-center gap-2">
  <Star size={12} className="text-[#D6AF6D]" />
  <span className="text-[10px] font-black uppercase tracking-widest text-[#D6AF6D]">Zallar Gold</span>
</div>`}
      >
        <div className="flex flex-wrap gap-4">
          <div className="px-4 py-1.5 bg-[#D6AF6D]/10 border border-[#D6AF6D]/30 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(214,175,109,0.1)]">
            <Star size={14} className="text-[#D6AF6D] fill-[#D6AF6D]/20" />
            <span className="text-[11px] font-black uppercase tracking-[1.5px] text-[#D6AF6D]">Gold Member</span>
          </div>

          <div className="px-4 py-1.5 bg-[#AF6DD6]/10 border border-[#AF6DD6]/30 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(175,109,214,0.1)]">
            <Zap size={14} className="text-[#AF6DD6] fill-[#AF6DD6]/20" />
            <span className="text-[11px] font-black uppercase tracking-[1.5px] text-[#AF6DD6]">Pro Plan</span>
          </div>
        </div>
      </ComponentShowcase>

      {/* 2. STATUS BADGES (Estilo Glass) */}
      <ComponentShowcase 
        title="Etiquetas de Estado"
        description="Indicadores sutiles para el ciclo de vida de los procesos en el sistema."
        color="#6DD6AF"
        code={`<span className="bg-[#6DD6AF]/10 text-[#6DD6AF] border border-[#6DD6AF]/20 px-3 py-1 rounded-md text-[10px] font-bold">
  ACTIVE
</span>`}
      >
        <div className="flex flex-wrap gap-4">
          <span className="flex items-center gap-1.5 bg-[#6DD6AF]/10 text-[#6DD6AF] border border-[#6DD6AF]/20 px-3 py-1 rounded-lg text-[10px] font-black tracking-tighter">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6DD6AF] animate-pulse"></div>
            ONLINE
          </span>
          
          <span className="flex items-center gap-1.5 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-lg text-[10px] font-black tracking-tighter">
            <Clock size={12} />
            PENDIENTE
          </span>

          <span className="flex items-center gap-1.5 bg-white/5 text-gray-400 border border-white/10 px-3 py-1 rounded-lg text-[10px] font-black tracking-tighter uppercase">
            Archivado
          </span>
        </div>
      </ComponentShowcase>

      {/* 3. ICON ONLY BADGES */}
      <ComponentShowcase 
        title="Indicadores Compactos"
        description="Versión minimalista para interfaces con alta densidad de información."
        color="#AF6DD6"
        code={`<div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#AF6DD6]">
  <ShieldCheck size={16} />
</div>`}
      >
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#AF6DD6]/10 border border-[#AF6DD6]/30 flex items-center justify-center text-[#AF6DD6] shadow-lg shadow-[#AF6DD6]/10">
            <ShieldCheck size={20} />
          </div>
          <div className="w-10 h-10 rounded-xl bg-[#D6AF6D]/10 border border-[#D6AF6D]/30 flex items-center justify-center text-[#D6AF6D] shadow-lg shadow-[#D6AF6D]/10">
            <Star size={20} />
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};

export default BadgesPage;