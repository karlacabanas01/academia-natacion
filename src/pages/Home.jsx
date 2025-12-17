import { useState, useEffect } from "react";
import Papa from "papaparse";
import { Link } from "react-router-dom";

function Home() {
  const [clases, setClases] = useState([]);

  useEffect(() => {
    const sheetURL =
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS5w6GNbESDr8y9xNOwkJfmWmhCPWTZxXOrnzBAVTKhNMaMiIbxN_OWZ8-c8XvaJUkF-0Dx794ivt8q/pub?output=csv";

    Papa.parse(sheetURL, {
      download: true,
      header: true,
      complete: (results) => {
        setClases(results.data);
      },
    });
  }, []);

  const handleWhatsApp = (claseNombre) => {
    const telefono = "56912345678";
    const mensaje = `Hola, me interesa inscribirme en la clase de ${claseNombre}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  if (clases.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] bg-gray-50">
        <div className="relative">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-cyan-500"></div>
          <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-blue-900 animate-ping opacity-20"></div>
        </div>
        <span className="mt-4 text-blue-900 font-bold tracking-widest animate-pulse">
          CARGANDO BLUEWATER...
        </span>
      </div>
    );
  }

  return (
    <>
      {/* --- HERO SECTION --- */}
      <header className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-[20s] hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=2070')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/60 to-blue-900/90"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-10 animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-sm font-bold mb-6 tracking-wider backdrop-blur-sm">
            INSCRIPCIONES ABIERTAS 2025
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
            Domina el <span className="text-cyan-400">agua</span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
            Más que nadar, es libertad. Clases personalizadas para bebés,
            adultos principiantes y entrenamiento de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#precios"
              className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)] transition transform hover:-translate-y-1 hover:scale-105"
            >
              Ver Planes y Precios
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px]"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-gray-50"
            ></path>
          </svg>
        </div>
      </header>

      {/* --- FEATURES SECTION --- */}
      <section className="py-20 bg-gray-50 relative z-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}
          <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-default border border-gray-100">
            <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center mx-auto mb-6 text-4xl">
              🌊
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Piscinas Temperadas
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Agua a 28°C todo el año con tecnología de purificación salina.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-default border border-gray-100">
            <div className="w-20 h-20 bg-cyan-50 text-cyan-600 rounded-2xl -rotate-3 group-hover:-rotate-6 transition-transform flex items-center justify-center mx-auto mb-6 text-4xl">
              🏅
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Metodología Propia
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Enfoque pedagógico centrado en la confianza y la técnica
              progresiva.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-8 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-default border border-gray-100">
            <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform flex items-center justify-center mx-auto mb-6 text-4xl">
              🛡️
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">
              Seguridad Primero
            </h3>
            <p className="text-gray-500 leading-relaxed">
              Protocolos estrictos, salvavidas certificados y áreas seguras.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRICING SECTION (Id agregado para el scroll) --- */}
      <main
        id="precios"
        className="bg-white py-24 px-4 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-gray-50 to-white"></div>
        {/* Decoración de fondo */}
        <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl mix-blend-multiply"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl mix-blend-multiply"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-3">
              Nuestros Programas
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Elige tu nivel de nado
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {clases.map((clase, index) => {
              const isRecommended = index === 1;

              return (
                <div
                  key={index}
                  className={`group relative bg-white rounded-[2rem] transition-all duration-500 flex flex-col overflow-hidden ${
                    isRecommended
                      ? "shadow-2xl border-2 border-cyan-400 scale-105 z-10 shadow-cyan-200/50"
                      : "shadow-xl border border-gray-100 hover:-translate-y-2 hover:shadow-2xl"
                  }`}
                >
                  {isRecommended && (
                    <div className="absolute top-0 right-0 z-30 bg-gradient-to-bl from-cyan-500 to-blue-500 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl shadow-lg tracking-wider">
                      MÁS POPULAR
                    </div>
                  )}

                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent z-10"></div>
                    <img
                      src={
                        clase.imagen ||
                        "https://via.placeholder.com/400x300?text=Sin+Imagen"
                      }
                      alt={clase.titulo}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://via.placeholder.com/400x300?text=No+Image";
                      }}
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                      <h3 className="text-3xl font-extrabold text-white leading-none mb-2 drop-shadow-md">
                        {clase.titulo}
                      </h3>
                      <div className="h-1 w-20 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50">
                    <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-lg">
                      {clase.descripcion}
                    </p>

                    <div className="mt-auto">
                      <div className="flex items-end gap-2 mb-8">
                        <span className="text-4xl font-extrabold text-blue-900 tracking-tight">
                          {clase.precio}
                        </span>
                        <span className="text-gray-500 font-medium pb-1">
                          / mes
                        </span>
                      </div>

                      <button
                        onClick={() => handleWhatsApp(clase.titulo)}
                        className={`w-full font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 text-lg group-hover:shadow-lg ${
                          isRecommended
                            ? "bg-gradient-to-r from-cyan-400 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-700 shadow-cyan-200/50"
                            : "bg-gray-900 text-white hover:bg-blue-700"
                        }`}
                      >
                        <span>Inscribirme ahora</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
