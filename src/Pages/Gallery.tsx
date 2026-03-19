import  {useCharacter} from "../hooks/useCharacter";
import CharacterCard from "../components/CardUser/CharacterCard";

const Gallery = () => {
  const { characters, loading, error } = useCharacter();

  if (loading) return <p className="p-8 text-center">Cargando personajes...</p>;
  if (error) return <p className="p-8 text-center text-red-500">{error}</p>;

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-slate-900 text-center">Rick & Morty Cast</h1>
      
      {/* Grid responsivo para las tarjetas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;