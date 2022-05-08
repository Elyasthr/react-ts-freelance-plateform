import { useEffect, useState } from 'react';

interface State<T> {
  data?: T;
  error?: boolean;
  isLoading?: boolean;
}

export function useFetch<T>(url: string): State<T> {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const receiveData = (await response.json()) as T;
        setData(receiveData);
        setIsLoading(false);
      } catch (err) {
        setError(true);
      }
    };

    setIsLoading(true);
    fetchData();
  }, [url]);
  return { data, error, isLoading };
}
