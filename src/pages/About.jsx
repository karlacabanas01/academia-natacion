// src/pages/About.jsx
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white">
      {/* Header Pequeño de la página */}
      <div className="relative py-24 bg-blue-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=2070&auto=format&fit=crop')",
          }}
        ></div>
        <div className="relative max-w-6xl mx-auto px-4 text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nuestra Esencia
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Más de 15 años formando nadadores con pasión y excelencia.
          </p>
        </div>
      </div>

      {/* Contenido Principal */}
      <section className="py-16 md:py-20 px-4 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Bloque de Texto */}
        {/* Agregamos 'text-center lg:text-left' para que se centre en tablet/movil y se alinee a la izquierda en PC */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-sm font-bold text-cyan-600 uppercase tracking-widest mb-3">
            Sobre BlueWater
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            No solo enseñamos a nadar, <br className="hidden lg:block" />
            enseñamos a amar el agua.
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Fundada en 2010 por ex-nadadores olímpicos, BlueWater Academy nació
            con la misión de democratizar el acceso a la natación de alta
            calidad en un entorno seguro y motivador.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Creemos que la natación es una habilidad de vida esencial y una
            fuente inagotable de salud y bienestar. Nuestro método combina la
            técnica rigurosa con el disfrute del proceso.
          </p>
          <Link
            to="/"
            className="inline-flex items-center font-bold text-blue-600 hover:text-cyan-500 transition-colors text-lg"
          >
            Ver nuestros programas
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                fillRule="evenodd"
                d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>

        {/* Bloque de Imagen */}
        <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
          {/* Imagen con efecto de marco */}
          <div className="absolute inset-0 bg-cyan-200 rounded-3xl transform translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4"></div>

          {/* HICE RESPONSIVA LA ALTURA: h-80 en movil, h-96 en tablet, h-[500px] en PC */}
          <img
            src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=2070"
            alt="Instructor enseñando a niño"
            className="relative rounded-3xl shadow-xl z-10 object-cover w-full h-80 md:h-96 lg:h-[500px]"
          />
        </div>
      </section>

      {/* Sección de Estadísticas */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">
              +15
            </div>
            <div className="text-blue-200 font-medium">Años de Experiencia</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">
              5.000+
            </div>
            <div className="text-blue-200 font-medium">Alumnos Graduados</div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">
              28°C
            </div>
            <div className="text-blue-200 font-medium">
              Temperatura Constante
            </div>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-extrabold text-cyan-400 mb-2">
              100%
            </div>
            <div className="text-blue-200 font-medium">
              Profesores Certificados
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
