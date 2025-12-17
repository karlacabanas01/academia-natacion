import { useState } from "react";
import { Link } from "react-router-dom";

function Portal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("¡Esta funcionalidad estará conectada a AWS Cognito pronto!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576610616656-d3aa5d1f4534?auto=format&fit=crop&q=80')",
        }}
      ></div>

      <div className="max-w-md w-full space-y-8 relative z-10 bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
        <div className="text-center">
          <span className="text-4xl">🏊‍♂️</span>
          <h2 className="mt-4 text-3xl font-extrabold text-blue-900">
            Portal de Alumnos
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Gestiona tus clases, pagos y progreso.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="email-address" className="sr-only">
                Correo electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm bg-gray-50"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-xl relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 focus:z-10 sm:text-sm bg-gray-50"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Recordarme
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-cyan-600 hover:text-cyan-500"
              >
                ¿Olvidaste tu clave?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-blue-900 hover:bg-cyan-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 shadow-lg"
            >
              Ingresar
            </button>
          </div>
        </form>

        <div className="text-center mt-4">
          <Link to="/" className="text-sm text-gray-500 hover:text-blue-900">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Portal;
