import ComponentShowcase from '../components/docs/ComponentShowcase';

const ButtonsPage = () => {
  return (
    <div className="py-10 px-4">
      {/* Hero de la página */}
    <div className="relative mb-20">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#AF6DD6]/10 blur-[100px]"></div>
      <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
        BOTONES <span className="text-[#D6AF6D]">.</span>
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-[#AF6DD6] to-[#D6AF6D] mb-6"></div>
      <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
        Nuestra librería de botones está diseñada para guiar al usuario a través del ecosistema 
        Zallar con elegancia y precisión táctil.
      </p>
    </div>

    {/* SECCIÓN 1: ACCIONES PRIMARIAS */}
    <ComponentShowcase 
    title="Botones de Identidad"
    description="El núcleo de la interacción en Zallar. Púrpura para acción, Dorado para exclusividad."
    color="#AF6DD6" // Aquí defines el color del acento para esta card
code={`// Botón Principal Zallar
<button className="relative px-8 py-3 bg-[#AF6DD6] text-white font-bold rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(175,109,214,0.3)] hover:shadow-[#AF6DD6]/50 transition-all active:scale-95">
  <span className="relative z-10">Explorar ahora</span>
  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-shine" />
</button>`}
>
        <button className="relative px-8 py-3 bg-[#AF6DD6] text-white font-bold rounded-xl overflow-hidden group shadow-[0_10px_30px_rgba(175,109,214,0.3)] hover:shadow-[#AF6DD6]/50 transition-all active:scale-95">
          <span className="relative z-10">Principal Zallar</span>
          <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shine_0.8s_forwards]" />
        </button>

        <button className="px-8 py-3 border-2 border-[#D6AF6D] text-[#D6AF6D] font-bold rounded-xl hover:bg-[#D6AF6D] hover:text-[#1A1A1B] transition-all shadow-[0_0_20px_rgba(214,175,109,0.1)] hover:shadow-[#D6AF6D]/40 active:scale-95">
          Exclusive Gold
        </button>
    </ComponentShowcase>

    {/* SECCIÓN 2: BOTONES DE ESTADO */}
    <ComponentShowcase 
    title="Validación y Éxito"
    description="Utiliza el Verde Agua para confirmar procesos exitosos o contacto directo."
    color="#AF6DD6" // Aquí defines el color del acento para esta card
code={`<button className="bg-[#6DD6AF] text-[#1A1A1B] px-8 py-3 rounded-xl font-black uppercase tracking-tighter hover:brightness-110 shadow-[0_10px_20px_rgba(109,214,175,0.2)]">
  Sistemas OK
</button>`}
>
        <button className="bg-[#6DD6AF] text-[#1A1A1B] px-8 py-3 rounded-xl font-black uppercase tracking-tighter hover:brightness-110 shadow-[0_10px_20px_rgba(109,214,175,0.2)] active:scale-95">
          Sistemas OK
        </button>
    </ComponentShowcase>


    <ComponentShowcase 
    title="Escalas y Proporciones"
    description="Diferentes tamaños según el contexto de la interfaz, desde botones de control hasta acciones principales de formulario."
    color="#AF6DD6" // Aquí defines el color del acento para esta card
code={`{/* Botón Largo (Full Width) */}
<button className="w-full bg-[#AF6DD6] py-4 rounded-xl font-bold shadow-lg">
  Finalizar Suscripción
</button>

{/* Botón Estándar */}
<button className="bg-[#AF6DD6] px-8 py-3 rounded-xl font-bold">
  Continuar
</button>

{/* Botón Pequeño (Compact) */}
<button className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-lg text-xs font-bold hover:text-[#6DD6AF]">
  Editar
</button>`}
>
    <div className="flex flex-col gap-8 w-full max-w-md">
    {/* Full Width */}
    <button className="w-full bg-[#AF6DD6] text-white py-4 rounded-xl font-bold shadow-lg shadow-[#AF6DD6]/20 active:scale-[0.98] transition-all">
      Boton Largo (Full Width)
    </button>
    
    <div className="flex items-center justify-between gap-4">
      {/* Default */}
      <button className="bg-[#D6AF6D] text-[#1A1A1B] px-8 py-3 rounded-xl font-bold active:scale-95 transition-all">
        Estándar
      </button>

      {/* Small */}
      <button className="bg-white/5 border border-white/10 text-gray-400 px-4 py-1.5 rounded-lg text-xs font-bold hover:text-[#6DD6AF] hover:border-[#6DD6AF]/40 active:scale-95 transition-all">
        Pequeño
      </button>

      {/* Icon Only */}
      <button className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#AF6DD6] hover:bg-[#AF6DD6] hover:text-white transition-all">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
      </button>
    </div>
  </div>
    </ComponentShowcase>

    {/* SECCIÓN 4: ESTADOS DE INTERACCIÓN */}
    <ComponentShowcase 
    title="Estados del Sistema"
    description="Cómo se comportan los botones ante estados de carga o deshabilitados."
    color="#AF6DD6" // Aquí defines el color del acento para esta card
code={`{/* Estado de Carga */}
    <button disabled className="opacity-70 cursor-not-allowed bg-[#AF6DD6] px-8 py-3 rounded-xl font-bold flex items-center gap-3">
      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
      Procesando...
    </button>

    {/* Deshabilitado */}
    <button disabled className="bg-white/5 border border-white/5 text-gray-600 px-8 py-3 rounded-xl font-bold cursor-not-allowed">
      No disponible
    </button>`}
>
      <button disabled className="opacity-70 cursor-not-allowed bg-[#AF6DD6] text-white px-8 py-3 rounded-xl font-bold flex items-center gap-3 shadow-lg shadow-[#AF6DD6]/10">
        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        Procesando...
      </button>

      <button disabled className="bg-white/5 border border-white/5 text-gray-600 px-8 py-3 rounded-xl font-bold cursor-not-allowed">
        Deshabilitado
      </button>
    </ComponentShowcase>
    </div>
  );
};

export default ButtonsPage;