/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { User } from "../types/User";

// should be moved to .env on prod
const API_URL = 'https://jsonplaceholder.typicode.com';

export default function useUser(id: number) {
  const [data, setData] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const controller = new AbortController();
        setLoading(true);
        
        const response = await fetch(`${API_URL}/users/${id}`, {
          signal: controller.signal
        });

        const json = await response.json();
        
        setData(json);
        
        setLoading(false);
        
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id])

  return { data, loading, error };
}