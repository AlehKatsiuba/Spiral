import { useState, useEffect } from 'react';

export function useApi(fetchApi, ...options) {
  const [data, setData] = useState({ data: null, isLoading: true });

  useEffect(() => {
    setData({ ...data, isLoading: true });
    fetchApi(...options)
      .then(res => setData({ data: res, isLoading: false }));
  }, [fetchApi, ...options]);
  return data;
}