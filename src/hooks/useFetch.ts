import { useState, useEffect } from 'react';
import AsoiafCharacterType from '../types/ASOIAFCharacterType/ASOIAFCharacterType';

// Custom hook for fetching data
function useFetch(url: string) {
  const [data, setData] = useState<AsoiafCharacterType | null>(null); // State for data
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`An error occurred: ${response.statusText}`);
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Dependency array with url

  return { data, loading, error };
}

export default useFetch;
