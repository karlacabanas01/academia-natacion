import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Link } from "react-router-dom";

// SIMULACIÓN DE DATOS (Más adelante esto vendrá de AWS DynamoDB)
const mockClases = [
  {
    id: 1,
    fecha: "22 Dic",
    hora: "10:00 AM",
    clase: "Nivel Delfín (Intermedio)",
    profesor: "Prof. Camila",
    estado: "Confirmada",
    color: "bg-green-100 text-green-700 border-green-200",
  },
  {
    id: 2,
    fecha: "24 Dic",
    hora: "11:30 AM",
    clase: "Nado Libre",
    profesor: "Sin instructor",
    estado: "Pendiente",
    color: "bg-yellow-100 text-yellow-700 border-yellow-200",
  },
  {
    id: 3,
    fecha: "29 Dic",
    hora: "09:00 AM",
    clase: "Nivel Delfín (Intermedio)",
    profesor: "Prof. Roberto",
    estado: "Confirmada",
    color: "bg-green-100 text-green-700 border-green-200",
  },
];

function Portal() {
  return (
    <Authenticator variation="modal">
      {({ signOut, user }) => (
        <div className="min-h-screen bg-gray-50 font-sans">
          {/* --- 1. NAVBAR PRIVADO --- */}
          <nav className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center sticky top-0 z-50">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏊‍♂️</span>
              <span className="font-bold text-blue-900 hidden sm:block">
                BlueWater Portal
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-gray-900">
                  {user?.signInDetails?.loginId}
                </p>
                <p className="text-xs text-green-600">● Alumno Activo</p>
              </div>
              <button
                onClick={signOut}
                className="bg-gray-100 hover:bg-red-50 hover:text-red-600 text-gray-600 px-4 py-2 rounded-lg text-sm font-medium transition-colors border border-gray-200"
              >
                Cerrar Sesión
              </button>
            </div>
          </nav>

          {/* --- 2. CONTENIDO PRINCIPAL --- */}
          <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Título de Bienvenida */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900">
                Hola de nuevo 👋
              </h1>
              <p className="text-gray-500">
                Aquí tienes el resumen de tu semana acuática.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* COLUMNA IZQUIERDA: Próxima Clase y Accesos Rápidos (Ocupa 2 espacios en PC) */}
              <div className="lg:col-span-2 space-y-8">
                {/* Tarjeta Destacada: Próxima Clase */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

                  <div className="relative z-10">
                    <span className="bg-white/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Tu próxima sesión
                    </span>
                    <div className="mt-4 flex flex-col md:flex-row md:items-end gap-6 justify-between">
                      <div>
                        <h2 className="text-4xl font-bold mb-2">
                          Mañana, 10:00 AM
                        </h2>
                        <p className="text-blue-200 text-lg flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Prof. Camila S.
                        </p>
                      </div>
                      <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 min-w-[120px]">
                        <p className="text-sm text-blue-200 uppercase font-bold">
                          Carril
                        </p>
                        <p className="text-3xl font-extrabold text-white">4</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lista de Agenda (Calendario) */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    📅 Tus Clases Agendadas
                  </h3>
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {mockClases.map((clase) => (
                      <div
                        key={clase.id}
                        className="p-4 sm:p-6 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        {/* Fecha y Hora */}
                        <div className="flex items-center gap-4">
                          <div className="bg-blue-50 text-blue-800 rounded-xl p-3 text-center min-w-[70px]">
                            <p className="text-xs font-bold uppercase">
                              {clase.fecha.split(" ")[1]}
                            </p>
                            <p className="text-xl font-bold">
                              {clase.fecha.split(" ")[0]}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 text-lg">
                              {clase.clase}
                            </h4>
                            <p className="text-gray-500 text-sm flex items-center gap-1">
                              ⏰ {clase.hora} • 👤 {clase.profesor}
                            </p>
                          </div>
                        </div>

                        {/* Estado y Botones */}
                        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold border ${clase.color}`}
                          >
                            {clase.estado}
                          </span>
                          <button className="text-red-500 hover:text-red-700 text-sm font-bold">
                            Cancelar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* COLUMNA DERECHA: Acciones Rápidas (Lateral) */}
              <div className="space-y-6">
                {/* Botón Nueva Reserva */}
                <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-4 rounded-2xl shadow-lg shadow-cyan-500/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 font-bold text-lg">
                  <span className="text-2xl">+</span> Agendar Nueva Clase
                </button>

                {/* Tarjeta de Progreso */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">
                    Tu Progreso Mensual
                  </h3>
                  <div className="flex justify-between text-sm text-gray-500 mb-2">
                    <span>Clases asistidas</span>
                    <span className="font-bold text-blue-900">6 / 8</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-400 mt-4 text-center">
                    ¡Vas excelente! Solo faltan 2 clases para completar tu meta.
                  </p>
                </div>

                {/* Link volver */}
                <div className="text-center">
                  <Link
                    to="/"
                    className="text-sm text-gray-400 hover:text-blue-900"
                  >
                    Volver al Home público
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      )}
    </Authenticator>
  );
}

export default Portal;
