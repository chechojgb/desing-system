import React, { useState } from 'react';
import { Copy, Check, Code2, Eye } from 'lucide-react';

const ComponentShowcase = ({ title, description, children, code, color = "#AF6DD6", minHeight}) => {
  const [view, setView] = useState('preview');
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group mb-16 animate-fade-in">
      {/* Título y Descripción con línea de color dinámica */}
      <div className="flex flex-col mb-6">
        <h3 className="text-2xl font-bold text-white transition-colors duration-500 flex items-center gap-3">
          <span className="w-1 h-6 rounded-full" style={{ backgroundColor: color }}></span>
          {title}
        </h3>
        <p className="text-gray-400 mt-2 ml-4 border-l border-white/5 pl-4 italic leading-relaxed">
          {description}
        </p>
      </div>

      <div className="relative border border-white/10 rounded-[2rem] bg-[#1f1f20]/50 backdrop-blur-sm overflow-hidden shadow-2xl">
        {/* Header estilo Terminal */}
        <div className="flex justify-between items-center px-8 py-4 border-b border-white/5 bg-white/[0.02]">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setView('preview')}
              className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${view === 'preview' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
              style={view === 'preview' ? { color: color } : {}}
            >
              <Eye size={14} /> Vista Previa
            </button>
            <button 
              onClick={() => setView('code')}
              className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all ${view === 'code' ? 'text-white' : 'text-gray-500 hover:text-white'}`}
              style={view === 'code' ? { color: color } : {}}
            >
              <Code2 size={14} /> Código JSX
            </button>
          </div>
          
          <button 
            onClick={copyToClipboard}
            className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-bold transition-all border ${copied ? 'bg-green-500/10 border-green-500 text-green-500' : 'bg-white/5 border-white/10 text-gray-400 hover:border-white'}`}
          >
            {copied ? <Check size={12} /> : <Copy size={12} />}
            {copied ? 'COPIADO' : 'COPIAR'}
          </button>
        </div>

        {/* Zona de Contenido */}
        <div className="relative">
          {view === 'preview' ? (
            <div className="p-16 flex flex-wrap gap-8 items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] bg-fixed relative" style={{ minHeight: minHeight ? minHeight : 'auto' }}>
              {/* Overlay sutil del color del componente */}
              <div className="absolute inset-0 pointer-events-none opacity-5" style={{ background: `radial-gradient(circle at center, ${color}, transparent)` }}></div>
              <div className="relative z-10 flex flex-wrap gap-8 justify-center w-full overflow-visible">
                {children}
              </div>
            </div>
          ) : (
            <div className="p-0 animate-fade-in">
              <pre className="p-8 text-sm font-mono leading-relaxed text-gray-300 bg-[#0d0d0e] overflow-x-auto selection:bg-white/10">
                <code className="block">
                  {code.split('\n').map((line, i) => (
                    <div key={i} className="table-row">
                      <span className="table-cell pr-4 text-gray-700 text-right select-none text-xs">{i + 1}</span>
                      <span className="table-cell">{line}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComponentShowcase;