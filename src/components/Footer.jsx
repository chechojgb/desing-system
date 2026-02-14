import React from 'react';

const Footer = () => {
  return (
    <footer className="relative bg-[#1A1A1B] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Efecto de resplandor sutil en la esquina del footer */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#AF6DD6]/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Branding */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="w-6 h-6 bg-[#D6AF6D] rounded flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-[#1A1A1B] font-bold text-xs">Z</span>
              </div>
              <span className="text-xl font-bold tracking-tighter text-white">
                ZALLAR <span className="text-[#D6AF6D]">UI</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Elevando los estándares digitales de Zallar con componentes de lujo y rendimiento excepcional.
            </p>
          </div>

          {/* Columnas 2, 3 y 4: Enlaces con Hover Animado */}
          <div>
            <h4 className="text-[#D6AF6D] font-bold text-xs uppercase tracking-[2px] mb-6">Recursos</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#AF6DD6] transition-colors duration-300">Documentación</a></li>
              <li><a href="#" className="hover:text-[#AF6DD6] transition-colors duration-300">Librería de Iconos</a></li>
              <li><a href="#" className="hover:text-[#AF6DD6] transition-colors duration-300">Tokens de Diseño</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#6DD6AF] font-bold text-xs uppercase tracking-[2px] mb-6">Comunidad</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-[#6DD6AF] transition-colors duration-300">GitHub Interno</a></li>
              <li><a href="#" className="hover:text-[#6DD6AF] transition-colors duration-300">Canal de Slack</a></li>
              <li><a href="#" className="hover:text-[#6DD6AF] transition-colors duration-300">Figma Community</a></li>
            </ul>
          </div>

          {/* Newsletter / Status */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[2px] mb-6">Estado del Sistema</h4>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-[#6DD6AF] rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-gray-300">Todos los sistemas operativos</span>
              </div>
              <p className="text-[10px] text-gray-500 uppercase font-mono">Último despliegue: Feb 2026</p>
            </div>
          </div>
        </div>

        {/* Barra Inferior */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-[11px] uppercase tracking-widest">
            © 2026 Zallar Tech. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {/* Redes Sociales con Hover de Color de Acento */}
            <a href="#" className="text-gray-500 hover:text-[#AF6DD6] transition-transform hover:-translate-y-1">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;