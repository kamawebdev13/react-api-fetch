import type { User } from "../../types/user";

interface CardProps {
  user: User;
}
const CardUser = ({ user }: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all">
      <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl mb-4">
        {user.name.charAt(0)}
      </div>
      <h3 className="text-lg font-bold text-slate-800">{user.name}</h3>
      <p className="text-slate-500 text-sm mb-2">{user.email}</p>
      <span className="inline-block bg-slate-100 text-slate-600 text-xs px-3 py-1 rounded-md font-medium">
        {user.company.name}
      </span>
    </div>
  );
};

export default CardUser;
