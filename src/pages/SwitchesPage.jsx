import React from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { Zap, Moon, Bell, Shield } from 'lucide-react';

const SwitchesPage = () => {
  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          SWITCHES <span className="text-[#6DD6AF]">/</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Interruptores de alta fidelidad para cambios de estado instantáneos con retroalimentación visual táctil.
        </p>
      </div>

      {/* 1. SWITCH ESTÁNDAR (Púrpura Identity) */}
      <ComponentShowcase 
        title="Identity Switch"
        description="El estándar para preferencias de usuario. El tirador (thumb) tiene un efecto de relieve sutil."
        color="#6DD6AF"
        code={`<label className="relative inline-flex items-center cursor-pointer group">
  <input type="checkbox" className="sr-only peer" defaultChecked />
  <div className="w-14 h-7 bg-white/10 rounded-full peer peer-checked:bg-[#AF6DD6] transition-all duration-500 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:after:translate-x-7 shadow-inner"></div>
</label>`}
      >
        <div className="flex flex-col gap-6">
          <label className="relative inline-flex items-center cursor-pointer group">
            <input type="checkbox" className="sr-only peer" defaultChecked />
            <div className="w-14 h-7 bg-white/10 rounded-full peer 
              peer-checked:bg-[#AF6DD6] 
              transition-all duration-500 
              after:content-[''] after:absolute after:top-[4px] after:left-[4px] 
              after:bg-white after:rounded-full after:h-[21px] after:w-[21px] 
              after:transition-all after:duration-500
              peer-checked:after:translate-x-7 
              peer-checked:after:shadow-[0_0_15px_rgba(255,255,255,0.8)]
              border border-white/5 shadow-inner">
            </div>
            <span className="ml-4 text-sm font-bold text-gray-400 peer-checked:text-white transition-colors uppercase tracking-widest">Notificaciones</span>
          </label>
        </div>
      </ComponentShowcase>

      {/* 2. GLOW SWITCH (Dorado System) */}
      <ComponentShowcase 
        title="System Glow Switch"
        description="Para configuraciones críticas. Emite un resplandor dorado cuando está activo, simulando hardware real."
        color="#6DD6AF"
        code={`{/* Variación con resplandor exterior dinámico */}
<div className="peer-checked:bg-[#D6AF6D] peer-checked:shadow-[0_0_20px_rgba(214,175,109,0.4)]"></div>`}
      >
        <label className="relative inline-flex items-center cursor-pointer group">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-16 h-8 bg-black/40 border border-white/10 rounded-full peer 
            peer-checked:bg-[#D6AF6D]/20 
            peer-checked:border-[#D6AF6D]/50
            transition-all duration-500 
            after:content-[''] after:absolute after:top-[5px] after:left-[5px] 
            after:bg-gray-600 after:rounded-full after:h-[22px] after:w-[22px] 
            after:transition-all after:duration-500
            peer-checked:after:translate-x-8 
            peer-checked:after:bg-[#D6AF6D]
            peer-checked:after:shadow-[0_0_20px_#D6AF6D]
            shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
          </div>
          <div className="ml-4">
            <div className="text-[10px] font-black text-[#D6AF6D] uppercase tracking-[2px] leading-none mb-1">Modo Seguro</div>
            <div className="text-[9px] text-gray-500 font-medium uppercase tracking-wider">Cifrado AES-256</div>
          </div>
        </label>
      </ComponentShowcase>

      {/* 3. ICON TOGGLE (Verde Status) */}
      <ComponentShowcase 
        title="Status Icon Toggle"
        description="Incluye iconos internos para dar contexto inmediato a la acción."
        color="#6DD6AF"
        code={`<label className="relative inline-flex items-center cursor-pointer group">
    <input type="checkbox" className="sr-only peer" defaultChecked />
    <div className="w-16 h-8 bg-white/5 border border-white/10 rounded-full peer 
    peer-checked:bg-[#6DD6AF]/10
    transition-all duration-500 
    after:content-[''] after:absolute after:top-[4px] after:left-[4px] 
    after:bg-white/10 after:rounded-full after:h-[24px] after:w-[24px] 
    after:transition-all after:duration-500
    peer-checked:after:translate-x-8 
    peer-checked:after:bg-[#6DD6AF]
    flex items-center justify-between px-2">
    <Moon size={14} className="text-gray-600 z-10" />
    <Zap size={14} className="text-gray-600 z-10" />
    </div>
    <span className="ml-4 text-xs font-black text-gray-400 peer-checked:text-[#6DD6AF] transition-colors tracking-tighter">TURBO MODE</span>
</label>`}
      >
        <label className="relative inline-flex items-center cursor-pointer group">
          <input type="checkbox" className="sr-only peer" defaultChecked />
          <div className="w-16 h-8 bg-white/5 border border-white/10 rounded-full peer 
            peer-checked:bg-[#6DD6AF]/10
            transition-all duration-500 
            after:content-[''] after:absolute after:top-[4px] after:left-[4px] 
            after:bg-white/10 after:rounded-full after:h-[24px] after:w-[24px] 
            after:transition-all after:duration-500
            peer-checked:after:translate-x-8 
            peer-checked:after:bg-[#6DD6AF]
            flex items-center justify-between px-2">
            <Moon size={14} className="text-gray-600 z-10" />
            <Zap size={14} className="text-gray-600 z-10" />
          </div>
          <span className="ml-4 text-xs font-black text-gray-400 peer-checked:text-[#6DD6AF] transition-colors tracking-tighter">TURBO MODE</span>
        </label>
      </ComponentShowcase>
    </div>
  );
};

export default SwitchesPage;