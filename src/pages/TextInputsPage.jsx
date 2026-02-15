import React from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { Mail, Lock, Search, AlertCircle, User, Globe } from 'lucide-react';

const TextInputsPage = () => {
  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#6DD6AF]/5 blur-[100px]"></div>
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          INPUTS <span className="text-[#6DD6AF]">_</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Campos de entrada diseñados para una captura de datos fluida, con feedback visual 
          inmediato y soporte para iconos.
        </p>
      </div>

      {/* 1. INPUTS CON ICONOS */}
      <ComponentShowcase 
        title="Entradas con Iconos"
        description="El uso de iconos ayuda al usuario a identificar el tipo de dato rápidamente (Email, Password, User)."
        color="#6DD6AF"
        code={`<div className="relative group">
  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#6DD6AF] transition-colors" size={20} />
  <input 
    type="email" 
    placeholder="correo@zallar.com"
    className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#6DD6AF] focus:ring-1 focus:ring-[#6DD6AF]/50 transition-all"
  />
</div>`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          <div className="relative group">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#6DD6AF] transition-colors" size={20} />
            <input type="email" placeholder="Email Address" className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#6DD6AF] focus:ring-1 focus:ring-[#6DD6AF]/50 transition-all" />
          </div>
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-[#AF6DD6] transition-colors" size={20} />
            <input type="password" placeholder="Password" className="w-full bg-black/40 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white focus:outline-none focus:border-[#AF6DD6] focus:ring-1 focus:ring-[#AF6DD6]/50 transition-all" />
          </div>
        </div>
      </ComponentShowcase>

      {/* 2. ESTADOS DE VALIDACIÓN */}
      <ComponentShowcase 
        title="Validación y Errores"
        description="Feedback visual crítico para cuando algo no va bien. Usamos rojos suaves para no estresar al usuario."
        color="#6DD6AF"
        code={`<div className="space-y-2">
  <div className="relative">
    <input className="w-full bg-black/40 border border-red-500/50 ..."/>
    <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" />
  </div>
  <p className="text-red-500 text-xs font-medium">Este campo es obligatorio</p>
</div>`}
      >
        <div className="w-full max-w-sm space-y-2">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Nombre de Usuario</label>
          <div className="relative">
            <input 
              type="text" 
              defaultValue="zallar_user_99"
              className="w-full bg-red-500/5 border border-red-500/50 rounded-xl py-3 px-4 text-white focus:outline-none transition-all" 
            />
            <AlertCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
          </div>
          <p className="text-red-400 text-xs italic ml-1 flex items-center gap-1">
            El nombre de usuario ya está en uso.
          </p>
        </div>
      </ComponentShowcase>

      {/* 3. INPUTS CON PREFIJOS/SUFIJOS */}
      <ComponentShowcase 
        title="Prefijos y Sufijos"
        description="Ideales para campos técnicos como URLs, precios o dominios."
        color="#6DD6AF"
        code={`<div className="flex bg-black/40 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#D6AF6D] transition-all">
  <span className="bg-white/5 px-4 flex items-center text-gray-500 text-sm border-r border-white/10">https://</span>
  <input className="bg-transparent py-3 px-4 text-white focus:outline-none w-full" />
</div>`}
      >
        <div className="w-full max-w-md">
          <div className="flex bg-black/40 border border-white/10 rounded-xl overflow-hidden focus-within:border-[#D6AF6D] focus-within:ring-1 focus-within:ring-[#D6AF6D]/30 transition-all">
            <span className="bg-white/5 px-4 flex items-center text-gray-500 text-sm border-r border-white/10 font-mono tracking-tight">
              zallar.com/
            </span>
            <input 
              type="text" 
              placeholder="username"
              className="bg-transparent py-3 px-4 text-white focus:outline-none w-full placeholder:text-gray-700" 
            />
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};

export default TextInputsPage;