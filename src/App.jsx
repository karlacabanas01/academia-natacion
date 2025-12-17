import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";
import { clases } from "./data/clases";
import "./index.css";

function App() {
  // Función para generar el link de WhatsApp dinámico
  const handleWhatsApp = (claseNombre) => {
    const telefono = "56912345678"; // Aquí iría el número del cliente real
    const mensaje = `Hola, me interesa inscribirme en la clase de ${claseNombre}`;
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <header className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=2070')",
          }}
          aria-hidden="true"
        ></div>

        <div className="absolute inset-0 w-full h-full bg-blue-900 bg-opacity-60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-10">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
            Domina el agua en <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-300">
              BlueWater Academy
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto font-light">
            Más que nadar, es libertad. Clases personalizadas para bebés,
            adultos principiantes y entrenamiento de alto rendimiento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-4 px-12 rounded-full shadow-lg transition transform hover:-translate-y-1">
              Agenda tu clase gratis
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-4 px-12 rounded-full transition">
              Ver horarios
            </button>
          </div>
        </div>
      </header>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🌊
            </div>
            <h3 className="text-xl font-bold mb-2">Piscinas Temperadas</h3>
            <p className="text-gray-600">
              Agua a 28°C todo el año con tecnología de purificación salina.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              🏆
            </div>
            <h3 className="text-xl font-bold mb-2">
              Instructores Certificados
            </h3>
            <p className="text-gray-600">
              Equipo profesional con experiencia en pedagogía y alto
              rendimiento.
            </p>
          </div>
          <div className="p-6">
            <div className="w-16 h-16 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
              ⏱️
            </div>
            <h3 className="text-xl font-bold mb-2">Horarios Flexibles</h3>
            <p className="text-gray-600">
              Abierto de 6:00 AM a 10:00 PM. Recupera tus clases cuando quieras.
            </p>
          </div>
        </div>
      </section>

      <main className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-2">
              Nuestros Programas
            </h2>
            <h3 className="text-4xl font-bold text-gray-900">
              Encuentra tu clase ideal
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {clases.map((clase) => (
              <div
                key={clase.id}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Imagen con efecto Zoom suave al hacer hover */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60"></div>
                  <img
                    src={clase.imagen}
                    alt={clase.titulo}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <span className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase">
                    Cupos disponibles
                  </span>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {clase.titulo}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1">
                    {clase.descripcion}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400 text-sm">Mensualidad</span>
                      <span className="text-2xl font-bold text-blue-600">
                        {clase.precio}
                      </span>
                    </div>

                    <button
                      onClick={() => handleWhatsApp(clase.titulo)}
                      className="w-full bg-gray-900 hover:bg-blue-600 text-white font-medium py-4 rounded-xl transition-colors duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg"
                    >
                      <span>Inscribirme ahora</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* --- FOOTER MODERN "DEEP OCEAN" --- */}
      <footer className="bg-gradient-to-b from-gray-900 to-blue-900 text-white pt-16 pb-8 border-t-4 border-cyan-500">
        <div className="max-w-6xl mx-auto px-4">
          {/* SECCIÓN SUPERIOR: Newsletter y Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                BlueWater <span className="text-cyan-400">Academy</span>
              </h2>
              <p className="text-blue-200 max-w-md text-lg">
                Sumérgete en un estilo de vida saludable. Recibe tips de
                técnica, noticias de torneos y descuentos exclusivos.
              </p>
            </div>

            {/* Input de Newsletter Moderno */}
            <div className="bg-white/10 p-2 rounded-full flex justify-between items-center backdrop-blur-sm border border-white/20">
              <input
                type="email"
                placeholder="Tu correo electrónico..."
                className="bg-transparent border-none text-white placeholder-blue-200 px-6 py-2 w-full focus:outline-none focus:ring-0"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-cyan-500/50">
                Suscribirse
              </button>
            </div>
          </div>

          {/* SECCIÓN MEDIA: Links y Contacto (Grid Responsive) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 pb-8">
            {/* Columna 1 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-cyan-300">Explorar</h4>
              <ul className="space-y-4 text-blue-100">
                <li>
                  <Link
                    to="/"
                    className="hover:text-white hover:translate-x-2 transition-transform inline-block"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/programas"
                    className="hover:text-white hover:translate-x-2 transition-transform inline-block"
                  >
                    Clases y Niveles
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nosotros"
                    className="hover:text-white hover:translate-x-2 transition-transform inline-block"
                  >
                    Nuestros Profesores
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 2 */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-cyan-300">Ayuda</h4>
              <ul className="space-y-4 text-blue-100">
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-white hover:translate-x-2 transition-transform inline-block"
                  >
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  <Link
                    to="/precios"
                    className="hover:text-white hover:translate-x-2 transition-transform inline-block"
                  >
                    Planes y Precios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/portal"
                    className="hover:text-white hover:translate-x-2 transition-transform inline-block"
                  >
                    Portal Alumnos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Columna 3 y 4 (Contacto fusionado en móvil, separado en PC) */}
            <div className="col-span-2 md:col-span-2 bg-blue-950/50 rounded-2xl p-6 border border-white/5">
              <h4 className="font-bold text-lg mb-4 text-cyan-300">
                Visítanos
              </h4>
              <p className="text-blue-100 mb-4">
                Av. del Deporte 1234, Centro Acuático, Santiago.
                <br />
                <span className="text-sm text-blue-400">
                  Estacionamiento gratuito disponible.
                </span>
              </p>
              <div className="flex items-center gap-4 mt-6">
                {/* Botones Sociales (Usamos <a> porque son externos) */}
                <a
                  href="#"
                  className="bg-white/10 hover:bg-cyan-500 hover:text-white p-3 rounded-full transition-colors text-cyan-400"
                >
                  {/* Icono Instagram */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-cyan-500 hover:text-white p-3 rounded-full transition-colors text-cyan-400"
                >
                  {/* Icono Facebook */}
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* SECCIÓN INFERIOR: Copyright */}
          <div className="text-center pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-blue-300">
            <p>
              © {new Date().getFullYear()} Academia BlueWater. Todos los
              derechos reservados.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/privacidad" className="hover:text-white">
                Política de Privacidad
              </Link>
              <Link to="/terminos" className="hover:text-white">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
