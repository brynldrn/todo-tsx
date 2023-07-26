/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { User } from "../types/User";

// should be moved to .env on prod
const API_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Custom hook for fetching user by id
 * 
 * @param id the user id in number format
 * @returns { data, loading, error }
 */
export default function useUser(id: number | undefined) {
  const [data, setData] = useState<User | null>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!id) { return }
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