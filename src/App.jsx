// src/App.jsx
import Navbar from "./components/Navbar";
// IMPORTANTE: Importamos Outlet de react-router-dom
import { Outlet, Link } from "react-router-dom";
import "./index.css";

function App() {
  return (
    // Usamos flex y min-h-screen para que el footer siempre quede abajo
    <div className="min-h-screen bg-gray-50 font-sans relative flex flex-col">
      <Navbar />

      {/* AQUÍ ES DONDE CAMBIA EL CONTENIDO */}
      {/* El Outlet es un "hueco" donde React Router pondrá Home.jsx o About.jsx */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* --- FOOTER (Se mantiene igual, solo asegúrate de que los Links funcionen) --- */}
      <footer className="bg-gradient-to-b from-gray-900 to-blue-950 text-white pt-20 pb-10 border-t-4 border-cyan-500">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                BlueWater <span className="text-cyan-400">Academy</span>
              </h2>
              <p className="text-blue-200 max-w-md text-lg">
                Sumérgete en un estilo de vida saludable.
              </p>
            </div>
            <div className="bg-white/5 p-2 rounded-full flex justify-between items-center backdrop-blur-sm border border-white/10">
              <input
                type="email"
                placeholder="Tu correo electrónico..."
                className="bg-transparent border-none text-white placeholder-blue-300 px-6 py-2 w-full focus:outline-none focus:ring-0"
              />
              <button className="bg-cyan-500 hover:bg-cyan-400 text-blue-900 font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-cyan-500/50">
                Suscribirse
              </button>
            </div>
          </div>

          {/* Links del Footer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12 pb-8">
            <div>
              <h4 className="font-bold text-lg mb-6 text-cyan-300">Explorar</h4>
              <ul className="space-y-4 text-blue-200/60 text-sm">
                <li>
                  {/* Usamos Link de React Router */}
                  <Link to="/" className="hover:text-white transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/nosotros"
                    className="hover:text-white transition-colors"
                  >
                    Nosotros
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-6 text-cyan-300">Ayuda</h4>
              <ul className="space-y-4 text-blue-200/60 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </Link>
                </li>
                <li>
                  {/* Enlace ancla para ir a la sección de precios en la home */}
                  <a
                    href="/#precios"
                    className="hover:text-white transition-colors"
                  >
                    Planes y Precios
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-2 bg-blue-900/30 rounded-2xl p-6 border border-white/5">
              <h4 className="font-bold text-lg mb-4 text-cyan-300">Contacto</h4>
              <p className="text-blue-100 mb-4">
                Av. del Deporte 1234, Santiago.
              </p>
              <p className="text-sm text-blue-300">
                Lunes a Domingo: 6:00 - 22:00 hrs.
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-white/10 text-sm text-blue-400/50">
            <p>
              © {new Date().getFullYear()} Academia BlueWater. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* --- BOTÓN FLOTANTE WHATSAPP --- */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-slow"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
