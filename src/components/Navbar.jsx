// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  // Estado para el menú móvil (hamburguesa)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
              🏊‍♂️
            </span>
            <span className="font-extrabold text-2xl text-blue-900 tracking-tight">
              BlueWater <span className="text-cyan-500">Academy</span>
            </span>
          </Link>

          {/* MENÚ DE ESCRITORIO (Aquí aplicamos tu estilo) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-cyan-600 font-medium transition-colors relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
            </Link>

            <Link
              to="/nosotros"
              className="text-gray-600 hover:text-cyan-600 font-medium transition-colors relative group"
            >
              Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
            </Link>

            {/* Este usa <a> normal porque es un ancla dentro de la Home */}
            <a
              href="/#precios"
              className="text-gray-600 hover:text-cyan-600 font-medium transition-colors relative group"
            >
              Planes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
            </a>

            {/* Botón de acción */}
            <Link
              to="/portal"
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
            >
              Portal Alumnos
            </Link>
          </div>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-900 focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl animate-fade-in-down">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              Inicio
            </Link>
            <Link
              to="/nosotros"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              Nosotros
            </Link>
            <a
              href="/#precios"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-4 rounded-xl text-base font-medium text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
            >
              Planes y Precios
            </a>
            <Link
              to="/portal"
              className="bg-blue-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-cyan-500 transition-all duration-300 shadow-lg hover:shadow-cyan-500/30 transform hover:-translate-y-0.5"
            >
              Portal Alumnos
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
