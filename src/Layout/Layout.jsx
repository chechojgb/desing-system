import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; 
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  const location = useLocation();
  
  // Definimos que NO se muestre el sidebar si estamos en la raíz "/"
  const isHomePage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-[#1A1A1B]"> {/* Usando el fondo de Zallar */}
      
      {isHomePage && <Navbar />}
      
      <div className="flex">
        {/* Solo renderiza el Sidebar si NO es Home */}
        {!isHomePage && <Sidebar />}
        
        <main className={`w-full transition-all duration-300 ${!isHomePage ? 'md:ml-64' : 'ml-0'}`}>
          <div className={`${!isHomePage ? 'max-w-7xl mx-auto p-8' : ''}`}>
            {children}
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Layout;