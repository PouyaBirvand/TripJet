import { useState, useEffect } from 'react';
import TourCard from './TourCard';
import Pagination from '../ui/Pagination';
import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import { useFilters } from '../../contexts/TourFiltersContext';

export default function ToursList({ tours }) {
  const { getFilterValue, updateFilters } = useFilters()

  const currentPage = parseInt(getFilterValue('page') || '1', 10);
  const toursPerPage = 6;
  const totalPages = Math.ceil(tours.length / toursPerPage);
  const [paginatedTours, setPaginatedTours] = useState([]);
  
  useEffect(() => {
    const startIndex = (currentPage - 1) * toursPerPage;
    const endIndex = startIndex + toursPerPage;
    setPaginatedTours(tours.slice(startIndex, endIndex));
  }, [currentPage, tours]);

  const handlePageChange = (page) => {
    updateFilters('page', page.toString());
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  if (tours.length === 0) {
    return (
      <div className="p-8 text-center flex flex-col justify-center items-center mt-15">
        <Image alt='empty' src="/emptytours.png" width={500} height={500} />
        <div className="flex items-center justify-center mt-4">
          <p className="text-gray-600 text-lg">متأسفانه برای مبدا تهران به مقصد مالزی توری یافت نشد!</p>
        </div>
        <Link href="/" className=" text-nowrap  mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg md:w-1/2 w-full duration-150 transition-all hover:bg-blue-600">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-6">
        {paginatedTours.map(tour => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center">
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
