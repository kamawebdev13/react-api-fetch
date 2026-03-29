import { usePhrasalVerbs } from "../hooks/usePhrasalVerbs";
import PhrasalVerbCard from "../components/CardPhrasalVerb/PhrasalVerbCard";

const PhrasalVerbsGenerator = () => {
  const { phrasalVerbs, loading, error } = usePhrasalVerbs(); // ← phrasalVerbs con V mayúscula

  if (loading) return <p className="p-8 text-center">Cargando phrasal verbs...</p>;
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 text-center">Phrasal Verbs</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phrasalVerbs.map((pverb) => (
          <PhrasalVerbCard key={pverb._id} phrasalverb={pverb} /> 
        ))}
      </div>
    </div>
  );
};

export default PhrasalVerbsGenerator;