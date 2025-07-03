'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Images } from 'lucide-react';

export default function GalleryGrid({ tour }) {
  const [showAllImages, setShowAllImages] = useState(false);

  if (!tour?.gallery?.length) return null;

  const displayImages = tour.gallery.slice(0, 5);
  const mainImage = displayImages[0];
  const gridImages = displayImages.slice(1, 5);
  const remainingCount = tour.gallery.length - 5;

  const handleShowMore = () => {
    setShowAllImages(true);
  };

  if (showAllImages) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tour.gallery.map(image => (
          <div key={image.id} className="relative h-64 overflow-hidden rounded-lg">
            <Image
              alt={image.alt}
              src={image.img}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
        <button
          onClick={() => setShowAllImages(false)}
          className="col-span-full btn btn-outline text-blue-500 px-6 py-2 rounded-md mt-4"
        >
          نمایش کمتر
        </button>
      </div>
    );
  }

  return (
    <div className="flex gap-4 h-96">
      <div className="flex-1 relative overflow-hidden rounded-lg">
        <Image
          alt={mainImage.alt}
          src={mainImage.img}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-2">
        {gridImages.map((image, index) => (
          <div key={image.id} className="relative overflow-hidden rounded-lg">
            <Image
              alt={image.alt}
              src={image.img}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
            {index === 3 && remainingCount > 0 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <button
                  onClick={handleShowMore}
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
  );
}
