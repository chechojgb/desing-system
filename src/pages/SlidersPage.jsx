import React, { useState } from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';

const SlidersPage = () => {
  const [value1, setValue1] = useState(45);
  const [value2, setValue2] = useState(72);

  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          SLIDERS <span className="text-[#D6AF6D]">-</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Controladores de rango de alta precisión con feedback visual dinámico y 
          estética de consola analógica.
        </p>
      </div>

      {/* 1. SLIDER ESTÁNDAR (Púrpura Zallar) */}
      <ComponentShowcase 
        title="Range Controller"
        description="Ideal para ajustes generales. La barra se ilumina proporcionalmente al valor seleccionado."
        color="#6DD6AF"
        code={`<input 
  type="range" 
  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#AF6DD6]" 
/>`}
      >
        <div className="w-full max-w-md space-y-4">
          <div className="flex justify-between items-end">
            <label className="text-[10px] font-black uppercase tracking-[2px] text-gray-500">Volumen del Sistema</label>
            <span className="text-[#AF6DD6] font-mono font-bold">{value1}%</span>
          </div>
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer 
              accent-[#AF6DD6] hover:accent-[#c18dec] transition-all
              [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
              [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white 
              [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(175,109,214,0.8)]"
          />
        </div>
      </ComponentShowcase>

      {/* 2. GLOW SLIDER (Dorado / High Priority) */}
      <ComponentShowcase 
        title="High-Precision Dial"
        description="Una variante con un 'thumb' más grande y un resplandor dorado intenso para parámetros críticos."
        color="#6DD6AF"
        code={`/* Custom style para el slider dorado con efecto de brillo */
<input className="accent-[#D6AF6D] shadow-[0_0_15px_rgba(214,175,109,0.2)]" />`}
      >
        <div className="w-full max-w-md p-8 bg-black/40 border border-white/5 rounded-3xl">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-[10px] font-black text-[#D6AF6D] uppercase tracking-[4px] mb-1">Potencia de Salida</div>
              <div className="text-4xl font-black text-white tracking-tighter">{value2}<span className="text-sm text-[#D6AF6D] ml-1">kW</span></div>
            </div>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              className="w-full h-3 bg-black/60 rounded-full appearance-none cursor-pointer
                [&::-webkit-slider-runnable-track]:rounded-full
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:w-6
                [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-[#D6AF6D]
                [&::-webkit-slider-thumb]:shadow-[0_0_20px_#D6AF6D]
                [&::-webkit-slider-thumb]:border-4
                [&::-webkit-slider-thumb]:border-[#1A1A1B]
                [&::-webkit-slider-thumb]:transition-transform
                [&::-webkit-slider-thumb]:active:scale-125"
            />
            <div className="flex justify-between text-[9px] font-bold text-gray-600 uppercase tracking-widest">
              <span>Min</span>
              <span>Optimal</span>
              <span>Max</span>
            </div>
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};

export default SlidersPage;