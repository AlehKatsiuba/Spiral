import React, { useState, useEffect } from 'react';

export function useApi(fetchApi, deps) {
  const [data, setData] = useState({ data: null, isLoading: true });

  useEffect(() => {
    fetchApi().then(data => setData({ data, isLoading: false }));
  }, deps);

  return data;
}