import { useState, useEffect } from 'react';

/**
 * useDebounce – delays updating a value until after a specified delay
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in ms (default: 400)
 * @returns debounced value
 *
 * Usage:
 *   const debouncedSearch = useDebounce(searchQuery, 400);
 */
const useDebounce = (value, delay = 400) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
