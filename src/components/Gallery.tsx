import React, { useState } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { galleryImages } from '@/components/data/galleryImages';
import { shuffleArray } from '@/utils/shuffleArray';
import { UseModal } from "@/hooks/useModal";

export function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [shuffledImages] = useState(() => shuffleArray(galleryImages));
  const {
    modalImg,
    modalIndex,
    openModal,
    closeModal,
    prevImage,
    nextImage,
  } = UseModal(shuffledImages);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            School Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a glimpse into our vibrant school life, modern facilities, and the wonderful moments we create together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shuffledImages.slice(0, visibleCount).map((image, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt=""
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500 cursor-pointer"
                    onClick={() => openModal(image.src, index)}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          {visibleCount < shuffledImages.length && (
            <button
              onClick={handleShowMore}
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View More Photos
            </button>
          )}
        </div>
      </div>

      {/* Modal for large image with side navigation */}
      {modalImg && modalIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Previous Button */}
            {modalIndex > 0 && (
              <button
                onClick={prevImage}
                className="absolute left-[-3rem] md:left-[-4rem] top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl z-10"
                aria-label="Previous"
              >
                {/* Left chevron icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {/* Image */}
            <img
              src={modalImg}
              alt=""
              className="max-h-[80vh] max-w-[90vw] rounded shadow-lg"
            />

            {/* Next Button */}
            {modalIndex < shuffledImages.length - 1 && (
              <button
                onClick={nextImage}
                className="absolute right-[-3rem] md:right-[-4rem] top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full w-12 h-12 flex items-center justify-center text-3xl z-10"
                aria-label="Next"
              >
                {/* Right chevron icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 text-white text-3xl font-bold bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 transition pb-1"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
