import type { Character } from "../../types/character"

interface CardProps {
  character: Character;
}
const CharacterCard = ({ character}: CardProps) => {
// Función para determinar el indicador visual de estado
  const renderStatusIcon = () => (character.status === "Alive" ? "🟢" : "🔴");
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
        {character.namepb.charAt(0)}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{character.namepb}</h3>
      <p className="text-slate-500 text-sm mb-2">{character.status}{renderStatusIcon()}</p>
      <span className="inline-block bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-md font-medium">
        {character.species}
      </span>
      <img 
        className="mt-4 rounded-lg w-full object-cover" 
        src={character.image} 
        alt={character.namepb} 
      />
    </div>
  );
};

export default CharacterCard ;