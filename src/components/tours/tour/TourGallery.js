'use client';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X, Images } from 'lucide-react';

export default function TourGallery({ tour }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [showAllImages, setShowAllImages] = useState(false);

  if (!tour?.gallery?.length) return null;

  const displayImages = showAllImages ? tour.gallery : tour.gallery.slice(0, 5);
  const remainingCount = tour.gallery.length - 5;

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % tour.gallery.length);
  };

  const prevImage = () => {
    setCurrentImage(prev => (prev - 1 + tour.gallery.length) % tour.gallery.length);
  };

  if (showAllImages) {
    return (
      <div className="bg-white">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">گالری تصاویر</h2>
            <button
              onClick={() => setShowAllImages(false)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              بازگشت به نمای اصلی
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {tour.gallery.map((image, index) => (
              <div
                key={image.id}
                className="relative aspect-[4/3] overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => {
                  setCurrentImage(index);
                  setShowLightbox(true);
                }}
              >
                <Image
                  alt={image.alt}
                  src="/japen.png"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[40vh] mt-15">
        <div className="grid grid-cols-4 grid-rows-2 gap-2 h-full mx-auto">
          {/* Main Image */}
          <div
            className="col-span-4 sm:col-span-2 row-span-2 relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => {
              setCurrentImage(0);
              setShowLightbox(true);
            }}
          >
            <Image
              alt={displayImages[0].alt}
              src="/japen.png"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </div>

          {/* Grid Images */}
          {displayImages.slice(1, 5).map((image, index) => (
            <div
              key={image.id}
              className="relative overflow-hidden rounded-xl cursor-pointer group"
              onClick={() => {
                setCurrentImage(index + 1);
                setShowLightbox(true);
              }}
            >
              <Image
                alt={image.alt}
                src="/japen.png"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {index === 3 && remainingCount > 0 && (
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
                  <button
                    onClick={e => {
                      e.stopPropagation();
                      setShowAllImages(true);
                    }}
                    className="text-white flex items-center gap-2 text-lg font-medium hover:scale-105 transition-transform"
                  >
                    <Images className="w-6 h-6" />
                    {remainingCount}+ تصاویر بیشتر
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full max-w-4xl max-h-[80vh] mx-4">
            <Image
              alt={tour.gallery[currentImage].alt}
              src="/japen.png"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
            {currentImage + 1} از {tour.gallery.length}
          </div>
        </div>
      )}
    </>
  );
}
