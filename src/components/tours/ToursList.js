import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';
import TourCard from './TourCard';
import Pagination from '../ui/Pagination';

export default function ToursList({ tours }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedTours, setPaginatedTours] = useState([]);
  const toursPerPage = 6;
  const totalPages = Math.ceil(tours.length / toursPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * toursPerPage;
    const endIndex = startIndex + toursPerPage;
    setPaginatedTours(tours.slice(startIndex, endIndex));
  }, [currentPage, tours]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  if (tours.length === 0) {
    return (
      <div className="bg-base-100 shadow-md rounded-lg p-8 text-center">
        <AlertCircle size={48} className="mx-auto mb-4 text-warning" />
        <h3 className="text-xl font-bold mb-2">متأسفانه توری یافت نشد</h3>
        <p className="text-gray-600">لطفاً فیلترهای جستجو را تغییر دهید یا معیارهای دیگری را امتحان کنید.</p>
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