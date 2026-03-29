import { useState, useEffect } from "react";
import type { PhrasalVerb } from "../types/phrasalverb";

export function usePhrasalVerbs() {
  const [phrasalVerbs, setPhrasalVerbs] = useState<PhrasalVerb[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchPhrasalVerbs = async () => {
      try {
        const response = await fetch(
          "https://api-frases-react.vercel.app/api/phrasalverbs"
        );
        if (!response.ok) {
          throw new Error("Error al conectar con servidor");
        }
        const data = await response.json();
        setPhrasalVerbs(data); // ← tu API devuelve el array directamente, no data.phrasalverbs
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    fetchPhrasalVerbs();
  }, []);

  return { phrasalVerbs, loading, error }; // ← devolver phrasalVerbs, no PhrasalVerb
}