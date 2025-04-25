import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pageNumbers = [];
    const showDirectNeighbors = 1;
    const boundaryCount = 1;

    for (let i = 1; i <= boundaryCount; i++) {
      pageNumbers.push(i);
    }

    if (currentPage - showDirectNeighbors > boundaryCount + 1) {
      pageNumbers.push('ellipsis-start');
    }

    for (
      let i = Math.max(boundaryCount + 1, currentPage - showDirectNeighbors);
      i <= Math.min(totalPages - boundaryCount, currentPage + showDirectNeighbors);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (currentPage + showDirectNeighbors < totalPages - boundaryCount) {
      pageNumbers.push('ellipsis-end');
    }

    for (
      let i = Math.max(totalPages - boundaryCount + 1, boundaryCount + 1);
      i <= totalPages;
      i++
    ) {
      pageNumbers.push(i);
    }

    return [...new Set(pageNumbers)];
  };

  const pageNumbers = getPageNumbers();

  return (
    <nav aria-label="Pagination" className="flex justify-center my-8">
      <ul className="flex items-center gap-1 md:gap-2">
        {/* Previous button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center rounded-full justify-center w-10 h-10 transition-all duration-200
                     hover:bg-blue-600 text-black hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            aria-label="Previous page"
          >
            <ChevronRight size={20} />
          </button>
        </li>

        {/* Page numbers */}
        {pageNumbers.map((page, index) => (
          <li key={`page-${page}-${index}`}>
            {page === 'ellipsis-start' || page === 'ellipsis-end' ? (
              <span className="flex items-center justify-center w-8 h-10 text-black/60">•••</span>
            ) : (
              <button
                onClick={() => onPageChange(page)}
                className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200
                          ${
                            currentPage === page
                              ? 'bg-blue-600 text-white font-medium'
                              : 'hover:bg-blue-500/20 '
                          }`}
                aria-label={`Page ${page}`}
                aria-current={currentPage === page ? 'page' : undefined}
              >
                {page}
              </button>
            )}
          </li>
        ))}

        {/* Next button */}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200
                     hover:bg-blue-600 text-black hover:text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
            aria-label="Next page"
          >
            <ChevronLeft size={20} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
