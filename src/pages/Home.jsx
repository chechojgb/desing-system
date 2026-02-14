import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1A1A1B] text-white overflow-hidden selection:bg-[#AF6DD6]/30 font-sans">
      
      {/* --- BACKGROUND ANIMATION (Luces de fondo) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#AF6DD6]/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#D6AF6D]/10 rounded-full blur-[100px] animate-bounce-slow"></div>
      </div>



      <main className="relative pt-24 pb-32 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* IZQUIERDA: CONTENIDO CON ENTRADA SUAVE */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#AF6DD6]/10 border border-[#AF6DD6]/20 text-[#AF6DD6] text-xs font-bold mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6DD6AF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6DD6AF]"></span>
            </span>
            NUEVOS COMPONENTES DISPONIBLES
          </div>

          <h1 className="text-7xl md:text-[92px] font-black tracking-tight leading-[0.85] mb-8">
            Diseño <br />
            <span className="relative inline-block mt-4">
              Premium
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-[#D6AF6D]/30 blur-sm"></span>
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#AF6DD6] via-[#D6AF6D] to-[#6DD6AF] animate-gradient-x">
              para Zallar.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-lg mb-12 leading-relaxed italic">
            "La elegancia es la única belleza que nunca desaparece." — Implementa interfaces que respiran lujo.
          </p>
          
          <div className="flex flex-wrap gap-6">
            {/* Botón Principal con Brillo Animado */}
            <button className="relative group px-10 py-5 bg-[#AF6DD6] rounded-2xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_20px_40px_-15px_rgba(175,109,214,0.5)]">
              <span className="relative z-10">Explorar Sistema</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-shine" />
            </button>

            <button className="px-10 py-5 border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/5 transition-colors flex items-center gap-2 group">
              Figma Files
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* DERECHA: COMPONENTES FLOTANTES CON ANIMACIONES DIFERENTES */}
        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Card Flotante Púrpura */}
          <div className="absolute top-10 right-10 p-8 bg-[#252526] border border-white/10 rounded-[32px] shadow-2xl animate-float-slow z-30 group hover:border-[#AF6DD6]/50 transition-colors">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#AF6DD6] flex items-center justify-center shadow-lg shadow-[#AF6DD6]/30">
                 <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="font-bold">Botón Acción</p>
                <p className="text-xs text-gray-500">Zallar-Primary-v1</p>
              </div>
            </div>
            <div className="w-48 h-2 bg-white/5 rounded-full overflow-hidden">
               <div className="w-2/3 h-full bg-[#AF6DD6] group-hover:w-full transition-all duration-1000"></div>
            </div>
          </div>

          {/* Card Flotante Dorada */}
          <div className="absolute bottom-20 left-0 p-6 bg-[#252526]/80 backdrop-blur-xl border border-[#D6AF6D]/20 rounded-2xl shadow-2xl animate-float-delayed z-20">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <span key={i} className="text-[#D6AF6D]">★</span>)}
            </div>
            <p className="text-sm font-medium text-gray-300">Calidad Certificada</p>
            <p className="text-[10px] text-[#D6AF6D] tracking-[3px] font-bold mt-1">ESTÁNDAR ZALLAR</p>
          </div>

          {/* Elemento Verde Agua (Badge) */}
          <div className="absolute top-1/2 left-1/4 px-6 py-3 bg-[#6DD6AF] text-[#1A1A1B] font-bold rounded-full shadow-xl animate-bounce-slow z-40 rotate-[-5deg]">
            99.9% Performance
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;