import React from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { Check, Shield, Zap, Star } from 'lucide-react';

const CheckboxesPage = () => {
  return (
    <div className="py-10 px-4">
      {/* Hero Section */}
      <div className="relative mb-20">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#AF6DD6]/5 blur-[100px]"></div>
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          SELECCIÓN <span className="text-[#AF6DD6]">.</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Desde selectores atómicos hasta contenedores interactivos. La arquitectura de Zallar 
          ofrece múltiples niveles de jerarquía visual para la toma de decisiones.
        </p>
      </div>

      {/* 1. SELECCIÓN ATÓMICA (Los básicos refinados) */}
      <ComponentShowcase 
        title="Selectores Atómicos"
        description="La base del sistema. Checkboxes en Púrpura Zallar y Radios en Dorado Zallar con efectos de iluminación."
        color="#D6AF6D"
        code={`{/* Checkbox Estándar */}
<div className="w-6 h-6 border-2 border-white/20 rounded-lg bg-black/40 peer-checked:bg-[#AF6DD6] peer-checked:shadow-[0_0_20px_rgba(175,109,214,0.3)]">
  <Check className="scale-0 peer-checked:scale-100 transition-transform" />
</div>

{/* Radio Estándar */}
<div className="w-6 h-6 border-2 border-white/20 rounded-full peer-checked:border-[#D6AF6D]">
  <div className="w-2.5 h-2.5 bg-[#D6AF6D] scale-0 peer-checked:scale-100 shadow-[0_0_15px_#D6AF6D]" />
</div>`}
      >
        <div className="flex flex-wrap gap-12 items-center">
          {/* Checkbox */}
          <label className="flex items-center gap-4 cursor-pointer group">
            <div className="relative">
              <input type="checkbox" className="peer hidden" defaultChecked />
              <div className="w-6 h-6 border-2 border-white/20 rounded-lg bg-black/40 peer-checked:bg-[#AF6DD6] peer-checked:border-[#AF6DD6] transition-all duration-300 shadow-[0_0_20px_rgba(175,109,214,0)] peer-checked:shadow-[0_0_20px_rgba(175,109,214,0.2)]"></div>
              <Check className="absolute inset-0 m-auto text-white scale-0 peer-checked:scale-100 transition-transform duration-300" size={14} />
            </div>
            <span className="text-white font-bold tracking-tight">Checkbox Activo</span>
          </label>

          {/* Radio */}
          <div className="flex gap-6">
            {['A', 'B'].map((opt) => (
              <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="base-radio" className="peer hidden" defaultChecked={opt === 'A'} />
                <div className="w-6 h-6 border-2 border-white/10 rounded-full bg-black/40 flex items-center justify-center peer-checked:border-[#D6AF6D] transition-all duration-300">
                  <div className="w-2.5 h-2.5 bg-[#D6AF6D] rounded-full scale-0 peer-checked:scale-100 transition-transform duration-300 shadow-[0_0_15px_rgba(214,175,109,0.6)]"></div>
                </div>
                <span className="text-[12px] font-black uppercase tracking-widest text-gray-500 peer-checked:text-[#D6AF6D]">Opción {opt}</span>
              </label>
            ))}
          </div>
        </div>
      </ComponentShowcase>

      {/* 2. BENTO CARDS (Selección de Alto Nivel) */}
      <ComponentShowcase 
        title="Bento Box Selection"
        description="Cuando la opción requiere contexto. Ideal para selección de módulos o configuraciones de seguridad."
        color="#D6AF6D"
        code={`<label className="p-6 bg-[#1A1A1B] border border-white/5 rounded-3xl peer-checked:border-[#AF6DD6] peer-checked:bg-[#AF6DD6]/5">
  {/* Estructura de tarjeta interactiva */}
</label>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
          {[
            { id: 'sec', title: 'Seguridad Zallar', desc: 'Cifrado de grado militar.', icon: <Shield size={20}/> },
            { id: 'perf', title: 'Máximo Rendimiento', desc: 'Prioridad de CPU y Red.', icon: <Zap size={20}/> }
          ].map((item) => (
            <label key={item.id} className="relative group cursor-pointer">
              <input type="checkbox" name="bento-demo" className="peer hidden" />
              <div className="p-6 bg-[#1A1A1B] border border-white/5 rounded-3xl transition-all duration-500 group-hover:border-white/20 peer-checked:border-[#AF6DD6] peer-checked:bg-[#AF6DD6]/5 shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white/5 rounded-lg text-gray-400 group-hover:text-white transition-colors peer-checked:text-[#AF6DD6]">
                    {item.icon}
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center peer-checked:bg-[#AF6DD6] peer-checked:border-[#AF6DD6] transition-all">
                    <Check size={12} className="text-white opacity-0 peer-checked:opacity-100" />
                  </div>
                </div>
                <h4 className="text-white font-bold mb-1">{item.title}</h4>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </ComponentShowcase>

      {/* 3. SEGMENTED CONTROL (Radios Estilo Botón) */}
      <ComponentShowcase 
        title="Segmented Control"
        description="Perfecto para alternar entre estados excluyentes como periodos de facturación o vistas."
        color="#D6AF6D"
        code={`<div className="flex bg-black/60 p-1.5 rounded-2xl border border-white/10">
  {/* Label con fondo animado por peer-checked */}
</div>`}
      >
        <div className="flex bg-black/60 p-1.5 rounded-2xl border border-white/10 w-full max-w-md">
          {['Mensual', 'Anual', 'Lifetime'].map((period) => (
            <label key={period} className="flex-1 relative cursor-pointer group">
              <input type="radio" name="segmented" className="peer hidden" defaultChecked={period === 'Anual'} />
              <div className="relative z-10 py-3 text-center text-[10px] font-black uppercase tracking-widest text-gray-500 transition-all duration-300 peer-checked:text-[#1A1A1B] group-hover:text-white">
                {period}
              </div>
              <div className="absolute inset-0 z-0 bg-transparent rounded-xl peer-checked:bg-[#6DD6AF] transition-all duration-300 shadow-lg shadow-[#6DD6AF]/10"></div>
            </label>
          ))}
        </div>
      </ComponentShowcase>

      {/* 4. NEON MINIMAL (Variante sutil) */}
      <ComponentShowcase 
        title="Neon Minimal Radios"
        description="Para interfaces limpias que solo necesitan un indicador de estado puntual."
        color="#D6AF6D"
      >
        <div className="flex gap-8">
          {['EU-West', 'US-East'].map((region) => (
            <label key={region} className="flex items-center gap-4 cursor-pointer group">
              <input type="radio" name="neon" className="peer hidden" />
              <div className="relative flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/10 peer-checked:bg-[#D6AF6D] transition-all duration-300"></div>
                <div className="absolute w-6 h-6 rounded-full border border-[#D6AF6D] opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-500"></div>
              </div>
              <span className="text-xs font-black uppercase tracking-[2px] text-gray-600 peer-checked:text-white transition-colors">
                {region}
              </span>
            </label>
          ))}
        </div>
      </ComponentShowcase>
    </div>
  );
};

export default CheckboxesPage;