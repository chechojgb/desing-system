import React, { useState } from 'react';

const ButtonExample = ({ title, description, children, code }) => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mb-12">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>

      <div className="border border-white/5 rounded-2xl overflow-hidden bg-[#1f1f20]">
        {/* Header de la Card */}
        <div className="flex justify-between items-center px-6 py-3 border-b border-white/5 bg-black/20">
          <div className="flex gap-4">
            <button 
              onClick={() => setShowCode(false)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${!showCode ? 'text-[#AF6DD6]' : 'text-gray-500 hover:text-white'}`}
            >
              Preview
            </button>
            <button 
              onClick={() => setShowCode(true)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${showCode ? 'text-[#AF6DD6]' : 'text-gray-500 hover:text-white'}`}
            >
              Code
            </button>
          </div>
          {showCode && (
            <button onClick={copyToClipboard} className="text-xs text-[#6DD6AF] font-mono hover:underline">
              {copied ? '¡Copiado!' : 'Copiar código'}
            </button>
          )}
        </div>

        {/* Contenido de la Card */}
        <div className="p-10 flex items-center justify-center min-h-[200px]">
          {!showCode ? (
            <div className="flex flex-wrap gap-6 items-center justify-center">
              {children}
            </div>
          ) : (
            <pre className="w-full text-sm font-mono text-gray-300 overflow-x-auto bg-black/40 p-6 rounded-lg">
              <code>{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
};

const ButtonsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-16">
        <h1 className="text-4xl font-black mb-4">Botones</h1>
        <p className="text-gray-400 text-lg">
          Elementos de acción interactivos utilizados en formularios, diálogos y más. 
          Siguen la jerarquía visual de Zallar utilizando Púrpura, Dorado y Verde Agua.
        </p>
      </header>

      {/* EJEMPLO 1: BOTONES PRINCIPALES */}
      <ButtonExample 
        title="Jerarquía de Colores"
        description="Botones base utilizando la paleta oficial de Zallar para diferentes intenciones."
        code={`<button className="bg-[#AF6DD6] hover:bg-[#9b5cc2] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-[#AF6DD6]/20">
  Principal Purple
</button>

<button className="border border-[#D6AF6D] text-[#D6AF6D] hover:bg-[#D6AF6D] hover:text-[#1A1A1B] px-6 py-2.5 rounded-lg font-bold transition-all">
  Luxury Outline
</button>

<button className="bg-[#6DD6AF] hover:bg-[#5bc29f] text-[#1A1A1B] px-6 py-2.5 rounded-lg font-bold transition-all">
  Success Aqua
</button>`}
      >
        <button className="bg-[#AF6DD6] hover:bg-[#9b5cc2] text-white px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg shadow-[#AF6DD6]/20 active:scale-95">
          Principal Purple
        </button>
        <button className="border border-[#D6AF6D] text-[#D6AF6D] hover:bg-[#D6AF6D] hover:text-[#1A1A1B] px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95">
          Luxury Outline
        </button>
        <button className="bg-[#6DD6AF] hover:bg-[#5bc29f] text-[#1A1A1B] px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95">
          Success Aqua
        </button>
      </ButtonExample>

      {/* EJEMPLO 2: BOTONES CON EFECTO GLASS */}
      <ButtonExample 
        title="Efecto Glassmorphism"
        description="Botones sutiles para interfaces oscuras profundas."
        code={`<button className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-6 py-2.5 rounded-xl transition-all">
  Glass Action
</button>`}
      >
        <button className="bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 text-white px-8 py-3 rounded-xl transition-all active:scale-95">
          Glass Action
        </button>
      </ButtonExample>

    </div>
  );
};

export default ButtonsPage;