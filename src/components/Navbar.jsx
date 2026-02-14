import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    
    const navRoutes = [
        { path: '/documentacion', label: 'Documentación' },
        { path: '/componentes', label: 'Componentes' },
        { path: '/ecosistema', label: 'Ecosistema' },
    ];

    return (
        <nav className="flex justify-between items-center px-10 py-4 border-b border-white/5 bg-[#1A1A1B]/80 backdrop-blur-xl sticky top-0 z-50">
            {/* Logo con link al Home */}
            <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                <div className="w-8 h-8 bg-[#AF6DD6] rounded-lg rotate-45 flex items-center justify-center transition-all group-hover:rotate-[225deg] group-hover:shadow-[0_0_15px_rgba(175,109,214,0.5)] duration-700">
                    <span className="text-white -rotate-45 font-bold group-hover:rotate-[135deg] transition-transform duration-700">Z</span>
                </div>
                <span className="text-xl font-bold tracking-tighter text-white">
                    ZALLAR <span className="text-[#D6AF6D]">UI</span>
                </span>
            </Link>
            

            
            {/* Navegación Central */}
            <div className="hidden md:flex gap-8 text-sm font-medium">
                {navRoutes.map((route) => (
                    <Link 
                        key={route.path} 
                        to={route.path} 
                        className="relative group py-2 overflow-hidden"
                    >
                        <span className={`transition-colors duration-300 ${
                            location.pathname === route.path ? 'text-[#AF6DD6]' : 'text-gray-400 group-hover:text-white'
                        }`}>
                            {route.label}
                        </span>
                        {/* Underline animado */}
                        <span className={`absolute bottom-0 left-0 h-[2px] bg-[#AF6DD6] transition-all duration-300 ${
                            location.pathname === route.path ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}></span>
                    </Link>
                ))}
            </div>
            
            {/* Versión con efecto de brillo */}
            <button className="relative px-5 py-2 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-[#6DD6AF] hover:bg-white/10 transition-all overflow-hidden group">
                <span className="relative z-10">V1.0.0 - STABLE</span>
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
        </nav>
    );
};

export default Navbar;