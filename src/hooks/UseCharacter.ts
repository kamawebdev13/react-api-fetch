import { useState, useEffect } from "react";
import type { Character } from "../types/character";

export function useCharacter() {
  // LOS TRES ESTADOS CLASICOS DE UNA PETICION HTTP
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
        );
        if (!response.ok) {
          throw new Error("Error al conectar con servidor");
        }
        const data = await response.json();
        setCharacters(data.results); //Guardamos los datos
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false); //Independientemente de lo que pase, ya no estamos cargando
      }
    };
    fetchUsers();
  }, []);
  return { characters, loading, error };
}
