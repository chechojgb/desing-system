import React from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { AlignLeft, MessageSquare, Code } from 'lucide-react';

const TextareasPage = () => {
  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#D6AF6D]/5 blur-[100px]"></div>
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          TEXTAREAS <span className="text-[#D6AF6D]">¶</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Campos multilínea optimizados para textos extensos, con scrollbars personalizados 
          y estados de enfoque elegantes.
        </p>
      </div>

      {/* 1. TEXTAREA BÁSICO */}
      <ComponentShowcase 
        title="Área de Texto Estándar"
        description="Ideal para comentarios o descripciones breves. Incluye un estado de foco suave."
        color="#6DD6AF"
        code={`<textarea 
  placeholder="Escribe una descripción..."
  className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#AF6DD6] focus:ring-1 focus:ring-[#AF6DD6]/30 transition-all min-h-[120px] resize-y"
/>`}
      >
        <div className="w-full max-w-md">
          <textarea 
            placeholder="Escribe una descripción detallada..."
            className="w-full bg-black/40 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-[#AF6DD6] focus:ring-1 focus:ring-[#AF6DD6]/30 transition-all min-h-[120px] resize-y placeholder:text-gray-600"
          ></textarea>
        </div>
      </ComponentShowcase>

      {/* 2. TEXTAREA CON ICONO Y LABEL */}
      <ComponentShowcase 
        title="Con Etiquetas e Iconos"
        description="Añadimos contexto visual para que el usuario sepa exactamente qué debe escribir."
        color="#6DD6AF"
        code={`<div className="space-y-3">
  <label className="text-xs font-black uppercase tracking-widest text-gray-500">Feedback del Cliente</label>
  <div className="relative">
    <MessageSquare className="absolute top-4 left-4 text-gray-600" size={18} />
    <textarea className="pl-12 ... shadow-inner" />
  </div>
</div>`}
      >
        <div className="w-full max-w-md space-y-3">
          <label className="text-xs font-black uppercase tracking-[2px] text-[#6DD6AF] ml-1">Mensaje de Soporte</label>
          <div className="relative group">
            <MessageSquare className="absolute top-4 left-4 text-gray-600 group-focus-within:text-[#6DD6AF] transition-colors" size={18} />
            <textarea 
              placeholder="¿Cómo podemos ayudarte hoy?"
              className="w-full bg-black/60 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#6DD6AF] transition-all min-h-[150px] shadow-2xl shadow-black/50"
            ></textarea>
          </div>
        </div>
      </ComponentShowcase>

      {/* 3. MODO LECTURA / DESHABILITADO */}
      <ComponentShowcase 
        title="Estado Deshabilitado"
        description="Para mostrar datos guardados que no son editables en el momento actual."
        color="#6DD6AF"
        code={`<textarea disabled className="opacity-50 cursor-not-allowed grayscale bg-white/5 border-dashed border-white/20 ...">
  Este contenido es solo de lectura...
</textarea>`}
      >
        <div className="w-full max-w-md">
          <textarea 
            disabled
            className="w-full bg-white/5 border border-dashed border-white/10 rounded-2xl p-4 text-gray-500 cursor-not-allowed min-h-[100px] resize-none"
          >
            Este es un registro del sistema que no puede ser modificado por el operador actual. Ver logs para más información.
          </textarea>
        </div>
      </ComponentShowcase>
    </div>
  );
};

export default TextareasPage;