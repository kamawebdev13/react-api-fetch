import CardUser from "../components/CardUser/CardUser";
import { useUser } from "../hooks/useUser";

const Directory = () => {
  // Miren la belleza de usar nuestro Custom Hook
  const { users, loading, error } = useUser();
  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-black text-slate-800 mb-8">
          Diirectorio de Empleados
        </h1>
        {/* Renderizado Condicional 1: Cargando */}
        {loading && (
          <div className="text-center py-20 text-indigo-600 font-bold text-xl animate-pulse">
            Buscando empleados en la database...
          </div>
        )}
        {/* Renderizado Condicional 2: Error */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            <strong>!Ups!</strong> Hubo un problema: {error}
          </div>
        )}
        {/* Renderizado condicional 3: cuando todo sale bellosky */}
        {!loading && !error && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.map((user) => (
              <CardUser key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
