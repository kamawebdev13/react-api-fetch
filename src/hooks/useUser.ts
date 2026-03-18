import { useState, useEffect } from "react";
import type { User } from "../types/user";

export function useUser() {
  // LOS TRES ESTADOS CLASICOS DE UNA PETICION HTTP
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Error al conectar con servidor");
        }
        const data = await response.json();
        setUsers(data); //Guardamos los datos
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false); //Independientemente de lo que pase, ya no estamos cargando
      }
    };
    fetchUsers();
  }, []);
  return { users, loading, error };
}
