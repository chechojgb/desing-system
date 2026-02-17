import React from 'react';
import ComponentShowcase from '../components/docs/ComponentShowcase';
import { User, ShieldCheck, Crown } from 'lucide-react';

const AvatarsPage = () => {
  const users = [
    { img: 'https://i.pravatar.cc/150?u=1', status: 'online' },
    { img: 'https://i.pravatar.cc/150?u=2', status: 'away' },
    { img: 'https://i.pravatar.cc/150?u=3', status: 'offline' },
    { img: 'https://i.pravatar.cc/150?u=4', status: 'busy' },
  ];

  return (
    <div className="py-10 px-4">
      {/* Header */}
      <div className="relative mb-20">
        <h1 className="text-6xl font-black tracking-tighter text-white mb-6">
          AVATARES <span className="text-[#AF6DD6]">@</span>
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
          Identidades visuales con indicadores de estado en tiempo real y 
          jerarquías de usuario integradas.
        </p>
      </div>

      {/* 1. STATUS AVATARS (Presencia) */}
      <ComponentShowcase 
        title="Indicadores de Presencia"
        description="Avatares con anillos de estado que utilizan el sistema de color de Zallar para indicar disponibilidad."
        color="#6DD6AF"
        code={`<div className="relative inline-block">
  <img className="w-12 h-12 rounded-full border-2 border-white/10" src="..." />
  <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#6DD6AF] rounded-full border-2 border-[#1A1A1B] shadow-[0_0_10px_#6DD6AF]"></span>
</div>`}
      >
        <div className="flex gap-8">
          {users.map((user, i) => (
            <div key={i} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-white/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img 
                src={user.img} 
                className="w-16 h-16 rounded-2xl border-2 border-white/10 object-cover relative z-10 p-0.5 bg-[#1A1A1B]"
                alt="User"
              />
              <span className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-[3px] border-[#1A1A1B] z-20 shadow-lg
                ${user.status === 'online' ? 'bg-[#6DD6AF] shadow-[#6DD6AF]/40' : 
                  user.status === 'away' ? 'bg-[#D6AF6D] shadow-[#D6AF6D]/40' : 
                  user.status === 'busy' ? 'bg-red-500 shadow-red-500/40' : 'bg-gray-500 shadow-gray-500/40'}`}
              ></span>
            </div>
          ))}
        </div>
      </ComponentShowcase>

      {/* 2. RANKED AVATARS (Jerarquía) */}
      <ComponentShowcase 
        title="Jerarquía de Usuario"
        description="Uso de insignias (badges) y bordes iluminados para distinguir roles administrativos o VIP."
        color="#D6AF6D"
        code={`<div className="relative">
  <img className="border-[#D6AF6D] shadow-[0_0_15px_rgba(214,175,109,0.3)]" />
  <Crown className="absolute -top-2 -right-2 text-[#D6AF6D]" />
</div>`}
      >
        <div className="flex gap-12">
          {/* Admin / Gold */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#D6AF6D] blur-xl opacity-20 animate-pulse"></div>
            <img src="https://i.pravatar.cc/150?u=9" className="w-20 h-20 rounded-full border-2 border-[#D6AF6D] relative z-10 p-1" />
            <div className="absolute -top-2 -right-2 bg-[#D6AF6D] text-[#1A1A1B] p-1.5 rounded-full z-20 shadow-xl">
              <Crown size={14} />
            </div>
          </div>

          {/* Moderator / Purple */}
          <div className="relative">
            <img src="https://i.pravatar.cc/150?u=12" className="w-20 h-20 rounded-full border-2 border-[#AF6DD6] p-1" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[#AF6DD6] text-white text-[8px] font-black px-2 py-0.5 rounded-full tracking-tighter z-20">
              MOD
            </div>
          </div>
        </div>
      </ComponentShowcase>

      {/* 3. AVATAR STACK (Equipos) */}
      <ComponentShowcase 
        title="Avatar Group / Stacks"
        description="Visualización de equipos o múltiples colaboradores en un mismo recurso."
        color="#AF6DD6"
        code={`<div className="flex -space-x-4">
  <img className="border-2 border-[#1A1A1B] hover:-translate-y-1 transition-transform" />
  <div className="bg-white/5 flex items-center justify-center">+4</div>
</div>`}
      >
        <div className="flex -space-x-4">
          {users.slice(0, 3).map((user, i) => (
            <img 
              key={i} 
              src={user.img} 
              className="w-14 h-14 rounded-full border-4 border-[#0d0d0e] object-cover hover:z-30 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            />
          ))}
          <div className="w-14 h-14 rounded-full border-4 border-[#0d0d0e] bg-[#1A1A1B] flex items-center justify-center text-xs font-black text-[#AF6DD6] hover:z-30 hover:-translate-y-2 transition-all cursor-pointer">
            +12
          </div>
        </div>
      </ComponentShowcase>
    </div>
  );
};

export default AvatarsPage;