import { useState } from "react";
import { usePhrasalVerbs } from "../hooks/usePhrasalVerbs";
import PhrasalVerbCard from "../components/CardPhrasalVerb/PhrasalVerbCard";

const PhrasalVerbsGenerator = () => {
  const { phrasalVerbs, loading, error } = usePhrasalVerbs();
  const [input, setInput] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  if (loading) return <p className="p-8 text-center">Cargando phrasal verbs...</p>;
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;

  const filtered = search
    ? phrasalVerbs.filter((pv) => pv.text.toLowerCase().startsWith(search.toLowerCase()))
    : phrasalVerbs;

  const handleSearch = () => {
    setSearch(input.trim());
  };

  const handleReset = () => {
    setInput("");
    setSearch("");
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 text-center">Phrasal Verbs</h1>

      {/* Barra de búsqueda */}
      <div className="flex gap-2 justify-center mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Buscar por letra o palabra..."
          className="border border-slate-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:border-indigo-500"
        />
        <button
          onClick={handleSearch}
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-all"
        >
          Buscar
        </button>
        {search && (
          <button
            onClick={handleReset}
            className="bg-slate-200 text-slate-600 px-4 py-2 rounded-lg hover:bg-slate-300 transition-all"
          >
            Reset
          </button>
        )}
      </div>

      {/* Resultado */}
      {filtered.length === 0 ? (
        <p className="text-center text-slate-500">No hay phrasal verbs que empiecen por "{search}"</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((pverb) => (
            <PhrasalVerbCard key={pverb._id} phrasalverb={pverb} />
          ))}
        </div>
      )}
    </div>
  );
};

export default PhrasalVerbsGenerator;