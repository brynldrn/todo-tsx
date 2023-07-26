/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Todo } from "../types/Todo";

// should be moved to .env on prod
const API_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Custom hook for fetching and storing todos
 * 
 * @returns { data, loading, error }
 */
export default function useTodos() {
  const [data, setData] = useState<Todo[] | null>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const controller = new AbortController();
        setLoading(true);
        
        const response = await fetch(`${API_URL}/todos`, {
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
  }, [])

  return { data, loading, error };
}