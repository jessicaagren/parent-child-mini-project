import { useState, useEffect } from 'react';

// Custom hook for fetching data with a generic type <T>
function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null); // Generic data type
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const jsonData: T = await response.json(); // Cast response as generic type
        console.log('Fetched data:', jsonData);
        setData(jsonData);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : 'An unknown error occurred'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
