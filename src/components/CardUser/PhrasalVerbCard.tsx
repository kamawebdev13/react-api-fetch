import type { PhrasalVerb } from "../../types/phrasalverb"

interface CardProps {
  phrasalverb: PhrasalVerb;
}
const PhrasalVerbCard = ({ phrasalverb}: CardProps) => {

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
        {phrasalverb.text.charAt(0)}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{phrasalverb.text}</h3>
      <img 
        className="mt-4 rounded-lg w-full object-cover" 
        src={phrasalverb.src} 
        alt={phrasalverb.text} 
      />
    </div>
  );
};

export default PhrasalVerbCard;