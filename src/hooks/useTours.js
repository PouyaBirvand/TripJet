import { useState, useEffect } from 'react';
import { tourService } from '../services/tour/tourService';

export function useTours(filters) {
  const [tours, setTours] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchTours = async () => {
      try {
        setIsLoading(true);
        const response = await tourService.getTours(filters);
        setTours(response.data);
        setTotalResults(response.meta.total);
        setError(null);
      } catch (err) {
        setError(err.message || 'خطا در دریافت لیست تورها');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchTours();
  }, [filters]);
  
  return { tours, totalResults, isLoading, error };
}