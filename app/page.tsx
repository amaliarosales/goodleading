export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8 md:p-24">
      <div className="max-w-4xl mx-auto">
        {/* Encabezado */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900">GoodLeading</h1>
          <p className="text-xl text-gray-600 mt-2">Sistemas operativos para el liderazgo moderno.</p>
        </header>

        {/* Grid de Aplicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Tarjeta del Pomodoro */}
          <a href="/pomodoro" className="block p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:border-blue-500 transition-all">
            <h2 className="text-xl font-semibold text-gray-800">Focus Session</h2>
            <p className="text-gray-600 mt-2">Maximiza tu trabajo profundo con bloques de tiempo gestionados.</p>
          </a>

          {/* Tarjeta de Tareas (Próxima) */}
          <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 opacity-60">
            <h2 className="text-xl font-semibold text-gray-800">Workflow Tasking</h2>
            <p className="text-gray-600 mt-2">Próximamente: Priorización ejecutiva.</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
