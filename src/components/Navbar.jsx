import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para detectar scroll y cambiar el fondo del navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-blue-900 shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* LOGO */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white text-2xl font-bold">BlueWater</span>
          </div>

          {/* MENU DE ESCRITORIO (Oculto en móvil) */}
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-gray-300 hover:text-white transition">
              Inicio
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Clases
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition">
              Nosotros
            </a>
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-full font-bold transition">
              Contactar
            </button>
          </div>

          {/* BOTÓN HAMBURGUESA (Solo visible en móvil) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {!isOpen ? (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      {/* Solo se muestra si isOpen es true */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        } bg-blue-900`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
          <a
            href="#"
            className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
          >
            Inicio
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
          >
            Clases
          </a>
          <a
            href="#"
            className="block px-3 py-2 text-white hover:bg-blue-800 rounded-md"
          >
            Nosotros
          </a>
          <a href="#" className="block px-3 py-2 text-cyan-400 font-bold">
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
